import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver, WebElement, WebElementPromise, ElementArrayFinder } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import chai from 'chai';
import { schemeCategory } from '../pageObjects/schemeCategoryPO';
//import * as schemeData from '../testData/scheme.json';
//import * as data1 from '../testData/scheme.ts'
import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';
import {protractor} from "protractor/built/ptor";

import { memInfo } from '../pageObjects/memInfoPO';
let mi = new memInfo();

//let data = require('../testData/dataTest.json');
//let schemeData = require("../testData/scheme");
//Products: (schemeData as any).default;

let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();
let sc = new schemeCategory();
let sp = new schemePage();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\schemeCategory.xlsx";


When('user navigates to Scheme Category Overview', async () => {

  //browser.manage().window().setSize(900, 720);
  await browser.sleep(2000);
  await sp.countOfSchemeLink.click();

  await browser.sleep(10000);
})


Then('user able to view the Scheme Category Overview fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(sc.username, sc.dataAsOf, sc.logo);

})

Then('user able to view {string} Scheme Category Overview tables {string}', async (scheme,string) => {

      //await sp.schemeFilter(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);

      await browser.waitForAngularEnabled(true);
    await browser.sleep(5000);
    await browser.executeScript("arguments[0].click();", sc.expandButton);
      await browser.sleep(2000);

      await bf.tableData(sc.row1);
      await browser.sleep(1000);
      console.log("Table - Scheme Category with Target Retirement Age is displayed");
      await excel.excelWriteOperation1(path, 3, 3, sc.row1, scheme);

      await bf.tableData(sc.row2);
      console.log("Table - AMC Bands by Scheme Category is displayed");
      await excel.excelWriteOperation1(path, 4, 3, sc.row2, scheme);
      await browser.sleep(2000);

      await bf.tableData(sc.row3);
      console.log("Table - Scheme Category with Default Investment Strategy is displayed");
      await excel.excelWriteOperation1(path, 5, 3, sc.row3, scheme);
      await browser.sleep(2000);

      //**************** steps to capture individual cell values
 if(scheme.includes('SODEXO')) {
     console.log("Sodexo Scheme");
     await browser.executeScript("arguments[0].click();", sc.expandIcon);
     await browser.sleep(3000);
     await sp.lookForElement(sc.sodexomonthlyPaidCount, 'Sodexo Ltd Monthly Paid - Count of policies is - ', 'Sodexo Ltd Monthly Paid - Count of policies is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 17, 3, sc.sodexomonthlyPaidCount, scheme);
     await browser.sleep(2000);

     await sp.lookForElement(sc.sodexoAEWeeklyPaidCount, 'Sodexo Ltd AE Weekly Paid - Count Of Policies is  - ', 'Sodexo Ltd AE Weekly Paid - Count of policies is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 18, 3, sc.sodexoAEWeeklyPaidCount, scheme);
     await browser.sleep(2000);

     await sp.lookForElement(sc.sodexoAEmonthlyPaidCount, 'Sodexo Ltd AE Monthly Paid - Count of policies is - ', 'Sodexo Ltd AE Monthly Paid - Count of policies is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 19, 3, sc.sodexoAEmonthlyPaidCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.sodexoMotivationSolutionsCount);
     await sp.lookForElement(sc.sodexoMotivationSolutionsCount, 'Sodexo Motivation Solutions UK Ltd is - ', 'Sodexo Motivation Solutions UK Ltd is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 20, 3, sc.sodexoMotivationSolutionsCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.sodexoGlobalServicesCount);
     await sp.lookForElement(sc.sodexoGlobalServicesCount, 'Sodexo Global Services Ltd - ', 'Sodexo Global Services Ltd is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 21, 3, sc.sodexoGlobalServicesCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.tvfWeeklyPaidCount);
     await sp.lookForElement(sc.tvfWeeklyPaidCount, 'TVF Weekly Paid is - ', 'TVF Weekly Paid is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 22, 3, sc.tvfWeeklyPaidCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.sportsTravelHospitalityGroupCount);
     await sp.lookForElement(sc.sportsTravelHospitalityGroupCount, 'Sports Travel & Hospitality Group Ltd is - ', 'Sports Travel & Hospitality Group Ltd is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 23, 3, sc.sportsTravelHospitalityGroupCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.sodexo4WeeklyPaidCount);
     await sp.lookForElement(sc.sodexo4WeeklyPaidCount, 'Sodexo Ltd - Four Weekly Paid - ', 'Sodexo Ltd - Four Weekly Paid is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 24, 3, sc.sodexo4WeeklyPaidCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.sodexoTravelCount);
     await sp.lookForElement(sc.sodexoTravelCount, 'Sodexo Travel- Count of policies is - ', 'Sodexo Travel- Count of policies is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 25, 3, sc.sodexoTravelCount, scheme);
     await browser.sleep(2000);

     await browser.executeScript("arguments[0].scrollIntoView();",sc.tvf4WeeklyTempCount);
     await sp.lookForElement(sc.tvf4WeeklyTempCount, 'TVF Four weekly Temporary- Count of policies is - ', 'TVF Four weekly Temporary - Count of policies is not present');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 26, 3, sc.tvf4WeeklyTempCount, scheme);
     await browser.sleep(2000);
 }
 else if(scheme.includes('SAINSBURY')) {
     console.log("SAINSBURY's Scheme");

     await sp.lookForElement(sc.newMembersCount, 'New Members - ', 'New Members is missing');
     await browser.sleep(1000);
     await excel.excelWriteOperationString(path, 17, 3, sc.newMembersCount, scheme);
     await browser.sleep(1000);

     await sp.lookForElement(sc.exStakeholdersAndSIPPMembers, 'Ex stakeholders & SIPP Members - ', 'Ex stakeholders & SIPP Members is missing');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 18, 3, sc.exStakeholdersAndSIPPMembers, scheme);
     await browser.sleep(2000);

     await sp.lookForElement(sc.drawdownCategory, 'Drawdown category - ', 'Drawdown category is missing');
     await browser.sleep(2000);
     await excel.excelWriteOperationString(path, 19, 3, sc.drawdownCategory, scheme);
     await browser.sleep(2000);
 }

    })



Then('user able to view Scheme Category filter options for the {string} in Overview page', async (scheme) => {
    await browser.sleep(1000);
    await mi.filterButton.click();
    console.log("Clicked on Filter Button");
    await browser.sleep(1000);

    await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
    await excel.excelWriteOperationText(path, 7, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);
    await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
    await excel.excelWriteOperationText(path, 8, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);

    await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
    await excel.excelWriteOperationText(path, 9, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);
    await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
    await excel.excelWriteOperationText(path, 10, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);
    await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
    await excel.excelWriteOperationText(path, 12, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);
    await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
    await excel.excelWriteOperationText(path, 14, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);
    await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
    await excel.excelWriteOperationText(path, 15, 3, "Filter is displayed", scheme);
    await browser.sleep(1000);

    await mi.closeFilter.click();
    await browser.sleep(1000);

});

  
  
