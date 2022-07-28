import { Given, When, Then } from '@cucumber/cucumber';
import {
  browser,
  by,
  By,
  element,
  ElementFinder,
  ExpectedConditions,
  WebDriver,
  WebElement,
  WebElementPromise
} from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { Alert, Browser } from 'selenium-webdriver';
import { WebdriverWebElement } from 'protractor/built/element';
import { protractor } from 'protractor/built/ptor';
import { threadId } from 'worker_threads';
import { Console } from 'console';

import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';
import { memInfo } from '../pageObjects/memInfoPO';
let mi = new memInfo();

let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();

let sp = new schemePage();
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\memberInformation.xlsx";


When('user navigates to Member Information Overview', async () => {
  await browser.waitForAngularEnabled(false);
  //browser.manage().window().setSize(900, 720);
  await browser.sleep(2000);
  await sp.memberTodayLink.click();

  await browser.sleep(20000);

})

Then('user able to view the Member Information fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(mi.username, mi.dataAsOf, mi.logo);

})

Then('user able to view {string} Member Information Overview filter {string}, {string}, {string} and {string}', async (schemeId, scheme, gender, ageband, age) => {

  //await sp.schemeFilter(mi.schemeCategory, mi.search, mi.radioBtn, mi.minMaxBtn, scheme);
//gender-female, age-31

  await ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1, mi.radioBtn2, mi.minimizeButton,mi.genderexpandButton, gender);

  await ga.ageFilter(mi.ageBand, mi.search2, mi.applyBtn, mi.chkAll, ageband);

  //await ga.ageFilter(mi.age, mi.search3, mi.chkBox2, mi.applyBtn, mi.chkAll, age);

  await browser.sleep(5000);

  await sp.lookForElement(mi.noOfMem, 'No. of members are - ', 'No. of members are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 3, 3, mi.noOfMem, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.regUsersOnline, 'Registered users online are - ', 'Registered users online are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 4, 3, mi.regUsersOnline, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.female, 'Membership Percentage of female members is - ','Membership Percentage of female members is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 8, 3, mi.female, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.male, 'Membership Percentage of male members is - ', 'Membership Percentage of male members is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 9, 3, mi.male, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgMemAge, 'Average member age is - ', 'Average member age are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 7, 3, mi.avgMemAge, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgFund, 'Avg fund value by member are - ', 'Avg fund value by member are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, mi.avgFund, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgPayroll, 'Avg Payroll contribution are - ', 'Avg Payroll contribution are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 6, 3, mi.avgPayroll, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgFemaleAge, 'Avg Female member age is - ', 'Avg Female member age is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 10, 3, mi.avgFemaleAge, schemeId);
  await browser.sleep(2000);


  await sp.lookForElement(mi.avgMaleAge, 'Average male member age is - ', 'Average male member age is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 11, 3, mi.avgMaleAge, schemeId);
  await browser.sleep(2000);


  /*await sp.lookForElement(sp.map, 'Map to show no. of members by postcode is visible', 'Map to show no. of members by postcode is missing');

  await sp.lookForElement(mi.memPolicyStartDt, 'Member by policy scheme start date graph is visible', 'Member by policy scheme start date graph is missing');

  await mi.memAgeGender.click();

  await browser.actions().sendKeys(protractor.Key.END).perform();

  await browser.sleep(3000);

  await sp.lookForElement(mi.memAgeGender, 'Member by Age and Gender graph is visible', 'Member by Age and Gender graph is not visible');

  await sp.lookForElement(mi.avgFundByGenderAge, 'Average fund value by age and gender graph is visible', 'Average fund value by age and gender graph is missing');

  await sp.lookForElement(mi.memByAgeActiveDeferred, 'Member by age and active or deferred graph is visible', 'Member by age and active or deferred graph is missing');
*/
  })




Then('user able to view Member Info filter options for the {string} in Overview page', async (scheme) => {
  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 12, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 13, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 16, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 17, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 18, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 20, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 21, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await mi.closeFilter.click();
  await browser.sleep(1000);

});

