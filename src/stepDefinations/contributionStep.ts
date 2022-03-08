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
let path = "C:\\Automation\\ClientMI\\data\\contributions.xlsx";



When('user navigates to Contribution Overview', async () => {
  await browser.sleep(5000);

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

  await sp.lookForElement(cont.payroll, 'Total Payroll Contributions is - ', 'Total Payroll Contributions is missing');

  await sp.lookForElement(cont.employerRegPayroll, 'Total Employer Regular payroll contribution is - ', 'Total Employer Regular payroll contribution is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 3, 3, cont.employerRegPayroll, scheme);
  await browser.sleep(2000);

  await sp.lookForElement(cont.employerSingPayroll, 'Total Employer Single payroll contribution is - ', 'Total Employer Single payroll contribution is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 4, 3, cont.employerSingPayroll, scheme);
  await browser.sleep(2000);

  await sp.lookForElement(cont.employeeRegPayroll, 'Total Employee Regular payroll contribution is - ', 'Total Employee Regular payroll contribution is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, cont.employeeRegPayroll, scheme);
  await browser.sleep(2000);

  await sp.lookForElement(cont.employeeSingPayroll, 'Total Employee Single payroll contribution is - ', 'Total Employee Single payroll contribution is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 6, 3, cont.employeeSingPayroll, scheme);
  await browser.sleep(2000);

  await sp.lookForElement(cont.transferAmt, 'Total transfer amount contribution is - ', 'Total transfer amount contribution is missing');

  await sp.lookForElement(cont.pension, 'Total transfer amount contribution is - ', 'Total transfer amount contribution is missing');

  await sp.lookForElement(cont.acv, 'Total AVC contribution is - ', 'Total AVC contribution is missing');

  await sp.lookForElement(cont.intraScheme, 'Total Intra Scheme contribution is -', 'Total Intra Scheme contribution is missing');

  await sp.lookForElement(cont.nonPayroll, 'Total Non Payroll contribution is - ', 'Total Non Payroll contribution is missing');

  await sp.lookForElement(cont.employerRegNonPayroll, 'Regular Employer Non-Payroll contribution is - ', 'Regular Employer Non-Payroll contribution is  missing');

  await sp.lookForElement(cont.employerSingNonPayroll, 'Single Employer Non-Payroll contribution is - ', 'Single Employer Non-Payroll contribution is missing');

  await sp.lookForElement(cont.employeeRegNonPayroll, 'Regular Employee Non-Payroll contribution is - ', 'Regular Employee Non-Payroll contribution is missing');

  await sp.lookForElement(cont.employeeSingNonPayroll, 'Single Employee Non-Payroll contribution is - ', 'Single Employee Non-Payroll contribution is missing');

  await browser.sleep(3000);
  await dp.browseCollection.click();
  await cont.contDetailReport.click();

  await browser.sleep(5000);
  await sp.tableData(cont.table1Header, cont.row1);
  
  await browser.sleep(2000);

  await excel.excelWriteOperation1(path, 7, 3, cont.table1Header, scheme);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 8, 3, cont.row1, scheme);
  await browser.sleep(2000);
})

  //await sp.filterMethod(ma.schemeCategory1, ma.search1, ma.radioBtn1, ma.minMaxBtn1, string);

