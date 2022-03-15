"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const schemePO_1 = require("../pageObjects/schemePO");
const landingPO_1 = require("../pageObjects/landingPO");
const spacesPO_1 = require("../pageObjects/spacesPO");
const chai_1 = __importDefault(require("chai"));
const assetsUnderMgmtPO_1 = require("../pageObjects/assetsUnderMgmtPO");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let lp = new landingPO_1.landingPage();
let am = new assetsUnderMgmtPO_1.assetUnderMgmt();
let sp = new schemePO_1.schemePage();
let bf = new generalFunctions_1.basicFields();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
let space = new spacesPO_1.chooseSpaces();
let path = "C:\\Automation\\ClientMI\\data\\assetUnderMgmt.xlsx";
(0, cucumber_1.Given)('user logged into the {string} dashboard', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(space.spaces), 6000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield space.spaces.click();
        yield console.log("Spaces have been found");
    }));
    yield space.chooseSpace(string, space.MySchemeIntelDev, space.MySchemeIntelProd, space.MySchemeIntelDash, space.MySchemeIntelDashv02);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(space.closeNav), 30000);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.titleIs('Entry Screen'), 100000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield space.closeNav.click();
    }));
}));
(0, cucumber_1.Given)('user select the {string}', (schemeId) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield bf.basicFieldWithoutFonts(lp.username, lp.date, lp.logo);
    yield sp.selectScheme(lp.schemeCombobox, lp.searchbutton, lp.radioBtn, lp.maxMinButton, schemeId);
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield lp.viewAnalysisBtn.click(); //click View Analysis table
    yield protractor_1.browser.sleep(10000);
    yield protractor_1.browser.waitForAngularEnabled(true); // workplace dashboard page open ups
}));
(0, cucumber_1.When)('user navigates to Overview of assets under management', () => __awaiter(void 0, void 0, void 0, function* () {
    //await browser.sleep(5000);
    //return protractor.promise.all([
    //  await expect(browser.isElementPresent(sp.fundsUnderMgmtLink)).equals(true)]);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(sp.fundsUnderMgmtLink), 30000);
    yield sp.fundsUnderMgmtLink.click();
    yield protractor_1.browser.sleep(10000);
}));
(0, cucumber_1.Then)('user able to view the basic fields in the page for the {string}', (scheme) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    //await sp.schemeFilter(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);
    yield protractor_1.browser.sleep(5000);
    yield sp.lookForElement(am.totAssetsUnderMgmt, 'Total assets under management is - ', 'Total assets under management is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 3, 3, am.totAssetsUnderMgmt, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(am.totAssetInvestedInNonLifestyleFund, 'Total assets invested in specific funds (Non lifestyle profile) is - ', 'Total assets invested in specific funds (Non lifestyle profile) is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 4, 3, am.totAssetInvestedInNonLifestyleFund, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(am.totAssetInvestedInLifestyleFund, 'Total assets invested in lifestyle profiles is - ', 'Total assets invested in lifestyle profiles is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, am.totAssetInvestedInLifestyleFund, scheme);
    yield protractor_1.browser.sleep(2000);
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
}));
//Then('user able to view filter {string}', async (string) => {
//await sp.filterMethod(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);
//})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzVW5kZXJNZ210U3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvYXNzZXRzVW5kZXJNZ210U3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUg7QUFDckgsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUN2RCxzREFBdUQ7QUFDdkQsZ0RBQXdCO0FBRXhCLHdFQUFrRTtBQUNsRSxzRUFBOEQ7QUFDOUQsa0VBQWtFO0FBR2xFLElBQUksS0FBSyxHQUFHLElBQUksa0NBQWlCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLGtDQUFjLEVBQUUsQ0FBQztBQUM5QixJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLDhCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUM7QUFDL0IsSUFBSSxJQUFJLEdBQUcscURBQXFELENBQUM7QUFHakUsSUFBQSxnQkFBSyxFQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDaEUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUU7UUFDOUYsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEtB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