import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import chai from 'chai';
import { retirementOverview } from '../pageObjects/retirementPO';
import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';
import { landingPage } from '../pageObjects/landingPO';
import { protractor } from 'protractor/built/ptor';


let excel = new excelReadAndWrite();
let bf = new basicFields();
let dp = new landingPage();
let ro = new retirementOverview();
let sp = new schemePage();
let expect = chai.expect;
let should = chai.should;
let path = "C:\\Automation\\ClientMI\\data\\retirement.xlsx";


When('user navigates to Retirement Overview', async () => {

  await browser.sleep(5000);

  await sp.upcomingrRetirementLink.click();

  await browser.sleep(10000);

})

Then('user able to view the Retirement Overview fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(ro.username, ro.dataAsOf, ro.logo);

})
  
Then('user able to view Retirement Overview filter {string} for {string}', async (scheme, schemeId) => {

  //await sp.schemeFilter(ro.schemeCategory, ro.search, ro.radioBtn, ro.minMaxBtn, scheme);

  await browser.sleep(7000);

  await sp.lookForElement(ro.currentYear, 'current Year is - ', 'Current year is missing');

  await sp.lookForElement(ro.currentYearRet, 'Forthcoming retirement in current year are - ', 'Forthcoming retirement in current year is not unavailable');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 3, 3, ro.currentYearRet, schemeId);
  await browser.sleep(2000);

  await sp.forthRetirement(ro.year2, ro.retirement2, 'Forthcoming retirement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 4, 3, ro.retirement2, schemeId);
  await browser.sleep(2000);

  await sp.forthRetirement(ro.year3, ro.retirement3, 'Forthcoming retirement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 5, 3, ro.retirement3, schemeId);
  await browser.sleep(2000);

  await sp.forthRetirement(ro.year4, ro.retirement4, 'Forthcoming retirement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 6, 3, ro.retirement4, schemeId);
  await browser.sleep(2000);

  await sp.forthRetirement(ro.year5, ro.retirement5, 'Forthcoming retirement is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 7, 3, ro.retirement5, schemeId);
  await browser.sleep(2000);

  await dp.browseCollection.click();

  await ro.retirementAnalysis.click();
  await browser.sleep(6000);

  await sp.lookForElement(ro.totMember, 'Total Members - ', 'Total Memebers are missing');
  await browser.sleep(3000);
  await excel.excelWriteOperationString(path, 8, 3, ro.totMember, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ro.upcomingRetirementInDateRange, 'Upcoming retirements in date range are- ', 'Upcoming retirements in date range are missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 9, 3, ro.upcomingRetirementInDateRange, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ro.upcomingRetirementActive, 'Upcoming retirements active are- ', 'Upcoming retirements active are missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 10, 3, ro.upcomingRetirementActive, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(ro.upcomingRetirementDeferred, 'Upcoming retirements deferred are- ', 'Upcoming retirements deferred are missing');
  await browser.sleep(3000);
  await excel.excelWriteOperation(path, 11, 3, ro.upcomingRetirementDeferred, schemeId);
  await browser.sleep(2000);
  await ro.upcomingRetirementDeferred.click();

  await browser.actions().sendKeys(protractor.Key.END).perform();
  await browser.sleep(2000);

  await sp.tableData(ro.table1Header, ro.row1);
  await browser.sleep(3000);
  await excel.excelWriteOperation1(path, 12, 3, ro.table1Header, schemeId);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 13, 3, ro.row1, schemeId);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 14, 3, ro.summaryText, schemeId);
  await browser.sleep(2000);
  


})

 