import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { Alert } from 'selenium-webdriver';
import { WebdriverWebElement } from 'protractor/built/element';
import { protractor } from 'protractor/built/ptor';
import { threadId } from 'worker_threads';
import { workplaceDashboard } from '../pageObjects/workplaceDasboardPO';
import { schemeCategory } from '../pageObjects/schemeCategoryPO';
import toBe from 'jasmine';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';
const { Status } = require('@cucumber/cucumber');


let excel = new excelReadAndWrite();
let bf = new basicFields();
let sp = new schemePage();
let lp = new landingPage();
//let dp = new landingPage();
let wd = new workplaceDashboard();
let expect = chai.expect;

let path = "C:\\Automation\\ClientMI - Copy\\data\\scheme.xlsx";

Given('user select the scheme {string}', async (schemeId) => {
 
  await browser.sleep(5000);

  await bf.basicFieldWithoutFonts(lp.username, lp.date, lp.logo);

  

  await sp.selectScheme(lp.schemeCombobox, lp.searchbutton, lp.radioBtn, lp.maxMinButton, schemeId);

  
  await sp.lookForElement(sp.groupName, 'Group name is - ', 'Group name is not present');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 3, 3, sp.groupName, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(sp.groupRef, 'Group reference is - ', 'Group reference is not present');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 4, 3, sp.groupRef,schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(sp.companyName, 'Company name is - ', 'Company name is not present');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, sp.companyName, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(sp.startDate, 'Start date is - ', 'Start date is not present');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 6, 3, sp.startDate, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(sp.renewalDate, 'Renewal date is - ', 'Renewal date is not present');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 7, 3, sp.renewalDate, schemeId);
  await browser.sleep(2000);

  await sp.lookForElement(sp.autoEnrolDate, 'Auto Enrol date is - ', 'Auto Enrol date is not present');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 8, 3, sp.autoEnrolDate, schemeId);
  await browser.sleep(2000);


  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  
  await browser.switchTo().frame(frame1);

  await lp.viewAnalysisBtn.click();//click View Analysis button

  await browser.sleep(10000);

  })


When('user navigates to Workplace dashboard', async () => {
  

  await browser.waitForAngularEnabled(true); // workplace dashboard page appear

  await sp.lookForElement(lp.groupName, 'Group name is - ', 'Group name is not present');
  
})
/*
Then('user able to view tiles in the dashboard', async () => {

  await bf.basicField(sp.username, sp.date, sp.logo);

  await sp.dashboardTiles(sp.serviceAgreement, wd.label1, wd.serviceScore, 'Service level agreement score tile is not present');

  await sp.dashboardTiles(sp.optOutRate, wd.label2, wd.optOutRate, 'Opt out rate tile is not present');

  await sp.dashboardTiles(sp.totalReg, wd.label3, wd.totOnlineReg, 'Total online Registration tile is not present');

  await sp.dashboardTiles(sp.memberToday, wd.label4, wd.memberToday, 'Members today tile is not present');

  await sp.dashboardTiles(sp.netMovement, wd.label5, wd.netMovement, 'Opt out rate tile is not present');

  await sp.dashboardTiles(sp.memberContribution, wd.label6, wd.totOnlineReg, 'Total online Registration tile is not present');

  await sp.dashboardTiles(sp.fundsUnderMgmtLink, wd.label7, wd.fundUnderMgmt, 'Funds under manangement tile is not present');

  await sp.dashboardTiles(sp.upcomingrRetirement, wd.label8, wd.upcomingRetirement, 'Opt out rate tile is not present');

  await sp.dashboardTiles(sp.countOfScheme, wd.label9, wd.countOfScheme, 'Count of scheme tile is not present');

  await sp.dashboardTiles(sp.memberToday, wd.label4, wd.memberToday, 'Members today tile is not present');

  await sp.dashboardTiles(sp.netMovement, wd.label5, wd.netMovement, 'Opt out rate tile is not present');

  await sp.dashboardTiles(sp.memberContribution, wd.label6, wd.totOnlineReg, 'Total online Registration tile is not present');

  await sp.dashboardTiles(sp.fundsUnderMgmtLink, wd.label7, wd.fundUnderMgmt, 'Funds under manangement tile is not present');

  await sp.dashboardTiles(sp.upcomingrRetirement, wd.label8, wd.upcomingRetirement, 'Opt out rate tile is not present');

  await sp.dashboardTiles(sp.countOfScheme, wd.label9, wd.countOfScheme, 'Count of scheme tile is not present');

})

Then('user able to browse collection & dasboards', async () => {
 
  await bf.linkButton('Copy URL');

  await bf.bookmarks('Workplace Bookmark');

  await bf.filter('= GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN');

  await bf.browseCollection();

  await bf.exportButton();


});*/
  


