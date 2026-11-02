import { spawn } from 'node:child_process';
import { timingSafeEqual } from 'node:crypto';
import express from 'express';

const PORT = Number(process.env.PORT) || 4010;
const HOST = process.env.HOST || '127.0.0.1';
const TOKEN = (process.env.GROK_RELAY_TOKEN || '').trim();
const DEFAULT_BOT = process.env.GROK_BOT_NAME || 'Grok Bot';
const CLI = process.env.GROK_BOT_CLI || 'gbot';
const ACCEPT_WAIT_MS = 8000;

if (TOKEN.length < 16) {
  console.error('Set GROK_RELAY_TOKEN to a secret of at least 16 characters.');
  process.exit(1);
}

const sameSecret = (given) => {
  const a = Buffer.from(given);
  const b = Buffer.from(TOKEN);
  return a.length === b.length && timingSafeEqual(a, b);
};

const requireToken = (req, res, next) => {
  const header = req.get('authorization') || '';
  const given = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!given || !sameSecret(given)) {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
    return;
  }
  next();
};

const runGbot = (args, { waitMs } = {}) =>
  new Promise((resolve, reject) => {
    const command = args[0];
    const detail =
      command === 'send'
        ? `bot="${args[2]}" message=${String(args[3] || '').length} chars`
        : args.slice(1).join(' ');
    console.log(`[grok-relay] calling gbot ${command} ${detail}`);
    const usesNodeEntry = CLI.endsWith('.mjs') || CLI.endsWith('.js');
    const child = usesNodeEntry
      ? spawn(process.execPath, [CLI, ...args], { windowsHide: true })
      : spawn(CLI, args, { windowsHide: true });
    let stderr = '';
    let stdout = '';
    let settled = false;
    let timer;
    const finish = (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (error) reject(error);
      else resolve();
    };
    if (waitMs) {
      timer = setTimeout(() => {
        child.unref();
        finish();
      }, waitMs);
    }
    child.once('error', (error) => {
      finish(
        new Error(
          error.code === 'ENOENT'
            ? 'gbot is not installed on the relay machine.'
            : error.message,
        ),
      );
    });
    child.stderr.on('data', (chunk) => {
      stderr = `${stderr}${chunk}`.slice(-1000);
    });
    child.stdout.on('data', (chunk) => {
      stdout = `${stdout}${chunk}`.slice(-1000);
    });
    child.once('exit', (code) => {
      if (code === 0) finish();
      else {
        finish(
          new Error(
            stderr.trim() ||
              stdout.trim() ||
              `gbot exited with code ${code}. Check that Grok Bot is signed in on the relay machine.`,
          ),
        );
      }
    });
  });

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

app.get('/health', requireToken, async (_req, res) => {
  try {
    await runGbot(['bots', 'list', '--json']);
    res.json({ ok: true });
  } catch (error) {
    res.status(503).json({ ok: false, error: error.message });
  }
});

app.post('/send', requireToken, async (req, res) => {
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  if (!message) {
    res.status(400).json({ ok: false, error: 'message is required' });
    return;
  }
  const bot =
    typeof req.body?.bot === 'string' && req.body.bot.trim()
      ? req.body.bot.trim()
      : DEFAULT_BOT;
  try {
    await runGbot(['send', '--json', bot, message], { waitMs: ACCEPT_WAIT_MS });
    res.status(202).json({ ok: true, accepted: true });
  } catch (error) {
    res.status(503).json({ ok: false, error: error.message });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' });
});

app.listen(PORT, HOST, () => {
  console.log(`grok-relay listening on http://${HOST}:${PORT}`);
});
