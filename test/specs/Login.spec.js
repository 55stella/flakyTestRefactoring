const { remote } = require("webdriverio");
import loginPage from "../pageobjects/login.page";

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
    // Navigate to the login screen
    const loginButton = await browser.$("~loginButton");
    await loginButton.click();

    // Enter credentials
    await (await browser.$("~usernameInput")).setValue("testuser");
    await (await browser.$("~passwordInput")).setValue("password123");

    // Submit login
    const submitButton = await browser.$("~submitButton");
    await submitButton.click();

    // Validate login success
    const successMessage = await browser.$("~successMessage");
    const successText = await successMessage.getText();
    console.assert(successText === "Login Successful!", "Login failed");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await browser.deleteSession();
  }
})();
