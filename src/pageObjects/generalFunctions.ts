const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, browser,ExpectedConditions,protractor} from "protractor";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';
import { landingPage } from "./landingPO";

chai.use(chaiAsPromised);
let expect = chai.expect;
let dp = new landingPage();

export class basicFields {

  async basicField(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder) {
    
    let username_fontType = await elem1.getCssValue("font-family");
    let username_fontSize = await elem1.getCssValue("font-size");
    
    await console.log("Username font type is - " + username_fontType + " and font size is - " + username_fontSize);
  
    await elem1.getText().then(function (text) {//Validating username is present
      //expect(text).to.equal('Monika Ahlawat');
      console.log("Username is - " + text);

    })
    let date_fontType = await elem2.getCssValue("font-family");
    let date_fontSize = await elem2.getCssValue("font-size");
  
    await console.log("Data as of font type is - " + date_fontType + " and font size is - " + date_fontSize);
    
    await elem2.getText().then(function (text) {//validating date as of is present
  
      console.log("Data as of - " + text);
  
    })
  
    await elem3.isDisplayed().then(function (isVisible) {// validating logo is displayed
      if (isVisible) {
        console.log("Logo is present");
      }
      else {
        console.log("Logo is not present");
      }
    })
  }

  async basicFieldWithoutFonts(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder) {
    
    let username_fontType = await elem1.getCssValue("font-family");
    let username_fontSize = await elem1.getCssValue("font-size");
    
    //await console.log("Username font type is - " + username_fontType + " and font size is - " + username_fontSize);
  
    await elem1.getText().then(function (text) {//Validating username is present
      //expect(text).to.equal('Monika Ahlawat');
      console.log("Username is - " + text);

    })
    let date_fontType = await elem2.getCssValue("font-family");
   let date_fontSize = await elem2.getCssValue("font-size");
  
   // await console.log("Data as of font type is - " + date_fontType + " and font size is - " + date_fontSize);
    
    await elem2.getText().then(function (text) {//validating date as of is present
  
      console.log("Data as of - " + text);
  
    })
  
    await elem3.isDisplayed().then(function (isVisible) {// validating logo is displayed
      if (isVisible) {
        console.log("Logo is present");
      }
      else {
        console.log("Logo is not present");
      }
    })
  }

  async exportButton() {
    await dp.export.click();
    await browser.wait(ExpectedConditions.presenceOf(dp.export), 30000).then(function () {
      dp.exportToggle.isSelected().then(selected => {
        if (selected) {
          console.log('Export is already selected');
        }
        else {
          dp.exportToggle.click();
          console.log("Export is selected now");
        }
      })

    })
    await dp.printPDF.click();
    await console.log("pdf is downloading");
    await browser.sleep(40000);
    await console.log("pdf is downloaded");
  }

  async linkButton(string) {
    await dp.link.click();
    await console.log("Link in the toolbar has been clicked");
    await browser.sleep(3000);
  
    //await browser.driver.switchTo().activeElement();
    await browser.wait(ExpectedConditions.elementToBeClickable(dp.copyURLBtn), 30000).then(function () {
      //dp.copyURLBtn.click();
      if (string == 'Copy URL') {
        dp.copyURLBtn.click();
        console.log("Link has been copied");
      }
      else {
        dp.close.click();
        console.log("Link has been closed");
        
      }
    })
  }

  async bookmarks(string) {
    await dp.bookmark.click();
    await console.log("Bookmark in the toolbar has been clicked");
    await browser.sleep(3000);
    await browser.wait(ExpectedConditions.elementToBeClickable(dp.plusBtn), 30000).then(function () {
      dp.plusBtn.click();
      dp.bookmarkText.sendKeys(protractor.Key.CONTROL, "a", protractor.Key.DELETE);
      dp.bookmarkText.sendKeys(string)
      dp.bookmarkOk.click();
    })
      
    await dp.bookmarkClose.click();
    await browser.sleep(3000);
    await console.log("bookmark has been closed");
  }

  async filter(string) {
    await dp.filter.click();
    await console.log("Filter in the toolbar has been clicked");
    await browser.sleep(3000);
    await dp.filterData.getText().then(function (text) {//Validating username is present
      //expect(text).to.equal(string);
      console.log("Username is - " + text);
    })
    await dp.filterClose.click();
    console.log("filter has been closed");
  }


  async browseCollection() {
    await dp.browseCollection.click();
    await console.log("Browse Collections & Dashboards in the toolbar has been clicked");
    await browser.sleep(3000);
    await dp.collectionData.getText().then(function (text) {//Validating username is present
      //expect(text).to.equal(string);
       
      dp.collectionData1.getText().then(function (text1) {
        console.log("Browse collections and Dashboards fields are - ");
        console.log(text);
        console.log(text1);
      })
    })
    await dp.collectionClose.click();
    console.log("Collection has been closed");
  }

  async tableData(elem1:ElementArrayFinder) {
    await elem1.getText().then(function (text) {
      console.log(text);
    })


  }


 

}