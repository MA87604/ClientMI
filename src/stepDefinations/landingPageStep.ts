import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebElementPromise, ElementFinder} from 'protractor';
import { landingPage } from '../pageObjects/landingPO';
import chai from 'chai';
import { ActionSequence, Alert, Browser } from 'selenium-webdriver';
import { chooseSpaces } from '../pageObjects/spacesPO';
import { ProtractorDownloadHelper } from '../pageObjects/downloadHelper';
import { navigateClass } from '../pageObjects/navigateTo';
import { basicFields } from '../pageObjects/generalFunctions';
import { WebElement, WebDriver } from 'selenium-webdriver';
import { shadowDom } from '../pageObjects/shadowDomElement';
import { EventEmitter } from '@angular/core';
import {excelReadAndWrite} from '../pageObjects/readWriteExcel'

//import { shadowDomCss } from 'query-selector-shadow-dom/plugins/protractor';
import { querySelectorAllDeep, querySelectorDeep, shadowDomCss ,shadowDomElement } from 'query-selector-shadow-dom';
import { stringify } from 'querystring';

const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

let excel = new excelReadAndWrite();
let sd = new shadowDom()
let bf = new basicFields();
let nt = new navigateClass();
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
let pd = new ProtractorDownloadHelper();


Then('user able to view fields in dashboard page', async () => {

  await browser.waitForAngularEnabled(false);
  //await browser.sleep(5000);
  await browser.wait(ExpectedConditions.presenceOf(dp.header), 30000);

  await dp.header.getText().then(function (text)
  {
    expect(text).to.equal(text);
    console.log( text + " dashboard page has been found");
  })

  //await excel.excelWriteOperation("C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main - Copy\\testFile.xlsx", 1, 2, dp.header,SCHEME);

  await bf.basicField(dp.username, dp.date, dp.logo);

    let frame6: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    await dp.fieldText(frame6, dp.TCText, 'View terms and Conditions - ');

    
    let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    await browser.switchTo().frame(frame1);
    await dp.onClickTC.click();
    await console.log("Navigated to View Terms and Conditions Page");
    await nt.navigateTo("https://login.eu1.birst.com/apps/#/dashboards/94d059b4-5a9f-4970-a5e0-3383857b8959/pages/f380eab9-6d70-45c0-b8c4-51dce0e76879");
  await browser.switchTo().defaultContent();
    let frame10: WebElementPromise = element(by.xpath("//iframe[@src='https://entry.landg.com/CAWeb/LandGEntry?targetApp=MANAGEYOURSCHEME_DOCUMENTLIBRARY_ENTRY&reference=MySI_EULA_Document.pdf']")).getWebElement();
    await browser.switchTo().frame(frame10);
    await console.log("T&c frame has been clicked");
    await nt.navigateBack("https://login.eu1.birst.com/apps/#/dashboards/94d059b4-5a9f-4970-a5e0-3383857b8959/pages/cc25fbb0-d731-47c0-b048-8ee228d3bed9");
  await browser.switchTo().defaultContent();
    
    let frame7: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    await dp.fieldText(frame7, dp.faqText, 'View FAQ - ');
  
    let frame2: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    await browser.switchTo().frame(frame2);
    await dp.onClickFAQ.click();

    await console.log("Navigated to Read our FAQ's Page");
    await nt.navigateTo("https://login.eu1.birst.com/apps/#/dashboards/5ca603af-9f0c-4dbf-b46c-a2bba4c05b48/pages/0d2a6c5b-baf6-4413-a03e-67eebb80bad6"); 
    await nt.navigateBack("https://login.eu1.birst.com/apps/#/dashboards/94d059b4-5a9f-4970-a5e0-3383857b8959/pages/cc25fbb0-d731-47c0-b048-8ee228d3bed9");
   
    await browser.sleep(5000);
  await browser.switchTo().defaultContent();
    
    let frame3: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[38]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    
    await browser.switchTo().frame(frame3);
    await dp.analytics.click().then(function () {
    nt.navigateToNewTab("https://legalandgeneral.blob.core.windows.net/live-bc-publicdata/assets/110437/video.mp4", "Navigation Training Video");
  });
  await browser.switchTo().defaultContent();
  

    let frame8: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    await dp.fieldText(frame8, dp.analyticsText, 'View Analytics Text - ');

  //else if (string == 'Advanced Data Filter video') {
    await browser.sleep(5000);
  
    let frame4: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[39]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    
    await browser.switchTo().frame(frame4);

    await dp.advancedDataFilter.click().then(function () {
      nt.navigateToNewTab("https://legalandgeneral.blob.core.windows.net/live-bc-publicdata/assets/110436/video.mp4", "Advanced Data Filtering Video");
    })
  await browser.switchTo().defaultContent();
  
  //}
  //else if (string == 'Campaign Hub') {
  
    let frame9: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    await dp.fieldText(frame9, dp.campaignText, 'View Campaign Text - ');
  
    await browser.sleep(5000);
  
    let frame5: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[40]/dashlet/div/report/web-page-report/iframe")).getWebElement();
 
    await browser.switchTo().frame(frame5);
    //await console.log("Navigated to frame 3");

    await dp.campaignHub.click().then(function () {
      nt.navigateToNewTab("https://www.legalandgeneral.com/workplace/campaigns/campaign-hub/", "Access our campaign hub");
    })
  //}

  await browser.switchTo().defaultContent();
  
  



  






   /* await browser.switchTo().frame(frame6);

    await dp.TCText.each(function (element, index) {
      element.getText().then(function (text) {
        console.log("View terms and Conditions")
        console.log(text);
      });
    })
    await browser.switchTo().defaultContent();
  //}
  //  
  //else if (string == 'FAQ Text') {
    
    await browser.switchTo().frame(frame7);
    await dp.faqText.each(function (element, index) {
      element.getText().then(function (text) {
        console.log(text);
      });
    })
    await browser.switchTo().defaultContent();
  //}

  //else if (string == 'Analytics Text') {
    
    await browser.switchTo().frame(frame8);
    await dp.analyticsText.each(function (element, index) {
      element.getText().then(function (text) {
        console.log(text);
      });
    })
    await browser.switchTo().defaultContent();
  //}
     
  
  //else if (string == 'Campaign Hub Text') {
    
    await browser.switchTo().frame(frame9);
    await dp.campaignText.each(function (element, index) {
      element.getText().then(function (text) {
        console.log(text);
      });
    })
    await browser.switchTo().defaultContent();
  //}
   

  //else if (string == 'Select a scheme') {

    await dp.schemeCombobox.click();
    //await console.log("hello");
    await dp.schemeButton.isPresent().then(function (isVisible) {
      if (isVisible) {
        dp.schemeButton.click();
        console.log("maximise the screen");
      }
      else {
        dp.schemeButton.click();
        console.log("maximise is not present");
      }
    })
  

  //}*/

    
})