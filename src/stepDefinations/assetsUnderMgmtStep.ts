import { Given, When, Then } from '@cucumber/cucumber';
import {
  browser,
  by,
  By,
  element,
  ExpectedConditions,
  until,
  WebDriver,
  WebElement,
  WebElementPromise
} from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { protractor } from 'protractor/built/ptor';
import { assetUnderMgmt } from '../pageObjects/assetsUnderMgmtPO';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';
import elementIsNotVisible = until.elementIsNotVisible;


let excel = new excelReadAndWrite();
let lp = new landingPage();
let am = new assetUnderMgmt();
let sp = new schemePage();
let bf = new basicFields();
let expect = chai.expect;
let should = chai.should;
let space = new chooseSpaces();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\assetUnderMgmt.xlsx";

let moment = require('moment');
let lastMonthFirstDay = moment().subtract(1, 'months').startOf('month').format('DD/MM/YYYY')
// console.log("lastMonthFirstDay: "+lastMonthFirstDay);

Given('user logged into the {string} dashboard', async (string) => {
  await browser.waitForAngularEnabled(false);
  await browser.wait(ExpectedConditions.elementToBeClickable(space.spaces), 6000).then(async () => {
    // await space.spaces.click();
    await console.log("Spaces have been found");
    await browser.sleep(10000);
  });

  await space.MySchemeIntelProd.click();
  // await space.chooseSpace(string, space.MySchemeIntelDev, space.MySchemeIntelProd, space.MySchemeIntelDash, space.MySchemeIntelDashv02);
  await browser.sleep(20000);
  await space.dashboard.click();
  console.log("Clicked on Close icon");

  // await browser.wait(ExpectedConditions.titleIs('Entry Screen'), 10000).then(async () =>
  // {
  //    await space.closeNav.click();
  // })

});

Given('user select the {string}', async (schemeId) => {
  await browser.sleep(5000);

  await bf.basicFieldWithoutFonts(lp.username, lp.date, lp.logo);

  // await sp.selectScheme(lp.schemeCombobox, lp.searchbutton, lp.radioBtn, lp.minimizeButton,lp.expandButton, schemeId);

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);
  await lp.viewAnalysisBtn.click();//click View Analysis table
  // await browser.sleep(10000);
  await browser.waitForAngularEnabled(true); // workplace dashboard page open ups
});

When('user navigates to Assets under management Overview page', async () => {

  sp.fundsUnderMgmtLink.click().then(function(){
    console.log("Link Clicked");
  });

  await browser.sleep(5000);
});

