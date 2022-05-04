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
import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';


let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();
let mi = new memInfo();
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

  await ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1, mi.radioBtn2, mi.minMaxBtn1, gender);

  await ga.ageFilter(mi.ageBand, mi.search2, mi.chkBox, mi.applyBtn, mi.chkAll, ageband);
  
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

  await sp.lookForElement(mi.avgFund, 'Avg fund value by member are - ', 'Avg fund value by member are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, mi.avgFund, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgPayroll, 'Avg Payroll contribution are - ', 'Avg Payroll contribution are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 6, 3, mi.avgPayroll, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgMemAge, 'Average member age is - ', 'Average member age are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 7, 3, mi.avgMemAge, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.female, 'No. of female members are - ', 'No. of female members are  missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 8, 3, mi.female, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.male, 'No. of male members are - ', 'No. of male members are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 9, 3, mi.male, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mi.avgFemaleAge, 'Avg Female member age is - ', 'Avg Female member age is missing');

  await sp.lookForElement(mi.avgMaleAge, 'Average male member age is - ', 'Average male member age is missing');

  /*await sp.lookForElement(sp.map, 'Map to show no. of members by postcode is visible', 'Map to show no. of members by postcode is missing');
 
  await sp.lookForElement(mi.memPolicyStartDt, 'Member by policy scheme start date graph is visible', 'Member by policy scheme start date graph is missing');

  await mi.memAgeGender.click();

  await browser.actions().sendKeys(protractor.Key.END).perform();

  await browser.sleep(3000);

  await sp.lookForElement(mi.memAgeGender, 'Member by Age and Gender graph is visible', 'Member by Age and Gender graph is not visible');

  await sp.lookForElement(mi.avgFundByGenderAge, 'Average fund value by age and gender graph is visible', 'Average fund value by age and gender graph is missing');

  await sp.lookForElement(mi.memByAgeActiveDeferred, 'Member by age and active or deferred graph is visible', 'Member by age and active or deferred graph is missing');

*///await browser.sleep(5000);
  await dp.browseCollection.click();

  await mi.memberInfoDetailReport.click();
  // await browser.wait(ExpectedConditions.visibilityOf(mi.table1Header),5000);

  await sp.tableData(mi.table1Header, mi.row1);
  await browser.sleep(3000);
  await excel.excelWriteOperation1(path, 10, 3, mi.table1Header, schemeId);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 11, 3, mi.row1, schemeId);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 12, 3, mi.summaryText, schemeId);
  await browser.sleep(2000);






  
  //await sp.filterMethod(mi.schemeCategory, mi.search, mi.radioBtn, mi.minMaxBtn, "The Legal");

  //await ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1,mi.radioBtn2, mi.minMaxBtn1, 'Male');
  
  //await ga.ageFilter(mi.ageBand, mi.search2, mi.chkBox, mi.applyBtn, '40');
  //await ga.ageFilter(mi.age, mi.search3, mi.chkBox2, mi.applyBtn, '40');
  })
