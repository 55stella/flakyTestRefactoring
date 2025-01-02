
export default class PageBase {
  //Reusable methods

  async click(webElement) {
    await webElement.click();
  }
  async sendText(webElement) {
    await webElement.sendText();
  }
  async getText(webElement) {
    await webElement.getText();
  }
}

