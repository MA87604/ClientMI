import { Given, When, Then } from '@cucumber/cucumber';
import {
  browser,
  by,
  By,
  element,
  ExpectedConditions,
  until,
  WebDriver,
  WebElement,
  WebElementPromise
} from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { protractor } from 'protractor/built/ptor';
import { assetUnderMgmt } from '../pageObjects/assetsUnderMgmtPO';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';
import elementIsNotVisible = until.elementIsNotVisible;
import { memberOptOut } from '../pageObjects/memberOptOutPO';

import {memInfo} from "../pageObjects/memInfoPO";
let mo = new memberOptOut();
let mi = new memInfo();

let excel = new excelReadAndWrite();
let lp = new landingPage();
let am = new assetUnderMgmt();
let sp = new schemePage();
let bf = new basicFields();
let expect = chai.expect;
let should = chai.should;
let space = new chooseSpaces();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\memberOptOut2.xlsx";

let moment = require('moment');
let lastMonthFirstDay = moment().subtract(1, 'months').startOf('month').format('DD/MM/YYYY')
// console.log("lastMonthFirstDay: "+lastMonthFirstDay);

When('user navigates to Member Opt Out Overview page', async () => {
  sp.optOutRateLink.click().then(function(){
    console.log("Link Clicked");
  });
  await browser.sleep(5000);
});

Then('user able to view the Member Opt Out fields for {string}', async (schemeId) => {
  await browser.sleep(5000);

  await sp.lookForElement(mo.totEnrolment, 'Total Enrolments in this date range is - ', 'Total Enrolments in this date range is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 3, 3,mo.totEnrolment, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.enrolmentWithOptOut, 'Total Enrolments with optout rights in this date range is - ', 'Total Enrolments with optout rights in this date range is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 4, 3,mo.enrolmentWithOptOut, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.noOfOptOut, 'Number of opt out is - ', 'No. of members are missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 5, 3,mo.noOfOptOut, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.optOutWithCont, 'Number of opt outs with a recieved contribution is - ', 'Number of opt outs with a recieved contribution is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 6, 3,mo.optOutWithCont, schemeId);
  await browser.sleep(1000);

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[48]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);

  await mo.brekdownBtn2.click();

  await browser.switchTo().defaultContent();

  await browser.sleep(2000);
  await sp.lookForElement(mo.empRegular, 'Employee Regular is - ', 'Employee Regular is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 7, 3,mo.empRegular, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.empSingle, 'Employee Single is - ', 'Employee Single is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 8, 3,mo.empSingle, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.employerRegular, 'Employer Regular is - ', 'Employer Regular is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 9, 3,mo.employerRegular, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.employerSingle, 'Employer Single is - ', 'Employer Single is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 10, 3,mo.employerSingle, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.avgAge, 'Average age of members opting out is - ', 'Average age of members opting out is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 11, 3, mo.avgAge, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.female, 'Female members opting out is - ', 'Female members opting out is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 12, 3, mo.female, schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mo.male, 'Male members opting out is - ', 'Male members opting out is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationString(path, 13, 3, mo.male, schemeId);
  await browser.sleep(1000);

  await sp.graph(mo.map, 'Map -Opts outs by postcode map is visible', 'Map- Opts outs by postcode map is not visible');
  await browser.sleep(1000);
  await excel.excelWriteOperationText(path, 14, 3, "Displayed", schemeId);
  await browser.sleep(1000);

  await sp.graph(mo.optOutByChannelGender, 'Bar chart-Opts outs by channel and gender graph is visible', 'Bar chart-Opts outs by channel and gender graph is not visible');
  await browser.sleep(1000);
  await excel.excelWriteOperationText(path, 15, 3, "Displayed", schemeId);
  await browser.sleep(1000);

  await browser.actions().sendKeys(protractor.Key.END).perform();

  await browser.sleep(3000);

  await sp.graph(mo.optOutByAgeGender, 'Bar chart-Opts outs by age and gender graph is visible', 'Bar chart-Opts outs by age and gender graph is not visible');
  await browser.sleep(1000);
  await excel.excelWriteOperationText(path, 16, 3, "Displayed", schemeId);
  await browser.sleep(1000);

});



Then('user able to view {string} Member Opt Out filters', async (schemeId) => {

  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 17, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 18, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 20, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.memberShipDateFiler, 'Opt Out Date Filter option is visible', 'Opt Out Date Filter option is missing');
  await excel.excelWriteOperationText(path, 21, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);


});
