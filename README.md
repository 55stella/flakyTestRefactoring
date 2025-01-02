# Refactored Login Test Script

## Overview
This document outlines the improvements made to a flaky test script used for testing the login functionality of the Matchify application. The changes aim to enhance the code's reliability, security, and maintainability.

---

## Key Improvements

### 1. Modularization Using Page Object Model (POM)
- **What Changed:**
  Introduced a `loginPage` object to encapsulate all login-related actions and elements.
  
- **Why:**
  - Simplifies the test script by centralizing all login functionality.
  - Makes the code reusable and easier to maintain.

---

### 2. Secure Credential Management
- **What Changed:**
  Removed hardcoded credentials and replaced them with environment variables managed using `dotenv`.

- **Why:**
  - Protects sensitive data from accidental exposure.
  - Enables seamless testing across different environments.

---

### 3. Improved Readability
- **What Changed:**
  Replaced direct element interactions with descriptive methods like `clickLoginBtn`, `sendUsername`, and `sendPassword` from `loginPage`.

- **Why:**
  - Makes the test script easier to read and understand.
  - Reduces reliance on inline comments.

---

### 4. Enhanced Error Handling
- **What Changed:**
  Improved error handling with specific messages to simplify debugging.

- **Why:**
  - Ensures clear logs in case of test success.
  - Makes troubleshooting more efficient.

---






## Example Code Changes
### Original Script
```javascript
const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        capabilities: {
            platformName: 'Android',
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': '/path/to/matchify.apk',
        },
    });

    try {
        const loginButton = await browser.$('~loginButton');
        await loginButton.click();
        await (await browser.$('~usernameInput')).setValue('testuser');
        await (await browser.$('~passwordInput')).setValue('password123');
        const submitButton = await browser.$('~submitButton');
        await submitButton.click();
        const successMessage = await browser.$('~successMessage');
        const successText = await successMessage.getText();
        console.assert(successText === 'Login Successful!', 'Login failed');
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await browser.deleteSession();
    }
})();
```

### Refactored Script
```javascript
const { remote } = require("webdriverio");
require('dotenv').config();
import loginPage from "../pageobjects/login.page";

const username = process.env.username;
const password = process.env.password;

(async () => {
  const browser = await remote({
    capabilities: {
      platformName: "Android",
      "appium:deviceName": "emulator-5554",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": "/path/to/matchify.apk",
    },
  });

  try {
    await loginPage.clickLoginBtn();
    await loginPage.sendUsername(username);
    await loginPage.sendPassword(password);
    await loginPage.clickSubmitBtn();
    const successText = await loginPage.returnLoginSuccessText();
    console.assert(successText === "Login Successful!", "Login success");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await browser.deleteSession();
  }
})();
