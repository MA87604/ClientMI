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
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\memberActivity.xlsx";

When('user navigates to Member Activity Overview', async () => {

  //browser.manage().window().setSize(900, 720);
  await browser.sleep(2000);
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


Then('user able to view {string} Member Activity data in Overview Page', async (schemeId) => {

  await browser.sleep(5000);

  await sp.lookForElement(ma.memNetMovement, 'Member net movement is - ', 'Member net movement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 14, 5, ma.memNetMovement, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.totCont, 'Total Contributions is - ', 'Total Contributions is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 15, 5, ma.totCont, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.totPaymentOut, 'Total payment out is - ', 'Total payment out is  missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 16, 5, ma.totPaymentOut, schemeId);
  await browser.sleep(2000);

  await sp.tableData(ma.tableHeader, ma.row);
  if(schemeId.includes('SAINSBURY')) {
    console.log("SAINSBURY's Scheme");
  // await excel.excelWriteOperation1(path, 15, 5, ma.tableHeader, schemeId);
  await excel.excelWriteOperation1(path, 17, 5, ma.row, schemeId);
  await browser.sleep(1000);
  }
  else if(schemeId.includes('SODEXO')) {
    console.log("SODEXO Scheme");
    await excel.excelWriteOperation1(path, 18, 5, ma.row, schemeId);
    await browser.sleep(1000);
  }
});


Then('user able to view {string} Member Activity filter in Overview Page', async (schemeId) => {

  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 4, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 7, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 8, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 9, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 10, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 12, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.memberShipDateFiler, 'Membership Date Filter option is visible', 'Membership Date Filter option is missing');
  await excel.excelWriteOperationText(path, 13, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);


})


Then('user able to view {string} Member Activity data in Analysis Page', async (schemeId) => {
  await browser.sleep(1000);

  await dp.browseCollection.click();

  await ma.memberActivityAnalysis.click();
  await browser.sleep(5000);

  await sp.lookForElement(ma.memberStartDate, 'Members at start date - ', 'Members at start date is missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 19, 5, ma.memberStartDate, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.memberEndDate, 'Members at end date - ', 'Members at end date is missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 20, 5, ma.memberEndDate, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ma.memNetMovementAnalysisValue, 'Member net movement is - ', 'Member net movement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 21, 5, ma.memNetMovementAnalysisValue, schemeId);
  await browser.sleep(2000);
  await sp.lookForElement(ma.memTodayAnalysisValue, 'Members Today is - ', 'Members Today is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 22, 5, ma.memTodayAnalysisValue, schemeId);
  await browser.sleep(2000);

})


Then('user able to view {string} Member Activity map, graph and filter in Analysis Page', async (schemeId) => {

  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 23, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.memberShipDateFiler, 'Membership Date Filter option is visible', 'Membership Date Filter option is missing');
  await excel.excelWriteOperationText(path, 26, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
//map
  await sp.lookForElement(mi.map, 'Map is visible', 'Map is missing');
  await excel.excelWriteOperationText(path, 27, 5, "Map is displayed", schemeId);
  await browser.sleep(1000);
//graph
await sp.lookForElement(mi.barChartMembersOverTime, 'Graph is visible', 'Graph is missing');
await excel.excelWriteOperationText(path, 28, 5, "Graph is displayed", schemeId);
await browser.sleep(1000);
})


Then('user able to view {string} Member Activity filter and table data in Detail Report Page', async (schemeId) => {
await dp.browseCollection.click();

await ma.memberActivityDetailReport.click();
await browser.sleep(5000);

  await sp.tableData(ma.tableHeader, ma.row);
  if(schemeId.includes('SAINSBURY')) {
    console.log("SAINSBURY's Scheme");
    // await excel.excelWriteOperation1(path, 32, 5, ma.tableHeader, schemeId);
    await excel.excelWriteOperation1(path, 40, 5, ma.row, schemeId);
    await browser.sleep(1000);
  }
  else  if(schemeId.includes('SODEXO')) {
    console.log("SODEXO Scheme");
    // await excel.excelWriteOperation1(path, 40, 5, ma.tableHeader, schemeId);
    await excel.excelWriteOperation1(path, 41, 5, ma.row, schemeId);
    await browser.sleep(1000);
  }
  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 29, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 30, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.contDateFilter, 'Date Filter option is visible', 'Date Filter option is missing');
  await excel.excelWriteOperationText(path, 31, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 32, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.companyNameFilter, 'Gone away Filter option is visible', 'Gone away Filter option is missing');
  await excel.excelWriteOperationText(path, 33, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 34, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 35, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 37, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 38, 5, "Filter is displayed", schemeId);
  await browser.sleep(1000);

})




