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
const chai_1 = __importDefault(require("chai"));
const workplaceDasboardPO_1 = require("../pageObjects/workplaceDasboardPO");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
const { Status } = require('@cucumber/cucumber');
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let sp = new schemePO_1.schemePage();
let lp = new landingPO_1.landingPage();
//let dp = new landingPage();
let wd = new workplaceDasboardPO_1.workplaceDashboard();
let expect = chai_1.default.expect;
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\landingPage.xlsx";
(0, cucumber_1.Given)('user select the scheme {string}', (schemeId) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield bf.basicFieldWithoutFonts(lp.username, lp.date, lp.logo);
    yield sp.selectScheme(lp.schemeCombobox, lp.searchbutton, lp.radioBtn, lp.minimizeButton, lp.expandButton, schemeId);
    yield sp.lookForElement(sp.groupName, 'Group name is - ', 'Group name is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 3, 3, sp.groupName, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sp.groupRef, 'Group reference is - ', 'Group reference is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 4, 3, sp.groupRef, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sp.companyName, 'Company name is - ', 'Company name is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, sp.companyName, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sp.startDate, 'Start date is - ', 'Start date is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 6, 3, sp.startDate, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sp.renewalDate, 'Renewal date is - ', 'Renewal date is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 7, 3, sp.renewalDate, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sp.autoEnrolDate, 'Auto Enrol date is - ', 'Auto Enrol date is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 8, 3, sp.autoEnrolDate, schemeId);
    yield protractor_1.browser.sleep(2000);
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield lp.viewAnalysisBtn.click(); //click View Analysis button
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.switchTo().defaultContent();
}));
(0, cucumber_1.When)('user navigates to Workplace dashboard', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(true); // workplace dashboard page appear
    yield sp.lookForElement(lp.groupName, 'Group name is - ', 'Group name is not present');
}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0U2NoZW1lU3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvc2VsZWN0U2NoZW1lU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUg7QUFDckgsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUV2RCxnREFBd0I7QUFLeEIsNEVBQXdFO0FBR3hFLHNFQUE4RDtBQUM5RCxrRUFBa0U7QUFDbEUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBR2pELElBQUksS0FBSyxHQUFHLElBQUksa0NBQWlCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxJQUFJLDhCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUMzQiw2QkFBNkI7QUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSx3Q0FBa0IsRUFBRSxDQUFDO0FBQ2xDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxJQUFJLEdBQUcsb0VBQW9FLENBQUM7QUFFaEYsSUFBQSxnQkFBSyxFQUFDLGlDQUFpQyxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFFMUQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9ELE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFcEgsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUN2RixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2hHLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUN4RSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLG9CQUFvQixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDN0YsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUN2RixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDckcsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHMUIsSUFBSSxNQUFNLEdBQXNCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1JQUFtSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV2TSxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXZDLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBLDRCQUE0QjtJQUU3RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0wsSUFBQSxlQUFJLEVBQUMsdUNBQXVDLEVBQUUsR0FBUyxFQUFFO0lBR3ZELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztJQUU3RSxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0FBRXpGLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrREsifQ==