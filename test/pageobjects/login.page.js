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
}

export default new LoginPage();
