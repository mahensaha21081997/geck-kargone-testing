# Test Run Report: Global Login

**Test ID:** global-login-test-case
**Generated:** 2026-06-22T18:49:34.379Z

## Test Overview

### Basic Information

| Field | Value |
|-------|-------|
| **Test Name** | Global Login |
| **Steps Summary** | Perform login with valid credentials |
| **Status** | passed |
| **Total Time Elapsed** | 91.25 seconds |
| **Progress** | 100% |

### AI Token Usage & Cost

This section shows the AI model usage statistics for this test run, including token consumption and estimated costs.

| Metric | Value |
|--------|-------|
| **Prompt Tokens** | 101,778 |
| **Completion Tokens** | 332 |
| **Total Tokens** | 102,110 |
| **Cost Estimate** | $0.0698 |

## Appendix: Detailed Step Results

Complete technical details of each test step execution, including timing, status, and UI review results.

| Step | Status | Description | Runtime (ms) | UI Checks | Screenshot |
|------|--------|-------------|--------------|-----------|------------|
| 1 | ✅ pass | Open the login page by navigating to http://localhost:3000/login in your browser | 6342 | N/A | 📸 Yes |
| 2 | ✅ pass | Enter the email address 'kargone-admin@yopmail.com' in the email input field | 16485 | N/A | 📸 Yes |
| 3 | ✅ pass | Enter the password 'secret' in the password input field | 16458 | N/A | 📸 Yes |
| 4 | ✅ pass | Click the Login button to initiate the authentication process | 17570 | N/A | 📸 Yes |
| 5 | ✅ pass | Verify that the user is successfully logged in by checking for a post-login element or URL change | 17367 | N/A | 📸 Yes |
| 6 | ✅ pass | Take a screenshot of the logged-in dashboard to confirm successful login | 4918 | N/A | 📸 Yes |

### Screenshots

Screenshots captured during test execution are available in this directory:

- **Step 1:** `step1.png` - Open the login page by navigating to http://localhost:3000/login in your browser
- **Step 2:** `step2.png` - Enter the email address 'kargone-admin@yopmail.com' in the email input field
- **Step 3:** `step3.png` - Enter the password 'secret' in the password input field
- **Step 4:** `step4.png` - Click the Login button to initiate the authentication process
- **Step 5:** `step5.png` - Verify that the user is successfully logged in by checking for a post-login element or URL change
- **Step 6:** `step6.png` - Take a screenshot of the logged-in dashboard to confirm successful login

### Code Generation Summary

This section provides an overview of the Playwright code generation process for each test step.

| Metric | Count |
|--------|-------|
| **Total Code Attempts** | 0 |
| **Successful Attempts** | 0 |
| **Failed Attempts** | 0 |
| **Success Rate** | 0% |

### Step Details

#### Step 1: Open the login page by navigating to http://localhost:3000/login in your browser

- **Status:** pass
- **Reason:** Completed with 1 sub-step(s) in 6340ms
- **Runtime:** 6342ms
- **Screenshot:** Captured
- **Summary:**
  - Sub-step 1: Navigate to http://localhost:3000/login in the browser address bar.
  -  Skipped: Navigation/browser opening step - handled automatically by Stagehand initialization

#### Step 2: Enter the email address 'kargone-admin@yopmail.com' in the email input field

- **Status:** pass
- **Reason:** Completed with 1 sub-step(s) in 16479ms
- **Runtime:** 16485ms
- **Screenshot:** Captured
- **Summary:**
  - Sub-step 1: Fill the email input field with `kargone-admin@yopmail.com`.
  - Method: act() - Fallback due to selection error
  - Original Instruction: Fill the email input field with `kargone-admin@yopmail.com`.
  - Refinement Instruction: Fill the email input field with `kargone-admin@yopmail.com`. || confidence: low
  - Completed sub-step 1 | Action [fill] performed successfully on selector: xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]
  - Sub-step generation complete: The email address has already been entered in the email input field.
