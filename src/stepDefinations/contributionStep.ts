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

  await browser.sleep(20000);

})


Then('user able to view the basic contribution fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(cont.username, cont.dataAsOf, cont.logo);

})
  
Then('user able to view {string} contribution filter {string}', async (scheme, string) => {
  await browser.sleep(20000);

  //await sp.schemeFilter(cont.schemeCategory, cont.search, cont.radioBtn, cont.minMaxBtn, string);

  await sp.lookForElement(cont.totMemCont, 'Total Member Contributions is - ', 'Total Member Contributions is missing');
    await excel.excelWriteOperationString(path, 3, 3, cont.totMemCont, scheme);
    await browser.sleep(1000);

  await sp.lookForElement(cont.payroll, 'Total Payroll Contributions is - ', 'Total Payroll Contributions is missing');
    await excel.excelWriteOperationString(path, 5, 3, cont.payroll, scheme);
    await browser.sleep(1000);


  await sp.lookForElement(cont.employerRegPayroll, 'Total Employer Regular payroll contribution is - ', 'Total Employer Regular payroll contribution is missing');
  await excel.excelWriteOperationString(path, 6, 3, cont.employerRegPayroll, scheme);
  await browser.sleep(1000);

    await sp.lookForElement(cont.employeeRegPayroll, 'Total Employee Regular payroll contribution is - ', 'Total Employee Regular payroll contribution is missing');
    await excel.excelWriteOperationString(path, 7, 3, cont.employeeRegPayroll, scheme);
    await browser.sleep(1000);

  await sp.lookForElement(cont.employerSingPayroll, 'Total Employer Single payroll contribution is - ', 'Total Employer Single payroll contribution is missing');
  await excel.excelWriteOperationString(path, 8, 3, cont.employerSingPayroll, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(cont.employeeSingPayroll, 'Total Employee Single payroll contribution is - ', 'Total Employee Single payroll contribution is missing');
  await excel.excelWriteOperationString(path, 9, 3, cont.employeeSingPayroll, scheme);
  await browser.sleep(1000);


  await sp.lookForElement(cont.employerRegNonPayroll, 'Regular Employer Non-Payroll contribution is - ', 'Regular Employer Non-Payroll contribution is  missing');
  await excel.excelWriteOperationString(path, 10, 3, cont.employerRegNonPayroll, scheme);
  await browser.sleep(1000);

    await sp.lookForElement(cont.employeeRegNonPayroll, 'Regular Employee Non-Payroll contribution is - ', 'Regular Employee Non-Payroll contribution is missing');
    await excel.excelWriteOperationString(path, 11, 3, cont.employeeRegNonPayroll, scheme);
    await browser.sleep(1000);

  await sp.lookForElement(cont.employerSingNonPayroll, 'Single Employer Non-Payroll contribution is - ', 'Single Employer Non-Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 12, 3, cont.employerSingNonPayroll, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(cont.employeeSingNonPayroll, 'Single Employee Non-Payroll contribution is - ', 'Single Employee Non-Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 13, 3, cont.employeeSingNonPayroll, scheme);


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
    await sp.lookForElement(cont.totMemCont, 'Total Member Contributions is - ', 'Total Member Contributions is missing');
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

/*Navigate to Contribution Analysis page*/
    await browser.sleep(3000);
    await browser.wait(ExpectedConditions.visibilityOf(dp.browseCollection),6000);

  await dp.browseCollection.click();
  await browser.executeScript("arguments[0].scrollIntoView();",cont.contributionAnalysisLink);
  await cont.contributionAnalysisLink.click();
  console.log("Contribution Analysis page displayed");
  await browser.sleep(1000);
  await browser.wait(ExpectedConditions.visibilityOf(cont.payrollAnalysisValue),10000);

  await sp.lookForElement(cont.payrollAnalysisValue, 'Total Payroll contribution is - ', 'Total Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 14, 3, cont.payrollAnalysisValue, scheme);
  await browser.sleep(2000);

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);
  console.log("Switched to frame");
  await cont.breakdownButton.click();
  console.log("Payroll breakdown details: ");
  await browser.switchTo().defaultContent();
    console.log("Switched back to default frame");
  await browser.sleep(2000);

  await sp.lookForElement(cont.employeeSingle, 'Single Employee Payroll contribution is - ', 'Single Employee Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 15, 3, cont.employeeSingle, scheme);
  await sp.lookForElement(cont.employeeRegular, 'Regular Employee Payroll contribution is - ', 'Regular Employee Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 16, 3, cont.employeeRegular, scheme);


  await sp.lookForElement(cont.employerRegular, 'Regular Employer Payroll contribution is - ', 'Regular Employer Payroll contribution is missing');
  await excel.excelWriteOperationString(path, 17, 3, cont.employerRegular, scheme);
    await sp.lookForElement(cont.employerSingle, 'Single Employer Payroll contribution is - ', 'Single Employer Payroll contribution is missing');
    await excel.excelWriteOperationString(path, 18, 3, cont.employerSingle, scheme);
await browser.sleep(2000);

  await dp.browseCollection.click();
  await cont.contDetailReport.click();
console.log("Contribution Details Report page is displayed");
  await browser.sleep(5000);
  await sp.tableData(cont.table1Header, cont.row1);
  console.log("Table data is displayed");
  await browser.sleep(1000);

  await excel.excelWriteOperation1(path, 19, 3, cont.table1Header, scheme);
  await browser.sleep(1000);
  await excel.excelWriteOperation1(path, 20, 3, cont.row1, scheme);
  await browser.sleep(1000);



});

  //await sp.filterMethod(ma.schemeCategory1, ma.search1, ma.radioBtn1, ma.minMaxBtn1, string);

