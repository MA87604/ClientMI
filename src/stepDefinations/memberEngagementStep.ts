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
import { memberEngagementPage } from '../pageObjects/memberOnlineEngagementPO';
import { basicFields } from '../pageObjects/generalFunctions';
import { genderAge } from '../pageObjects/genderAge';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';


let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();
let sp = new schemePage();
let mep = new memberEngagementPage();
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\memberOnlineEngagement.xlsx";


When('user navigates to Member Online Engagements Overview', async () => {
  //browser.manage().window().setSize(900, 720);
  await browser.wait(ExpectedConditions.visibilityOf(sp.totalRegLink),5000);
  await sp.totalRegLink.click();

  await browser.sleep(5000);
})


Then('user able to view the Member Online Engagements fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(mep.username, mep.dataAsOf, mep.logo);
})

Then('user able to view {string} Member Online Engagements filter {string}, {string}, {string} and {string}', async (schemeId, scheme, gender, age, status) => {

  //await sp.schemeFilter(mep.schemeCategory, mep.search, mep.radioBtn, mep.minMaxBtn, scheme);

  //await ga.genderRadioBtn(mep.chooseGender, mep.search1, mep.radioBtn1, mep.radioBtn2, mep.minMaxBtn1, gender);

  //await ga.ageFilter(mep.chooseAge, mep.search2, mep.chkBox, mep.applyBtn,mep.chkAll, age)
  
  //await ga.memStatus(mep.memStatus,mep.search3,mep.radioBtn3,mep.minMaxBtn3,status);

  await browser.sleep(10000);

  await sp.lookForElement(mep.onlineReg, 'Online registrations are - ', 'Online registrations are missing');

  await sp.lookForElement(mep.memberLogLastMon, 'Member logged in (last month) are - ', 'Member logged in (last month) are missing');

  await sp.lookForElement(mep.memberLogLast3Mon, 'Member logged in (last 3 month) are - ', 'Member logged in (last 3 month) are missing');

  await sp.lookForElement(mep.memberWithEmail, 'Percentage of members with an email address are - ', 'Percentage of members with an email address are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 3, 3, mep.memberWithEmail, schemeId);
  await browser.sleep(2000);


  let frame: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[29]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  
  await browser.switchTo().frame(frame);

  await mep.breakdownBtn.click();

  await browser.switchTo().defaultContent();

  await sp.lookForElement(mep.onlineRegEmail, 'Online registered with email is - ', 'Online registered with email is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 4, 3, mep.onlineRegEmail, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(mep.notRegEmail, 'Not registered yet with email is - ', 'Not registered yet with email is missing');

  await sp.lookForElement(mep.regWithoutEmail, 'Registered without email is - ', 'Registered without email is missing');

  await sp.lookForElement(mep.notRegWithoutEmail, 'Not registered yet without email is - ', 'Not registered yet without email is missing');

  await sp.lookForElement(mep.avgAge, 'Average age of registered members are - ', 'Average age of registered members are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 5, 3, mep.avgAge, schemeId);
  await browser.sleep(2000);
  
  await sp.lookForElement(mep.female1, 'Average Female registered are - ', 'Average Female registered are  missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 6, 3, mep.female1, schemeId);
  await browser.sleep(2000);
  
  await sp.lookForElement(mep.male1, 'Average male registered are - ', 'Average male registered are missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 7, 3, mep.male1, schemeId);
  await browser.sleep(2000);
  
  await sp.lookForElement(mep.memberByAgeGender, 'Member by Age and gender graph is visible', 'Member by Age and gender graph is visible are missing');
  
  await sp.lookForElement(mep.map, 'Registrations by postcode map is visible', 'Registrations by postcode map is visible missing');
  await browser.executeScript("arguments[0].scrollIntoView();",mep.map);
  await mep.map.click();

  await browser.sleep(2000);
  await browser.actions().sendKeys(protractor.Key.END).perform();

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[39]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);

  await sp.graphBreakdown(mep.graphBreakdownBtn, mep.tableHeader1, mep.row3, 'Opt out by age and gender graph is not visible');

  await browser.actions().sendKeys(protractor.Key.END).perform();

  await browser.sleep(2000);

  await sp.lookForElement(mep.barChart, 'Bar Chart-Registrations by Date is visible', 'Bar Chart-Registrations by Date is not visible');

})

