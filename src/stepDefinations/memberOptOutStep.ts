import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { protractor } from 'protractor/built/ptor';
import { memberOptOut } from '../pageObjects/memberOptOutPO';
import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';


let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();
let mo = new memberOptOut();
let sp = new schemePage();
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();

let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\memberOptOut.xlsx";


When('user navigates to Member Opt Out Overview', async () => {

  //browser.manage().window().setSize(900, 720);
  await browser.sleep(2000);
  
  await sp.optOutRateLink.click();

  await browser.sleep(10000);

})


Then('user able to view the Member Opt Out fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(mo.username, mo.dataAsOf, mo.logo);

})

Then('user able to view {string} Member Opt Out filter {string}, {string} and {string}', async (schemeId, scheme, gender, age) => {


  //await sp.schemeFilter(mo.schemeCategory, mo.search, mo.radioBtn, mo.minMaxBtn, scheme);

  //await ga.genderComboBox(mo.chooseGender, mo.search1, mo.maleChkBox, mo.femaleChkBox, mo.unknownChkBox, mo.applyBtn, mo.chkAll, gender);

  //await ga.ageFilter(mo.chooseAge, mo.search2, mo.chkBox, mo.applyBtn, mo.chkAll1, age);

  await browser.sleep(5000);

  await sp.lookForElement(mo.totEnrolment, 'Total Enrolments in this date range is - ', 'Total Enrolments in this date range is missing');

  await sp.lookForElement(mo.enrolmentWithOptOut, 'Total Enrolments with optout rights in this date range is - ', 'Total Enrolments with optout rights in this date range is missing');

  await sp.lookForElement(mo.noOfOptOut, 'Number of opt out is - ', 'No. of members are missing');

  await sp.lookForElement(mo.optOutWithCont, 'Number of opt outs with a recieved contribution is - ', 'Number of opt outs with a recieved contribution is missing');

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[48]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);

  await mo.brekdownBtn2.click();

  await browser.switchTo().defaultContent();

  await sp.lookForElement(mo.empRegular, 'Employee Regular is - ', 'Employee Regular is missing');

  await sp.lookForElement(mo.empSingle, 'Employee Single is - ', 'Employee Single is missing');

  await sp.lookForElement(mo.employerRegular, 'Employer Regular is - ', 'Employer Regular is missing');

  await sp.lookForElement(mo.employerSingle, 'Employer Single is - ', 'Employer Single is missing');

  await sp.lookForElement(mo.avgAge, 'Average age of members opting out is - ', 'Average age of members opting out is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 3, 3, mo.avgAge, schemeId);
  await browser.sleep(2000);



  await sp.lookForElement(mo.female, 'Female members opting out is - ', 'Female members opting out is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 4, 3, mo.female, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mo.male, 'Male members opting out is - ', 'Male members opting out is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, mo.male, schemeId);
  await browser.sleep(2000);

  await sp.graph(mo.map, 'Opts outs by postcode map is visible', 'Opts outs by postcode map is not visible');

  await sp.graph(mo.optOutByChannelGender, 'Opts outs by channel and gender graph is visible', 'Opts outs by channel and gender graph is not visible');

  await browser.actions().sendKeys(protractor.Key.END).perform();

  await browser.sleep(3000);

  await sp.graph(mo.optOutByAgeGender, 'Opts outs by age and gender graph is visible', 'Opts outs by age and gender graph is not visible');


  })
