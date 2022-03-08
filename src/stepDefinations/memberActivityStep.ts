import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { Alert, Browser } from 'selenium-webdriver';
import { WebdriverWebElement } from 'protractor/built/element';
import { protractor } from 'protractor/built/ptor';
import { threadId } from 'worker_threads';
import { Console } from 'console';
import { memInfo } from '../pageObjects/memInfoPO';
import { memActivity } from '../pageObjects/memberActivityPO';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';


let excel = new excelReadAndWrite();
let bf = new basicFields();
let ma = new memActivity();
let mi = new memInfo();
let sp = new schemePage();
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();
let path = "C:\\Automation\\ClientMI\\data\\memberActivity.xlsx";

When('user navigates to Member Activity Overview', async () => {

  
  await browser.sleep(5000);
  await sp.netMovementLink.click();

  await browser.sleep(10000);

})


Then('user able to view the Member Activity fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(ma.username, ma.dataAsOf, ma.logo);

  await ma.tile.getText().then(function (text) {//validating date as of is present
  
    console.log("Tile name is - " + text);

  })

  await ma.groupName.getText().then(function (text) {//validating date as of is present
  
    console.log("Group name is - " + text);

  })

})


Then('user able to view {string} Member Activity filter {string}', async (schemeId, string) => {

  await browser.sleep(5000);

  //await sp.schemeFilter(ma.schemeCategory, ma.search, ma.radioBtn, ma.minMaxBtn, string);

  //await browser.sleep(5000);

  await sp.lookForElement(ma.memNetMovement, 'Member net movement is - ', 'Member net movement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 3, 3, ma.memNetMovement, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.totCont, 'Total Contributions is - ', 'Total Contributions is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 4, 3, ma.totCont, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.totPaymentOut, 'Total payment out is - ', 'Total payment out is  missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, ma.totPaymentOut, schemeId);
  await browser.sleep(2000);

  await sp.tableData(ma.tableHeader, ma.row);

  await dp.browseCollection.click();

  await ma.memberActivityAnalysis.click();
  await browser.sleep(5000);

  await sp.lookForElement(ma.memberStartDate, 'Members at start date - ', 'Members at start date is missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 6, 3, ma.memberStartDate, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.memberEndDate, 'Members at end date - ', 'Members at end date is missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 7, 3, ma.memberEndDate, schemeId);
  await browser.sleep(2000);

})


  

