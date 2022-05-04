import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { protractor } from 'protractor/built/ptor';
import { assetUnderMgmt } from '../pageObjects/assetsUnderMgmtPO';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';


let excel = new excelReadAndWrite();
let lp = new landingPage();
let am = new assetUnderMgmt();
let sp = new schemePage();
let bf = new basicFields();
let expect = chai.expect;
let should = chai.should;
let space = new chooseSpaces();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\assetUnderMgmt.xlsx";


Given('user logged into the {string} dashboard', async (string) => {
  await browser.waitForAngularEnabled(false);
  await browser.wait(ExpectedConditions.elementToBeClickable(space.spaces), 6000).then(async () => {
    await space.spaces.click();
    await console.log("Spaces have been found");
  });
  await space.chooseSpace(string, space.MySchemeIntelDev, space.MySchemeIntelProd, space.MySchemeIntelDash, space.MySchemeIntelDashv02);

  await browser.wait(ExpectedConditions.elementToBeClickable(space.closeNav), 30000);
  
  await browser.wait(ExpectedConditions.titleIs('Entry Screen'), 100000).then(async () =>
  {
     await space.closeNav.click();
  })

})

Given('user select the {string}', async (schemeId) => {
  await browser.sleep(5000);

  await bf.basicFieldWithoutFonts(lp.username, lp.date, lp.logo);

  await sp.selectScheme(lp.schemeCombobox, lp.searchbutton, lp.radioBtn, lp.minimizeButton,lp.expandButton, schemeId);

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);
  await lp.viewAnalysisBtn.click();//click View Analysis table
  // await browser.sleep(10000);
  await browser.waitForAngularEnabled(true); // workplace dashboard page open ups
});

When('user navigates to Overview of assets under management', async () => {
  // browser.manage().window().setSize(1000, 760);
  // await browser.sleep(2000);
  // await browser.wait(ExpectedConditions.visibilityOf(sp.fundsUnderMgmtLink), 5000, "Asset Under Management link is not visible");
  //  console.log("Asset Under Management link displayed");
  // browser.wait(ExpectedConditions.elementToBeClickable(sp.fundsUnderMgmtLink), 5000);
  // expect(browser.isElementPresent(sp.fundsUnderMgmtLink)).equals(true);
  // await browser.actions().mouseMove(sp.fundsUnderMgmtLink, {x:14.9844,y:14.25}).click(sp.fundsUnderMgmtLink).perform();
  // await browser.actions().mouseMove(sp.fundsUnderMgmtLink.getLocation()).sendKeys(" ").perform();
  // await browser.executeScript('window.scrollTo(0,600);').then(function () {
  //   console.log("Scrolled");
  // });
/*sp.fundsUnderMgmtLink.isPresent().then(function(elePresent){
  if(elePresent) {
    console.log("Link is present");
  }
  else{
    console.log("Link is not present in DOM");
  }
});*/
  sp.fundsUnderMgmtLink.click().then(function(){
    console.log("Link Clicked");
  });

  // browser.executeScript("var element = document.querySelector('locator'); element.value = 'whatever';")
  await browser.sleep(5000);
});

Then('user able to view the basic fields in the page for the {string}', async (scheme) => {

  //await browser.waitForAngularEnabled(false);

  //await sp.schemeFilter(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);

  await browser.sleep(5000);

  await sp.lookForElement(am.totAssetsUnderMgmt, 'Total assets under management is - ', 'Total assets under management is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 3, 3, am.totAssetsUnderMgmt, scheme);
  await browser.sleep(2000);
  
  await sp.lookForElement(am.totAssetInvestedInNonLifestyleFund, 'Total assets invested in specific funds (Non lifestyle profile) is - ', 'Total assets invested in specific funds (Non lifestyle profile) is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 4, 3, am.totAssetInvestedInNonLifestyleFund, scheme);
  await browser.sleep(2000);

  await sp.lookForElement(am.totAssetInvestedInLifestyleFund, 'Total assets invested in lifestyle profiles is - ', 'Total assets invested in lifestyle profiles is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperationString(path, 5, 3, am.totAssetInvestedInLifestyleFund, scheme);
  await browser.sleep(2000);

  /*await sp.lookForElement(am.defaultStratPolicies, 'Policies invested in default strategy - ', 'Policies invested in default strategy is missing');
  
  await sp.lookForElement(am.otherStratPolicies, 'Policies invested in other strategy - ', 'Policies invested in other strategy is missing');

  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[19]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);
  await am.showBreakdownBtn.click();
  await console.log("Show breakdown button has been clicked");
  await browser.switchTo().defaultContent();

  await sp.lookForElement(am.assetInvestedinDefaultStat, 'Assets invested in default strategy is -', 'Assets invested in default strategy is missing');
  
  await sp.lookForElement(am.assetInvestedinOtherStat, 'Assets invested in other strategy is -', 'Assets invested in other strategy is missing');
 
  await sp.tableData(am.table1Header, am.row1);

  await sp.tableData(am.table2Header, am.row2);

  let frame2: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[33]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame2);
  await am.viewAllFundsBtn.click();
  await browser.sleep(2000);
  await am.viewAllFundsBtn.click(); // currently this is a bug we need to click the button twice 
  await browser.switchTo().defaultContent();
  
  await sp.lookForElement(am.top5fundsGraph, 'Top 5 funds on date of valuation graph is visible', 'Top 5 funds on date of valuation graph is visible is missing');
  
  let frame3: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame3);
  await am.viewAllFundsBtn.click();
  await browser.sleep(2000);
  await am.viewAllFundsBtn.click(); // currently this is a bug we need to click the button twice 
  await browser.switchTo().defaultContent();

  await sp.lookForElement(am.top5lifestyleGraph, 'Top 5 lifestyle profiles on date of valuation graph is visible', 'Top 5 lifestyle profiles on date of valuation graph missing');
  
  await browser.actions().sendKeys(protractor.Key.END).perform();

  await browser.sleep(3000);

  await sp.lookForElement(am.fundDemographic, 'Fund demographics on date of valuation graph is visible', 'Fund demographics on date of valuation graph is missing');
 */

});


//Then('user able to view filter {string}', async (string) => {



  //await sp.filterMethod(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);
  

//})
  