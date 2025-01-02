const { remote } = require("webdriverio");
require('dotenv').config
import loginPage from "../pageobjects/login.page";
const username = process.env.username
const password = process.env.password
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
     await loginPage.clickLoginBtn()
      await loginPage.sendUsername(username)
      await loginPage.sendPassword(password)
      await loginPage.clickSubmitBtn()
    const successText = loginPage.returnLoginSuccessText()
    console.assert(successText === "Login Successful!", "login is successful");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await browser.deleteSession();
  }
})();
