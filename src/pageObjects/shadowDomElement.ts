import { by, element, ElementFinder, ElementArrayFinder, WebElement,WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;


export class shadowDom {
  
  constructor()
  {
  
  }

  async findShadowDomElement(shadowHostSelector, shadowElementSelector): Promise<WebElement> {
  let shadowHost = browser.findElement(by.css(shadowHostSelector));
  let shadowRoot: any = await browser.executeScript("return document.querySelector('#viewer').shadowRoot.querySelector('#toolbar').shadowRoot.querySelector('#downloads').shadowRoot.querySelector('#download')", shadowHost);
  return shadowRoot.findElement(by.css(shadowElementSelector));
}
}


