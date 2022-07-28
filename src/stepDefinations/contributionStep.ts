import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { memInfo } from '../pageObjects/memInfoPO';
import { basicFields } from '../pageObjects/generalFunctions';
import { Contribution } from '../pageObjects/contributionPO';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';


let excel = new excelReadAndWrite();
let bf = new basicFields();
let cont = new Contribution();
let mi = new memInfo();
let sp = new schemePage();
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\contributions.xlsx";
const date = new Date();

var moment = require('moment');
var previousMonth = moment().subtract(1, 'months').format('MM/YYYY');
let dayOfCurrentMonth, dateOfLastMonth, dataAsOfDate;


When('user navigates to Contribution Overview', async () => {
  //browser.manage().window().setSize(900, 720);
  await browser.sleep(2000);

  await sp.memberContributionLink.click();

  await browser.sleep(10000);

})


Then('user able to view the basic contribution fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(cont.username, cont.dataAsOf, cont.logo);

})
  
Then('user able to view {string} contributions {string} in Overview Page', async (scheme, string) => {
  await browser.sleep(10000);

  //await sp.schemeFilter(cont.schemeCategory, cont.search, cont.radioBtn, cont.minMaxBtn, string);

  await sp.lookForElement(cont.totMemCont, 'Total Member Contributions is - ', 'Total Member Contributions is missing');
    await excel.excelWriteOperationString(path, 3, 3, cont.totMemCont, scheme);
    await browser.sleep(1000);

  await sp.lookForElement(cont.payroll, 'Total Payroll Contributions is - ', 'Total Payroll Contributions is missing');
    await excel.excelWriteOperationString(path, 5, 3, cont.payroll, scheme);
    await browser.sleep(1000);


  await sp.lookForElement(cont.employerRegPayroll, 'Total Employer Regular payroll contribution is - ', 'Total Employer Regular payroll contribution is missing');
  await excel.excelWriteOperationString(path, 8, 3, cont.employerRegPayroll, scheme);
  await browser.sleep(1000);

    await sp.lookForElement(cont.employeeRegPayroll, 'Total Employee Regular payroll contribution is - ', 'Total Employee Regular payroll contribution is missing');
    await excel.excelWriteOperationString(path, 9, 3, cont.employeeRegPayroll, scheme);
    await browser.sleep(1000);

  await sp.lookForElement(cont.employerSingPayroll, 'Total Employer Single payroll contribution is - ', 'Total Employer Single payroll contribution is missing');
  await excel.excelWriteOperationString(path, 10, 3, cont.employerSingPayroll, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(cont.employeeSingPayroll, 'Total Employee Single payroll contribution is - ', 'Total Employee Single payroll contribution is missing');
  await excel.excelWriteOperationString(path, 11, 3, cont.employeeSingPayroll, scheme);
  await browser.sleep(1000);


  await sp.lookForElement(cont.employerRegNonPayroll, 'Regular Employer Non-Payroll contribution is - ', 'Regular Employer Non-Payroll contribution is  missing');
  await excel.excelWriteOperationString(path, 16, 3, cont.employerRegNonPayroll, scheme);
  await browser.sleep(1000);

    await sp.lookForElement(cont.employeeRegNonPayroll, 'Regular Employee Non-Payroll contribution is - ', 'Regular Employee Non-Payroll contribution is missing');
    await excel.excelWriteOperationString(path, 17, 3, cont.employeeRegNonPayroll, scheme);
    await browser.sleep(1000);

  await sp.lookForElement(cont.employerSingNonPayroll, 'Single Employer Non-Payroll contribution is - ', 'Single Employer Non-Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 18, 3, cont.employerSingNonPayroll, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(cont.employeeSingNonPayroll, 'Single Employee Non-Payroll contribution is - ', 'Single Employee Non-Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 19, 3, cont.employeeSingNonPayroll, scheme);


  await sp.lookForElement(cont.transferAmt, 'Transfer amount is - ', 'Transfer amount is missing');
  await excel.excelWriteOperationString(path, 6, 3, cont.transferAmt, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.nonPayroll, 'Non-Payroll contribution is - ', 'Non-Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 7, 3, cont.nonPayroll, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.pension, 'Pension is - ', 'Pension is missing');
  await excel.excelWriteOperationString(path, 12, 3, cont.pension, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.avc, 'AVC is - ', 'AVC is missing');
  await excel.excelWriteOperationString(path, 13, 3, cont.avc, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.intraScheme, 'Intrascheme is - ', 'Intrascheme is missing');
  await excel.excelWriteOperationString(path, 14, 3, cont.intraScheme, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.avcIntraScheme, 'AVC Intrascheme is - ', 'AVC Intrascheme is missing');
  await excel.excelWriteOperationString(path, 15, 3, cont.avcIntraScheme, scheme);
  await browser.sleep(1000);

    /* change to previous 2 months date*/
  await browser.executeScript("arguments[0].click();", cont.maxBtn);
  await browser.sleep(3000);
  console.log("Clicked on expand");
  await browser.wait(ExpectedConditions.visibilityOf(cont.editMaxDateVal),6000);
  await cont.editMaxDateVal.click();
    await browser.sleep(2000);
    await cont.editMaxDateVal.getText().then(async function(currentDate){
         dataAsOfDate = currentDate;
        dayOfCurrentMonth = currentDate.substring(3,5);
        console.log("Data displayed as of: "+currentDate+ "\n"+"day Of current month :"+dayOfCurrentMonth);
    });
    console.log("Last month: "+previousMonth);
    dateOfLastMonth = previousMonth.substring(0,3)+dayOfCurrentMonth+"/"+previousMonth.substring(3,7);
    await cont.maxVal.clear();
  await cont.maxVal.sendKeys(dateOfLastMonth);
  console.log("Last month date entered: "+dateOfLastMonth);
    await browser.sleep(2000);
  await cont.doneButton.click();
    await browser.sleep(3000);
  await browser.executeScript("arguments[0].click();", cont.minBtn);
    console.log("Back to overview page");
    await browser.sleep(3000);
    await sp.lookForElement(cont.totMemCont, 'Total Member Contributions (1 month ago)- ', 'Total Member Contributions (1 month ago)-');
    await excel.excelWriteOperationString(path, 4, 3, cont.totMemCont, scheme);
    await browser.sleep(2000);

    /* revert to current date*/
    await browser.executeScript("arguments[0].click();", cont.maxBtn);
    await browser.sleep(3000);
    console.log("Clicked on expand");
    await browser.wait(ExpectedConditions.visibilityOf(cont.editMaxDateVal),6000);
    await cont.editMaxDateVal.click();
    await browser.sleep(2000);
    await cont.maxVal.clear();
    await cont.maxVal.sendKeys(dataAsOfDate);
    console.log("Date reverted to current date: "+dataAsOfDate);
    await cont.doneButton.click();
    await browser.sleep(3000);
    await browser.executeScript("arguments[0].click();", cont.minBtn);
    console.log("Back to overview page");
  await browser.sleep(2000);


/*
  await dp.browseCollection.click();
  await cont.contDetailReport.click();
console.log("Contribution Details Report page is displayed");
  await browser.sleep(5000);
  // await browser.wait(ExpectedConditions.visibilityOf(cont.table1Header),10000);
  await sp.tableData(cont.table1Header, cont.row1);
  console.log("Table data is displayed");
  await browser.sleep(1000);

  await excel.excelWriteOperation1(path, 19, 3, cont.table1Header, scheme);
  await browser.sleep(1000);
  await excel.excelWriteOperation1(path, 20, 3, cont.row1, scheme);
  await browser.sleep(1000);

*/

});

  //await sp.filterMethod(ma.schemeCategory1, ma.search1, ma.radioBtn1, ma.minMaxBtn1, string);


Then('user able to view {string} contributions filter options in Overview Page', async (scheme) => {

  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 20, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 21, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 22, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 23, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 24, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 25, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 26, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 27, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await mi.closeFilter.click();
});

Then('user able to view {string} contributions {string} in Analysis Page', async (scheme, string) => {

  await dp.browseCollection.click();
  await browser.executeScript("arguments[0].scrollIntoView();",cont.contributionAnalysisLink);
  await cont.contributionAnalysisLink.click();
  console.log("Contribution Analysis page displayed");
  await browser.sleep(3000);
  await browser.wait(ExpectedConditions.visibilityOf(cont.payrollAnalysisValue),20000);

  await sp.lookForElement(cont.payrollAnalysisValue, 'Total Payroll contribution is - ', 'Total Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 30, 3, cont.payrollAnalysisValue, scheme);
  await browser.sleep(2000);

  let frame1: WebElementPromise = element(by.xpath("(//iframe[@class=\"fill-parent html-report ng-star-inserted\"])[1]")).getWebElement();
  await browser.switchTo().frame(frame1);
  console.log("Switched to frame");
  await cont.breakdownButton1.click();
  console.log("Payroll breakdown details: ");
  await browser.switchTo().defaultContent();
  console.log("Switched back to default frame");
  await browser.sleep(2000);

  await sp.lookForElement(cont.employeeSingle, 'Single Employee Payroll contribution is - ', 'Single Employee Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 31, 3, cont.employeeSingle, scheme);
  await sp.lookForElement(cont.employeeRegular, 'Regular Employee Payroll contribution is - ', 'Regular Employee Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 32, 3, cont.employeeRegular, scheme);


  await sp.lookForElement(cont.employerRegular, 'Regular Employer Payroll contribution is - ', 'Regular Employer Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 33, 3, cont.employerRegular, scheme);
  await sp.lookForElement(cont.employerSingle, 'Single Employer Payroll contribution is - ', 'Single Employer Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 34, 3, cont.employerSingle, scheme);
  await browser.sleep(2000);

  //Non payroll
  await sp.lookForElement(cont.nonPayrollAnalysisValue, 'NonPayroll in Analysis page is - ', 'NonPayroll in Analysis page is missing');
  await excel.excelWriteOperationString(path, 35, 3, cont.nonPayrollAnalysisValue, scheme);
  await browser.sleep(1000);

  let frame2: WebElementPromise = element(by.xpath("(//iframe[@class=\"fill-parent html-report ng-star-inserted\"])[2]")).getWebElement();
  await browser.switchTo().frame(frame2);
  console.log("Switched to frame");
  await cont.breakdownButton2.click();
  console.log("Payroll breakdown details: ");
  await browser.switchTo().defaultContent();
  console.log("Switched back to default frame");
  await browser.sleep(2000);

  await sp.lookForElement(cont.employeeSingleAnalysisValue, 'Single Employee Non Payroll contribution is - ', 'Single Employee Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 36, 3, cont.employeeSingleAnalysisValue, scheme);
  await sp.lookForElement(cont.employeeRegularAnalysisValue, 'Regular Employee Non Payroll contribution is - ', 'Regular Employee Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 37, 3, cont.employeeRegularAnalysisValue, scheme);
  await sp.lookForElement(cont.employerRegularAnalysisValue, 'Regular Employer Non Payroll contribution is - ', 'Regular Employer Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 38, 3, cont.employerRegularAnalysisValue, scheme);
  await sp.lookForElement(cont.employerSingleAnalysisValue, 'Single Employer Non Payroll contribution is - ', 'Single Employer Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 39, 3, cont.employerSingleAnalysisValue, scheme);
  await browser.sleep(1000);

  //Transfer Amount
  await sp.lookForElement(cont.transferAmountAnalysisValue, 'Transfer amount is - ', 'Transfer amount is missing');
  await excel.excelWriteOperationString(path, 40, 3, cont.transferAmountAnalysisValue, scheme);

  let frame3: WebElementPromise = element(by.xpath("(//iframe[@class=\"fill-parent html-report ng-star-inserted\"])[3]")).getWebElement();
  await browser.switchTo().frame(frame3);
  await cont.breakdownButton3.click();
  console.log("Payroll breakdown details: ");
  await browser.switchTo().defaultContent();
  console.log("Switched back to default frame");
  await browser.sleep(1000);


  await sp.lookForElement(cont.pensionAnalysisValue, 'Pension is - ', 'Pension is missing');
  await excel.excelWriteOperationString(path, 41, 3, cont.pensionAnalysisValue, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.avcAnalysisValue, 'AVC is - ', 'AVC is missing');
  await excel.excelWriteOperationString(path, 42, 3, cont.avcAnalysisValue, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.intraSchemeAnalysisValue, 'Intrascheme is - ', 'Intrascheme is missing');
  await excel.excelWriteOperationString(path, 43, 3, cont.intraSchemeAnalysisValue, scheme);
  await browser.sleep(1000);
  await sp.lookForElement(cont.avcIntraSchemeAnalysisValue, 'AVC Intrascheme is - ', 'AVC Intrascheme is missing');
  await excel.excelWriteOperationString(path, 44, 3, cont.avcIntraSchemeAnalysisValue, scheme);
  await browser.sleep(1000);




});

//await sp.filterMethod(ma.schemeCategory1, ma.search1, ma.radioBtn1, ma.minMaxBtn1, string);


Then('user able to view {string} contributions filter options in Analysis Page', async (scheme) => {

  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 47, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 48, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 49, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 50, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 51, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 52, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 54, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 56, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await mi.closeFilter.click();

});

Then('user able to view {string} contributions {string} in Details report Page', async (scheme, string) => {

  await dp.browseCollection.click();
  await browser.sleep(2000);
  await cont.contDetailReport.click();
  console.log("Contribution Details Report page is displayed");
  await browser.sleep(5000);
  await sp.tableData(cont.table1Header, cont.row1);
  console.log("Table data is displayed");
  await browser.sleep(1000);

  await excel.excelWriteOperation1(path, 71, 3, cont.table1Header, scheme);
  await browser.sleep(1000);
  await excel.excelWriteOperation1(path, 72, 3, cont.row1, scheme);
  await browser.sleep(1000);


});

//await sp.filterMethod(ma.schemeCategory1, ma.search1, ma.radioBtn1, ma.minMaxBtn1, string);


Then('user able to view {string} contributions filter options in Details report Page', async (scheme) => {

  await browser.sleep(1000);
  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);

  await sp.lookForElement(mi.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 73, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.billingGroupFilter, 'Billing group Filter option is visible', 'Billing group Filter option is missing');
  await excel.excelWriteOperationText(path, 74, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 75, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.contDateFilter, 'Contribution Date Filter option is visible', 'Contribution Date Filter option is missing');
  await excel.excelWriteOperationText(path, 76, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 77, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 78, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 79, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 80, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 82, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 84, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

});


Then('user able to view {string} contributions and filter options in Payroll Page', async (scheme) => {
  await dp.browseCollection.click();
  await cont.contByPayroll.click();
  console.log("Contribution Payroll page is displayed");
  await browser.sleep(5000);
  // await browser.wait(ExpectedConditions.visibilityOf(cont.table1Header),10000);
  await sp.tableData(cont.table2Header, cont.row2);
  console.log("Table data is displayed");
  await browser.sleep(1000);

/*  await excel.excelWriteOperation1(path, 57, 3, cont.table2Header, scheme);
  await browser.sleep(1000);*/
  await excel.excelWriteOperation1(path, 62, 3, cont.row2, scheme);
  await browser.sleep(1000);

  await mi.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(1000);


  await sp.lookForElement(mi.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 65, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 66, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(mi.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 67, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(mi.yearorMonth, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 69, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await mi.closeFilter.click();
});


Then('user able to view Contributions maps or charts for the {string} in Overview page', async (scheme) => {

  await sp.lookForElement(mi.map, 'Map is visible', 'map is missing');
  await excel.excelWriteOperationText(path, 58, 3, "Map is displayed", scheme);
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

  await browser.executeScript("arguments[0].scrollIntoView();",cont.lineGraph);
  await sp.lookForElement(cont.lineGraph, 'Line - Contributions by Gender and Age is visible', 'Line - Contributions by Gender and Age is missing');
  await excel.excelWriteOperationText(path, 59, 3, "Displayed", scheme);
  await browser.sleep(2000);

  await browser.wait(ExpectedConditions.visibilityOf(cont.barChartTotalvsLastYear),10000);
  await browser.executeScript("arguments[0].scrollIntoView();",cont.barChartTotalvsLastYear);
  await sp.lookForElement(cont.barChartTotalvsLastYear, 'Bar Chart - Contributions over Time is visible', 'Bar Chart - Contributions over Time is missing');
  await excel.excelWriteOperationText(path, 60, 3, "Displayed", scheme);
  await browser.sleep(1000);

  await sp.lookForElement(cont.barChartByAgeGender, 'Bar Chart - Contributions by Age and Gender is visible', 'Bar Chart - Contributions by Age and Gender is missing');
  await excel.excelWriteOperationText(path, 61, 3, "Displayed", scheme);
  await browser.sleep(1000);


});
