import { $ } from '@wdio/globals'
import pageBasePage from './pageBase.page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends pageBasePage {
    get loginBtn () {
        return $("~loginButton");
    }
    get userNameInputField() {
        return $("~usernameInput");
    }
    get passwordInputField() {
        return $("~passwordInput");
    }
    get submitBtn() {
        return $("~submitButton");
    }
    get successMessageAfterLogin() {
        return $("~successMessage");
    }




    // methods 
    async clickLoginBtn() {
        await this.click(this.loginBtn)
    }
    async sendUsername(username) {
        await this.sendText(this.userNameInputField, username)
    }
    async sendPassword(password) {
        await this.sendText(this.passwordInputField, password)
    }
    async clickSubmitBtn() {
        await this.click(this.submitBtn)
    }
    async returnLoginSuccessText() {
        const successText = await this.getText(this.successMessageAfterLogin)
        return successText
    }

}

export default new LoginPage();
