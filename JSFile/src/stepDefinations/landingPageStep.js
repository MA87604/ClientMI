"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const landingPO_1 = require("../pageObjects/landingPO");
const chai_1 = __importDefault(require("chai"));
const spacesPO_1 = require("../pageObjects/spacesPO");
const downloadHelper_1 = require("../pageObjects/downloadHelper");
const navigateTo_1 = require("../pageObjects/navigateTo");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const shadowDomElement_1 = require("../pageObjects/shadowDomElement");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');
let excel = new readWriteExcel_1.excelReadAndWrite();
let sd = new shadowDomElement_1.shadowDom();
let bf = new generalFunctions_1.basicFields();
let nt = new navigateTo_1.navigateClass();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
let pd = new downloadHelper_1.ProtractorDownloadHelper();
(0, cucumber_1.Then)('user able to view fields in dashboard page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    //await browser.sleep(5000);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dp.header), 30000);
    yield dp.header.getText().then(function (text) {
        expect(text).to.equal(text);
        console.log(text + " dashboard page has been found");
    });
    //await excel.excelWriteOperation("C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main - Copy\\testFile.xlsx", 1, 2, dp.header,SCHEME);
    yield bf.basicField(dp.username, dp.date, dp.logo);
    let frame6 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield dp.fieldText(frame6, dp.TCText, 'View terms and Conditions - ');
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield dp.onClickTC.click();
    yield console.log("Navigated to View Terms and Conditions Page");
    yield nt.navigateTo("https://login.eu1.birst.com/apps/#/dashboards/94d059b4-5a9f-4970-a5e0-3383857b8959/pages/f380eab9-6d70-45c0-b8c4-51dce0e76879");
    yield protractor_1.browser.switchTo().defaultContent();
    let frame10 = (0, protractor_1.element)(protractor_1.by.xpath("//iframe[@src='https://entry.landg.com/CAWeb/LandGEntry?targetApp=MANAGEYOURSCHEME_DOCUMENTLIBRARY_ENTRY&reference=MySI_EULA_Document.pdf']")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame10);
    yield console.log("T&c frame has been clicked");
    yield nt.navigateBack("https://login.eu1.birst.com/apps/#/dashboards/94d059b4-5a9f-4970-a5e0-3383857b8959/pages/cc25fbb0-d731-47c0-b048-8ee228d3bed9");
    yield protractor_1.browser.switchTo().defaultContent();
    let frame7 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield dp.fieldText(frame7, dp.faqText, 'View FAQ - ');
    let frame2 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame2);
    yield dp.onClickFAQ.click();
    yield console.log("Navigated to Read our FAQ's Page");
    yield nt.navigateTo("https://login.eu1.birst.com/apps/#/dashboards/5ca603af-9f0c-4dbf-b46c-a2bba4c05b48/pages/0d2a6c5b-baf6-4413-a03e-67eebb80bad6");
    yield nt.navigateBack("https://login.eu1.birst.com/apps/#/dashboards/94d059b4-5a9f-4970-a5e0-3383857b8959/pages/cc25fbb0-d731-47c0-b048-8ee228d3bed9");
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.switchTo().defaultContent();
    let frame3 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[38]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame3);
    yield dp.analytics.click().then(function () {
        nt.navigateToNewTab("https://legalandgeneral.blob.core.windows.net/live-bc-publicdata/assets/110437/video.mp4", "Navigation Training Video");
    });
    yield protractor_1.browser.switchTo().defaultContent();
    let frame8 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield dp.fieldText(frame8, dp.analyticsText, 'View Analytics Text - ');
    //else if (string == 'Advanced Data Filter video') {
    yield protractor_1.browser.sleep(5000);
    let frame4 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[39]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame4);
    yield dp.advancedDataFilter.click().then(function () {
        nt.navigateToNewTab("https://legalandgeneral.blob.core.windows.net/live-bc-publicdata/assets/110436/video.mp4", "Advanced Data Filtering Video");
    });
    yield protractor_1.browser.switchTo().defaultContent();
    //}
    //else if (string == 'Campaign Hub') {
    let frame9 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield dp.fieldText(frame9, dp.campaignText, 'View Campaign Text - ');
    yield protractor_1.browser.sleep(5000);
    let frame5 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[40]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame5);
    //await console.log("Navigated to frame 3");
    yield dp.campaignHub.click().then(function () {
        nt.navigateToNewTab("https://www.legalandgeneral.com/workplace/campaigns/campaign-hub/", "Access our campaign hub");
    });
    //}
    yield protractor_1.browser.switchTo().defaultContent();
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
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ1BhZ2VTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXBEZWZpbmF0aW9ucy9sYW5kaW5nUGFnZVN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQTJHO0FBQzNHLHdEQUF1RDtBQUN2RCxnREFBd0I7QUFFeEIsc0RBQXVEO0FBQ3ZELGtFQUF5RTtBQUN6RSwwREFBMEQ7QUFDMUQsc0VBQThEO0FBRTlELHNFQUE0RDtBQUU1RCxrRUFBK0Q7QUFNL0QsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLE9BQU8sQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBRXJGLElBQUksS0FBSyxHQUFHLElBQUksa0NBQWlCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxJQUFJLDRCQUFTLEVBQUUsQ0FBQTtBQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLDhCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLDBCQUFhLEVBQUUsQ0FBQztBQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFZLEVBQUUsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSx5Q0FBd0IsRUFBRSxDQUFDO0FBR3hDLElBQUEsZUFBSSxFQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtJQUU1RCxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsNEJBQTRCO0lBQzVCLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMs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