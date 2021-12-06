const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise,browser,ExpectedConditions,protractor } from "protractor";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class navigateClass {



  async navigateTo(string) {

    await browser.sleep(8000);
    await browser.getCurrentUrl().then(function (currentUrl) {
      expect(currentUrl).to.equal(string);
    })
    await browser.sleep(8000);


  };
  async navigateBack(string) {
  
    await browser.navigate().back(); //Back method used here
    await browser.sleep(8000);
    await browser.getCurrentUrl().then(function (currentUrl) {
      expect(currentUrl).to.equal(string);
    })
    await console.log("Navigated back to Dashboard Page.");

  };


  async navigateToNewTab(string, string1) {

    await browser.getAllWindowHandles().then(function (handles) {
      browser.sleep(4000);
      let newWindowHandle = handles[1]; // this is your new window
      browser.switchTo().window(newWindowHandle).then(function () {

        browser.getCurrentUrl().then(function (currentUrl) {
          expect(currentUrl).to.equal(string);
        })
        //expect(browser.getCurrentUrl()).to.equal("https://legalandgeneral.blob.core.windows.net/live-bc-publicdata/assets/110437/video.mp4");
        console.log(string1 + " tab is opened.");
        browser.driver.close();

      });
      browser.driver.switchTo().window(handles[0]);
  
    });
    await console.log("Navigated back to Dashboard Page.");
  }
}