Then('user able to view Member Info maps or charts for the {string} in Overview page', async (scheme) => {

  await sp.lookForElement(mi.map, 'Map is visible', 'map is missing');
  await excel.excelWriteOperationText(path, 22, 3, "Map is displayed", scheme);
  await browser.sleep(1000);

/*
  await browser.executeScript("arguments[0].click();", mi.maxMapBtn);
  await browser.sleep(2000);
  await browser.executeScript("arguments[0].click();", mi.zoomin);
  await browser.executeScript("arguments[0].click();", mi.zoomin);
  await browser.executeScript("arguments[0].click();", mi.zoomin);
  console.log("Zoomed in");
  await browser.sleep(2000);
  await browser.actions().mouseMove(mi.mapUKRegion).perform();
  console.log("Mouse hovered on CA region");
  await sp.lookForElement(mi.mapPostalCodeCA,   'Postal code is visible', 'Postal code is missing');
  await excel.excelWriteOperationText(path, 30, 3, "Postal code is displayed", scheme);
  await browser.sleep(1000);
*/


  await browser.executeScript("arguments[0].scrollIntoView();",mi.barChartMembersOverTime);
  await sp.lookForElement(mi.barChartMembersOverTime, 'Bar Chart - Members over Time is visible', 'Bar Chart - Members over Time is missing');
  await excel.excelWriteOperationText(path, 23, 3, "Displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.barChartMembersByAgeAndGender, 'Bar Chart - Members by Age and Gender is visible', 'Bar Chart - Members by Age and Gender is missing');
  await excel.excelWriteOperationText(path, 24, 3, "Displayed", scheme);
  await browser.sleep(1000);


  await browser.executeScript("arguments[0].scrollIntoView();",mi.lineGrapghAvgFundbyGenderandAge);
  await sp.lookForElement(mi.lineGrapghAvgFundbyGenderandAge, 'Line - Avg Fund by Gender and Age is visible', 'Line - Avg Fund by Gender and Age is missing');
  await excel.excelWriteOperationText(path, 25, 3, "Displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.barChartMembersByAgeAndActiveDeferred, 'Bar Chart - Members by Age and Active or Deferred is visible', 'Bar Chart - Members by Age and Active or Deferred is missing');
  await excel.excelWriteOperationText(path, 26, 3, "Displayed", scheme);
  await browser.sleep(1000);

});


Then('user able to view {string} Member Information Detail Report', async (schemeId) => {
await browser.wait(ExpectedConditions.visibilityOf(mi.table),10000);
  await sp.tableData(mi.table1Header, mi.row1);
  await browser.sleep(3000);
  // await excel.excelWriteOperation1(path, 12, 3, mi.table1Header, schemeId);
  // await browser.sleep(1000);
  if(schemeId.includes('SAINSBURY')) {
    console.log("SAINSBURY's Scheme");
    await excel.excelWriteOperation1(path, 39, 3, mi.row1, schemeId);
    await browser.sleep(1000);
  }
  else if(schemeId.includes('SODEXO')) {
    console.log("SODEXO Scheme");
    await excel.excelWriteOperation1(path, 40, 3, mi.row1, schemeId);
    await browser.sleep(1000);
  }
  // await excel.excelWriteOperation1(path, 14, 3, mi.summaryText, schemeId);
  // await browser.sleep(1000);


  // await sp.filterMethod(mi.schemeCategory, mi.search, mi.radioBtn, mi.minMaxBtn, "The Legal");

  //await ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1,mi.radioBtn2, mi.minMaxBtn1, 'Male');

  //await ga.ageFilter(mi.ageBand, mi.search2, mi.chkBox, mi.applyBtn, '40');
  //await ga.ageFilter(mi.age, mi.search3, mi.chkBox2, mi.applyBtn, '40');
})



Then('user able to view Member Info filter options for the {string} in Member Info Detail Report', async (scheme) => {
  await browser.sleep(2000);
  await dp.browseCollection.click();
  await mi.memberInfoDetailReport.click();

  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 27, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 28, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 31, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 33, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);




});
