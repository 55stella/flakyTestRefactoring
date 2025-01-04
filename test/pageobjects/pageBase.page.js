
export default class PageBase {
  //Reusable methods

  async click(webElement) {
    await webElement.click();
  }
  async sendText(webElement, text) {
    await webElement.sendText(text);
  }
  async getText(webElement) {
    await webElement.getText();
  }
}