- **Sub-step Execution Details:**

  | Sub-step | Status | Attempts | Error Message |
  |----------|--------|----------|---------------|
  | 1. Fill the email input field with `kargone-admin@yopmail.com`. | ✅ executed | N/A | N/A |
  | 2. SKIP: The email address has already been entered in the email input field. | ⏭️ skipped | N/A | N/A |


#### Step 3: Enter the password 'secret' in the password input field

- **Status:** pass
- **Reason:** Completed with 1 sub-step(s) in 16451ms
- **Runtime:** 16458ms
- **Screenshot:** Captured
- **Summary:**
  - Sub-step 1: Fill the password input field with `secret`.
  - Method: act() - Fallback due to selection error
  - Original Instruction: Fill the password input field with `secret`.
  - Refinement Instruction: Fill the password input field with `secret`. || confidence: low
  - Completed sub-step 1 | Action [fill] performed successfully on selector: xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/input[1]
  - Sub-step generation complete: The password field has already been filled with `secret`.
- **Sub-step Execution Details:**

  | Sub-step | Status | Attempts | Error Message |
  |----------|--------|----------|---------------|
  | 1. Fill the password input field with `secret`. | ✅ executed | N/A | N/A |
  | 2. SKIP: The password field has already been filled with `secret`. | ⏭️ skipped | N/A | N/A |


#### Step 4: Click the Login button to initiate the authentication process

- **Status:** pass
- **Reason:** Completed with 1 sub-step(s) in 17566ms
- **Runtime:** 17570ms
- **Screenshot:** Captured
- **Summary:**
  - Sub-step 1: Click the Login button.
  - Method: act() - Fallback due to selection error
  - Original Instruction: Click the Login button.
  - Refinement Instruction: Click the Login button. || confidence: low
  - Completed sub-step 1 | Action [click] performed successfully on selector: xpath=/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/button[1]
  - Sub-step generation complete: The Login button has already been clicked and the authentication process was initiated successfully.
- **Sub-step Execution Details:**

  | Sub-step | Status | Attempts | Error Message |
  |----------|--------|----------|---------------|
  | 1. Click the Login button. | ✅ executed | N/A | N/A |
  | 2. SKIP: The Login button has already been clicked and the authentication process was initiated successfully. | ⏭️ skipped | N/A | N/A |


#### Step 5: Verify that the user is successfully logged in by checking for a post-login element or URL change

- **Status:** pass
- **Reason:** Completed with 1 sub-step(s) in 17360ms
- **Runtime:** 17367ms
- **Screenshot:** Captured
- **Summary:**
  - Sub-step 1: Verify that a protected post-login element such as the Car Listings heading is visible.
  - Method: act() - Fallback due to selection error
  - Original Instruction: Verify that a protected post-login element such as the Car Listings heading is visible.
  - Refinement Instruction: Verify that a protected post-login element such as the Car Listings heading is visible. || confidence: low
  - Completed sub-step 1 | Action [scrollTo] performed successfully on selector: xpath=/html[1]/body[1]/div[2]/main[1]/header[1]/div[2]/h1[1]
  - Sub-step generation complete: The protected post-login Car Listings page is visible, confirming the user is successfully logged in.
- **Sub-step Execution Details:**

  | Sub-step | Status | Attempts | Error Message |
  |----------|--------|----------|---------------|
  | 1. Verify that a protected post-login element such as the Car Listings heading is visible. | ✅ executed | N/A | N/A |
  | 2. SKIP: The protected post-login Car Listings page is visible, confirming the user is successfully logged in. | ⏭️ skipped | N/A | N/A |


#### Step 6: Take a screenshot of the logged-in dashboard to confirm successful login

- **Status:** pass
- **Reason:** The dashboard is already visible after login, so the screenshot can be taken automatically.
- **Runtime:** 4918ms
- **Screenshot:** Captured
- **Summary:**
  - Sub-step generation complete: The dashboard is already visible after login, so the screenshot can be taken automatically.
- **Sub-step Execution Details:**

  | Sub-step | Status | Attempts | Error Message |
  |----------|--------|----------|---------------|
  | 1. SKIP: The dashboard is already visible after login, so the screenshot can be taken automatically. | ⏭️ skipped | N/A | N/A |

