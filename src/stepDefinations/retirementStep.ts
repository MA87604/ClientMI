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

import { memInfo } from '../pageObjects/memInfoPO';
let mi = new memInfo();
let excel = new excelReadAndWrite();
let bf = new basicFields();
let dp = new landingPage();
let ro = new retirementOverview();
let sp = new schemePage();
let expect = chai.expect;
let should = chai.should;
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\retirement.xlsx";


When('user navigates to Retirement Overview', async () => {
  //browser.manage().window().setSize(900, 720);
  await browser.sleep(2000);

  await sp.upcomingrRetirementLink.click();

  await browser.sleep(10000);

});

Then('user able to view the Retirement Overview fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(ro.username, ro.dataAsOf, ro.logo);

});

Then('user able to view Retirement Analysis fields for {string}', async (schemeId) => {

  await browser.sleep(7000);

   /*await sp.lookForElement(ro.currentYear, 'current Year is - ', 'Current year is missing');

   await sp.lookForElement(ro.currentYearRet, 'Forthcoming retirement in current year are - ', 'Forthcoming retirement in current year is not unavailable');
   await browser.sleep(1000);
   await excel.excelWriteOperation(path, 3, 3, ro.currentYearRet, schemeId);
   await browser.sleep(1000);

   await sp.forthRetirement(ro.year2, ro.retirement2, 'Forthcoming retirement is missing');
   await browser.sleep(1000);
   await excel.excelWriteOperation(path, 4, 3, ro.retirement2, schemeId);
   await browser.sleep(1000);

   await sp.forthRetirement(ro.year3, ro.retirement3, 'Forthcoming retirement is missing');
   await browser.sleep(1000);
   await excel.excelWriteOperation(path, 5, 3, ro.retirement3, schemeId);
   await browser.sleep(1000);

   await sp.forthRetirement(ro.year4, ro.retirement4, 'Forthcoming retirement is missing');
   await browser.sleep(1000);
   await excel.excelWriteOperation(path, 6, 3, ro.retirement4, schemeId);
   await browser.sleep(1000);

   await sp.forthRetirement(ro.year5, ro.retirement5, 'Forthcoming retirement is missing');
   await browser.sleep(1000);
   await excel.excelWriteOperation(path, 7, 3, ro.retirement5, schemeId);
   await browser.sleep(1000);*/

   await ro.filterButton.click();
   console.log("Clicked on Filter Button");
   await browser.sleep(1000);
   await sp.lookForElement(ro.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
   await excel.excelWriteOperationText(path, 8, 3, "Filter is displayed", schemeId);
   await browser.sleep(1000);

  await dp.browseCollection.click();
  await browser.sleep(2000);
  await browser.wait(ExpectedConditions.visibilityOf(ro.retirementAnalysis),5000);
  await ro.retirementAnalysis.click();
  await browser.sleep(3000);
  await browser.wait(ExpectedConditions.visibilityOf(ro.totMember),5000);


   await browser.sleep(5000);
   await sp.lookForElement(ro.totMember, 'Total Members - ', 'Total Members are missing');
   await browser.sleep(3000);
   await excel.excelWriteOperationString(path, 10, 3, ro.totMember, schemeId);
   await browser.sleep(2000);

   await sp.lookForElement(ro.upcomingRetirementInDateRange, 'Upcoming retirements in date range are- ', 'Upcoming retirements in date range are missing');
   await browser.sleep(3000);
   await excel.excelWriteOperation(path, 11, 3, ro.upcomingRetirementInDateRange, schemeId);
   await browser.sleep(2000);

  if(schemeId.includes('SAINSBURY')) {
    console.log("SAINSBURY's Scheme");
    await sp.lookForElement(ro.upcomingRetirementActive, 'Upcoming retirements active are- ', 'Upcoming retirements active are missing');
    await browser.sleep(2000);
    await excel.excelWriteOperation(path, 12, 3, ro.upcomingRetirementActive, schemeId);
    await browser.sleep(2000);

    await sp.lookForElement(ro.upcomingRetirementDeferred, 'Upcoming retirements deferred are- ', 'Upcoming retirements deferred are missing');
    await browser.sleep(2000);
    await excel.excelWriteOperation(path, 13, 3, ro.upcomingRetirementDeferred, schemeId);
    await browser.sleep(2000);

    await sp.lookForElement(ro.barGraphForthcomingRetByRetYears, 'Bar Chart - Forthcoming Retirements by Retirement Years- ', 'Bar Chart - Forthcoming Retirements by Retirement Years is missing');
    await browser.sleep(1000);
    await excel.excelWriteOperationText(path, 15, 3, "Displayed", schemeId);
    await browser.sleep(1000);
    await excel.excelWriteOperationText(path, 16, 3, "N/A", schemeId);
    await browser.sleep(1000);
    //bubble
    await browser.executeScript("arguments[0].scrollIntoView();", ro.bubbleActiveVsDeferred);
    await sp.lookForElement(ro.bubbleActiveVsDeferred, 'Bubble - Active vs Deferred by Retirement Year Analysis', 'Bubble - Active vs Deferred by Retirement Year Analysis is missing');
    await browser.sleep(1000);
    await excel.excelWriteOperationText(path, 17, 3, "Displayed", schemeId);
    await browser.sleep(2000);

    //table
    await ro.table1Header.isDisplayed().then(function () {
      console.log("Table displayed");
    });

    await browser.sleep(1000);


    await sp.tableDataRet(ro.table1Header, ro.row1);
    await browser.sleep(2000);
    await excel.excelWriteOperation1(path, 18, 3, ro.table1Header, schemeId);
    await browser.sleep(1000);
    await excel.excelWriteOperation1(path, 19, 3, ro.row1, schemeId);
    await browser.sleep(1000);
    // await excel.excelWriteOperation1(path, 25, 3, ro.summaryText1, schemeId);
    // await browser.sleep(2000);
  }
  else if(schemeId.includes('SODEXO')) {
    console.log("Sodexo Scheme");
    await sp.lookForElement(ro.barGraphForthcomingRet, 'Bar Chart - Forthcoming Retirements(Contract Version)', 'Bar Chart - Forthcoming Retirements by Retirement Years is missing');
    await browser.sleep(1000);
    await excel.excelWriteOperationText(path, 16, 3, "Displayed", schemeId);
    await browser.sleep(1000);
    await excel.excelWriteOperationText(path, 15, 3, "N/A", schemeId);
    await browser.sleep(1000);
    //table

    await browser.actions().sendKeys(protractor.Key.END).perform();
    await browser.sleep(2000);
    await sp.tableData(ro.tableHeader, ro.row);
    await browser.sleep(3000);
    await excel.excelWriteOperation1(path, 18, 3, ro.tableHeader, schemeId);
    await browser.sleep(1000);
    await excel.excelWriteOperation1(path, 19, 3, ro.row, schemeId);
    await browser.sleep(1000);
    await excel.excelWriteOperation1(path, 25, 3, ro.summaryText, schemeId);
    await browser.sleep(2000);
  }

//graphs
  await sp.lookForElement(ro.barGraphMembersByAgeAndGender, 'Bar Chart - Members by Retirement Age and Gender- ', 'Bar Chart - Members by Retirement Age and Gender is missing');
  await browser.sleep(1000);
  await excel.excelWriteOperationText(path, 14, 3, "Displayed", schemeId);
  await browser.sleep(2000);

  await ro.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(ro.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 21, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
});

Then('user able to view the Retirement Detail Report fields in the page for {string}', async (schemeId) => {

  await dp.browseCollection.click();
  await browser.sleep(2000);
  await ro.retirementDetailReportLink.click();
  await browser.wait(ExpectedConditions.visibilityOf(ro.retirementDetailReportHeader),10000);
  await browser.sleep(2000);
  await sp.tableData(ro.tableHeader, ro.row);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 24, 3, ro.tableHeader, schemeId);
  await browser.sleep(1000);
  await excel.excelWriteOperation1(path, 25, 3, ro.row, schemeId);
  await browser.sleep(1000);

  //filters
  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 26, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 27, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 28, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 29, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);

  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 31, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(ro.retirementDateFilter, 'Retirement Date Filter option is visible', 'Retirement Date Filter option is missing');
  await excel.excelWriteOperationText(path, 33, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 34, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);
  await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 36, 3, "Filter is displayed", schemeId);
  await browser.sleep(1000);



});
