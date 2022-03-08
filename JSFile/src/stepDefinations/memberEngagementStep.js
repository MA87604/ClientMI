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
const memberOnlineEngagementPO_1 = require("../pageObjects/memberOnlineEngagementPO");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const genderAge_1 = require("../pageObjects/genderAge");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let ga = new genderAge_1.genderAge();
let sp = new schemePO_1.schemePage();
let mep = new memberOnlineEngagementPO_1.memberEngagementPage();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
//let alert = new Alert();
let path = "C:\\Automation\\ClientMI\\data\\memberOnlineEngagement.xlsx";
(0, cucumber_1.When)('user navigates to Member Online Engagements Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield sp.totalRegLink.click();
    yield protractor_1.browser.sleep(20000);
}));
(0, cucumber_1.Then)('user able to view the Member Online Engagements fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(mep.username, mep.dataAsOf, mep.logo);
}));
(0, cucumber_1.Then)('user able to view {string} Member Online Engagements filter {string}, {string}, {string} and {string}', (schemeId, scheme, gender, age, status) => __awaiter(void 0, void 0, void 0, function* () {
    //await sp.schemeFilter(mep.schemeCategory, mep.search, mep.radioBtn, mep.minMaxBtn, scheme);
    //await ga.genderRadioBtn(mep.chooseGender, mep.search1, mep.radioBtn1, mep.radioBtn2, mep.minMaxBtn1, gender);
    //await ga.ageFilter(mep.chooseAge, mep.search2, mep.chkBox, mep.applyBtn,mep.chkAll, age)
    //await ga.memStatus(mep.memStatus,mep.search3,mep.radioBtn3,mep.minMaxBtn3,status);
    yield protractor_1.browser.sleep(10000);
    yield sp.lookForElement(mep.onlineReg, 'Online registrations are - ', 'Online registrations are missing');
    yield sp.lookForElement(mep.memberLogLastMon, 'Member logged in (last month) are - ', 'Member logged in (last month) are missing');
    yield sp.lookForElement(mep.memberLogLast3Mon, 'Member logged in (last 3 month) are - ', 'Member logged in (last 3 month) are missing');
    yield sp.lookForElement(mep.memberWithEmail, 'Percentage of members with an email address are - ', 'Percentage of members with an email address are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 3, 3, mep.memberWithEmail, schemeId);
    yield protractor_1.browser.sleep(2000);
    let frame = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[29]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame);
    yield mep.breakdownBtn.click();
    yield protractor_1.browser.switchTo().defaultContent();
    yield sp.lookForElement(mep.onlineRegEmail, 'Online registered with email is - ', 'Online registered with email is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 4, 3, mep.onlineRegEmail, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mep.notRegEmail, 'Not registered yet with email is - ', 'Not registered yet with email is missing');
    yield sp.lookForElement(mep.regWithoutEmail, 'Registered without email is - ', 'Registered without email is missing');
    yield sp.lookForElement(mep.notRegWithoutEmail, 'Not registered yet without email is - ', 'Not registered yet without email is missing');
    yield sp.lookForElement(mep.avgAge, 'Average age of registered members are - ', 'Average age of registered members are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 5, 3, mep.avgAge, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mep.female1, 'Average Female registered are - ', 'Average Female registered are  missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 6, 3, mep.female1, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mep.male1, 'Average male registered are - ', 'Average male registered are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 7, 3, mep.male1, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mep.memberByAgeGender, 'Member by Age and gender graph is visible', 'Member by Age and gender graph is visible are missing');
    yield sp.lookForElement(mep.map, 'Registrations by postcode map is visible', 'Registrations by postcode map is visible missing');
    yield mep.map.click();
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[39]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield sp.graphBreakdown(mep.graphBreakdownBtn, mep.tableHeader1, mep.row3, 'Opt out by age and gender graph is not visible');
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mep.barChart, 'Bar Chart-Registrations by Date is visible', 'Bar Chart-Registrations by Date is not visible');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyRW5nYWdlbWVudFN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL21lbWJlckVuZ2FnZW1lbnRTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxSDtBQUNySCxzREFBcUQ7QUFDckQsd0RBQXVEO0FBQ3ZELHNEQUF1RDtBQUN2RCxnREFBd0I7QUFHeEIsZ0RBQW1EO0FBR25ELHNGQUErRTtBQUMvRSxzRUFBOEQ7QUFDOUQsd0RBQXFEO0FBQ3JELGtFQUFrRTtBQUdsRSxJQUFJLEtBQUssR0FBRyxJQUFJLGtDQUFpQixFQUFFLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSw4QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSwrQ0FBb0IsRUFBRSxDQUFDO0FBQ3JDLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFDMUIsSUFBSSxJQUFJLEdBQUcsNkRBQTZELENBQUM7QUFHekUsSUFBQSxlQUFJLEVBQUMsc0RBQXNELEVBQUUsR0FBUyxFQUFFO0lBQ3RFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTlCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMs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