Then('user able to view the assets under management fields in the page for the {string}', async (scheme) => {

  //await sp.schemeFilter(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);

  await browser.sleep(5000);

  await sp.lookForElement(am.totAssetsUnderMgmt, 'Total assets under management is - ', 'Total assets under management is missing');
  await excel.excelWriteOperationString(path, 3, 3, am.totAssetsUnderMgmt, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(am.totAssetInvestedInNonLifestyleFund, 'Total assets invested in specific funds (Non lifestyle profile) is - ', 'Total assets invested in specific funds (Non lifestyle profile) is missing');
   await excel.excelWriteOperationString(path, 4, 3, am.totAssetInvestedInNonLifestyleFund, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(am.totAssetInvestedInLifestyleFund, 'Total assets invested in lifestyle profiles is - ', 'Total assets invested in lifestyle profiles is missing');
  await excel.excelWriteOperationString(path, 5, 3, am.totAssetInvestedInLifestyleFund, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(am.defaultStratPolicies, 'Policies invested in default strategy - ', 'Policies invested in default strategy is missing');
  await excel.excelWriteOperationString(path, 6, 3, am.defaultStratPolicies, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(am.otherStratPolicies, 'Policies invested in other strategy - ', 'Policies invested in other strategy is missing');
  await excel.excelWriteOperationString(path, 7, 3, am.otherStratPolicies, scheme);
  await browser.sleep(1000);

  let frame1: WebElementPromise = element(by.xpath("(//dashlet//iframe)[1]")).getWebElement();
  await browser.switchTo().frame(frame1);
  await am.showBreakdownBtn.click();
  await console.log("Show breakdown button has been clicked");
  await browser.switchTo().defaultContent();

  await sp.lookForElement(am.assetInvestedinDefaultStat, 'Assets invested in default strategy is -', 'Assets invested in default strategy is missing');
  await excel.excelWriteOperationString(path, 8, 3, am.assetInvestedinDefaultStat, scheme);
  await browser.sleep(1000);

  await sp.lookForElement(am.assetInvestedinOtherStat, 'Assets invested in other strategy is -', 'Assets invested in other strategy is missing');
  await excel.excelWriteOperationString(path, 9, 3, am.assetInvestedinOtherStat, scheme);
  await browser.sleep(1000);


});


Then('user able to view graph and table for the {string}', async (scheme) => {

  await sp.tableData(am.table2Header, am.row2);
  console.log("Lifestyle funds on date of valuation table is displayed");
  await excel.excelWriteOperation1(path, 12, 3, am.row2, scheme);
  await browser.sleep(1000);

  let frame3: WebElementPromise = element(by.xpath("(//dashlet//iframe)[3]")).getWebElement();
  await browser.switchTo().frame(frame3);
  await am.viewAllFundsBtn.click();
  await browser.sleep(2000);
  await am.viewAllFundsBtn.click(); // currently this is a bug we need to click the button twice
  await browser.switchTo().defaultContent();

  await sp.lookForElement(am.top5lifestyleGraph, 'Top 5 lifestyle profiles on date of valuation graph is visible', 'Top 5 lifestyle profiles on date of valuation graph missing');
  await excel.excelWriteOperationText(path, 13, 3, "Graph is displayed", scheme);
  await browser.sleep(1000);

  let frame2: WebElementPromise = element(by.xpath("(//dashlet//iframe)[2]")).getWebElement();
  await browser.switchTo().frame(frame2);
  console.log("Switched to frame");
  await am.viewAllFundsBtn.click();
  console.log("Clicked on View top 5 funds button");
  await browser.sleep(2000);
  await am.viewAllFundsBtn.click(); // currently this is a bug we need to click the button twice
  await browser.switchTo().defaultContent();
  await sp.lookForElement(am.top5fundsGraph, 'Top 5 funds on date of valuation graph is visible', 'Top 5 funds on date of valuation graph is visible is missing')
  await excel.excelWriteOperationText(path, 10, 3, "Graph is displayed", scheme);
  await browser.sleep(1000);

  await browser.executeScript("arguments[0].click();", am.graphExpandButton);
  await browser.sleep(2000);
  await am.filterButton.click();
  console.log("Clicked on Filter Button");
  await browser.sleep(2000);
  await browser.executeScript("arguments[0].scrollIntoView();",am.schemeHoldingAttr);
  await am.schemeHoldingAttr.click();
  console.log("Clicked on Scheme Holding Attribute, Date of Valuation");
  // await am.searchAttrTextbox.sendKeys(lastMonthFirstDay, protractor.Key.ENTER);
  // console.log("Entered First Day Of Last Month: "+lastMonthFirstDay);
  await browser.sleep(2000);
  await browser.executeScript("arguments[0].scrollIntoView();",am.dateOption2);
  console.log("Date is changed to verify the graph");
  await browser.wait(ExpectedConditions.visibilityOf(am.top5fundsGraph),10000,"Graph is not displayed for selected date range",);
  console.log("Top 5 funds Graph is displayed for selected date range");
  await excel.excelWriteOperationText(path, 11, 3, "Graph is displayed", scheme);
  await browser.sleep(1000);
  await am.closeSchemeHoldingAttr.click();
  await browser.sleep(2000);
});


Then('user able to view filter options for the {string}', async (scheme) => {
  await sp.lookForElement(am.ageBandFilter, 'Age Band Filter option is visible', 'Age Band Filter option is missing');
  await excel.excelWriteOperationText(path, 15, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.companyNameFilter, 'Company Name Filter option is visible', 'Company Name Filter option is missing');
  await excel.excelWriteOperationText(path, 16, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.genderFilter, 'Gender Filter option is visible', 'Gender Filter option is missing');
  await excel.excelWriteOperationText(path, 17, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.goneAwayFilter, 'Gone Away Filter option is visible', 'Gone Away Filter option is missing');
  await excel.excelWriteOperationText(path, 18, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.groupSchemeFilter, 'Group Scheme Filter option is visible', 'Group Scheme Filter option is missing');
  await excel.excelWriteOperationText(path, 19, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.memberStatusFilter, 'Member Status Filter option is visible', 'Member Status Filter option is missing');
  await excel.excelWriteOperationText(path, 20, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.yearOrMonthFilter, 'Year/Month Filter option is visible', 'Year/Month Filter option is missing');
  await excel.excelWriteOperationText(path, 21, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);
  await sp.lookForElement(am.schemeIDFilter, 'Scheme ID Filter option is visible', 'Scheme ID Filter option is missing');
  await excel.excelWriteOperationText(path, 23, 3, "Filter is displayed", scheme);
  await browser.sleep(1000);

})
