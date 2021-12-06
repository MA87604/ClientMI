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
const ptor_1 = require("protractor/built/ptor");
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
let path = "C:\\Automation\\ClientMI - Copy\\data\\assetUnderMgmt.xlsx";
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
    yield protractor_1.browser.sleep(5000);
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
    yield sp.lookForElement(am.defaultStratPolicies, 'Policies invested in default strategy - ', 'Policies invested in default strategy is missing');
    yield sp.lookForElement(am.otherStratPolicies, 'Policies invested in other strategy - ', 'Policies invested in other strategy is missing');
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[19]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield am.showBreakdownBtn.click();
    yield console.log("Show breakdown button has been clicked");
    yield protractor_1.browser.switchTo().defaultContent();
    yield sp.lookForElement(am.assetInvestedinDefaultStat, 'Assets invested in default strategy is -', 'Assets invested in default strategy is missing');
    yield sp.lookForElement(am.assetInvestedinOtherStat, 'Assets invested in other strategy is -', 'Assets invested in other strategy is missing');
    yield sp.tableData(am.table1Header, am.row1);
    yield sp.tableData(am.table2Header, am.row2);
    let frame2 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[33]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame2);
    yield am.viewAllFundsBtn.click();
    yield protractor_1.browser.sleep(2000);
    yield am.viewAllFundsBtn.click(); // currently this is a bug we need to click the button twice 
    yield protractor_1.browser.switchTo().defaultContent();
    yield sp.lookForElement(am.top5fundsGraph, 'Top 5 funds on date of valuation graph is visible', 'Top 5 funds on date of valuation graph is visible is missing');
    let frame3 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame3);
    yield am.viewAllFundsBtn.click();
    yield protractor_1.browser.sleep(2000);
    yield am.viewAllFundsBtn.click(); // currently this is a bug we need to click the button twice 
    yield protractor_1.browser.switchTo().defaultContent();
    yield sp.lookForElement(am.top5lifestyleGraph, 'Top 5 lifestyle profiles on date of valuation graph is visible', 'Top 5 lifestyle profiles on date of valuation graph missing');
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
    yield protractor_1.browser.sleep(3000);
    yield sp.lookForElement(am.fundDemographic, 'Fund demographics on date of valuation graph is visible', 'Fund demographics on date of valuation graph is missing');
}));
//Then('user able to view filter {string}', async (string) => {
//await sp.filterMethod(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);
//})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzVW5kZXJNZ210U3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvYXNzZXRzVW5kZXJNZ210U3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUg7QUFDckgsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUN2RCxzREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLGdEQUFtRDtBQUNuRCx3RUFBa0U7QUFDbEUsc0VBQThEO0FBQzlELGtFQUFrRTtBQUdsRSxJQUFJLEtBQUssR0FBRyxJQUFJLGtDQUFpQixFQUFFLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxrQ0FBYyxFQUFFLENBQUM7QUFDOUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxFQUFFLEdBQUcsSUFBSSw4QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksSUFBSSxHQUFHLDREQUE0RCxDQUFDO0FBR3hFLElBQUEsZ0JBQUssRUFBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ2hFLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO1FBQzlGLE1BQU0sS0FBSyxDQUFD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