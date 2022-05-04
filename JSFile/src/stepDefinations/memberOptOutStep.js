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
const memberOptOutPO_1 = require("../pageObjects/memberOptOutPO");
const genderAge_1 = require("../pageObjects/genderAge");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let ga = new genderAge_1.genderAge();
let mo = new memberOptOutPO_1.memberOptOut();
let sp = new schemePO_1.schemePage();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
//let alert = new Alert();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\memberOptOut.xlsx";
(0, cucumber_1.When)('user navigates to Member Opt Out Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    //browser.manage().window().setSize(900, 720);
    yield protractor_1.browser.sleep(2000);
    yield sp.optOutRateLink.click();
    yield protractor_1.browser.sleep(10000);
}));
(0, cucumber_1.Then)('user able to view the Member Opt Out fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(mo.username, mo.dataAsOf, mo.logo);
}));
(0, cucumber_1.Then)('user able to view {string} Member Opt Out filter {string}, {string} and {string}', (schemeId, scheme, gender, age) => __awaiter(void 0, void 0, void 0, function* () {
    //await sp.schemeFilter(mo.schemeCategory, mo.search, mo.radioBtn, mo.minMaxBtn, scheme);
    //await ga.genderComboBox(mo.chooseGender, mo.search1, mo.maleChkBox, mo.femaleChkBox, mo.unknownChkBox, mo.applyBtn, mo.chkAll, gender);
    //await ga.ageFilter(mo.chooseAge, mo.search2, mo.chkBox, mo.applyBtn, mo.chkAll1, age);
    yield protractor_1.browser.sleep(5000);
    yield sp.lookForElement(mo.totEnrolment, 'Total Enrolments in this date range is - ', 'Total Enrolments in this date range is missing');
    yield sp.lookForElement(mo.enrolmentWithOptOut, 'Total Enrolments with optout rights in this date range is - ', 'Total Enrolments with optout rights in this date range is missing');
    yield sp.lookForElement(mo.noOfOptOut, 'Number of opt out is - ', 'No. of members are missing');
    yield sp.lookForElement(mo.optOutWithCont, 'Number of opt outs with a recieved contribution is - ', 'Number of opt outs with a recieved contribution is missing');
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[48]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield mo.brekdownBtn2.click();
    yield protractor_1.browser.switchTo().defaultContent();
    yield sp.lookForElement(mo.empRegular, 'Employee Regular is - ', 'Employee Regular is missing');
    yield sp.lookForElement(mo.empSingle, 'Employee Single is - ', 'Employee Single is missing');
    yield sp.lookForElement(mo.employerRegular, 'Employer Regular is - ', 'Employer Regular is missing');
    yield sp.lookForElement(mo.employerSingle, 'Employer Single is - ', 'Employer Single is missing');
    yield sp.lookForElement(mo.avgAge, 'Average age of members opting out is - ', 'Average age of members opting out is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 3, 3, mo.avgAge, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mo.female, 'Female members opting out is - ', 'Female members opting out is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 4, 3, mo.female, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mo.male, 'Male members opting out is - ', 'Male members opting out is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, mo.male, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.graph(mo.map, 'Opts outs by postcode map is visible', 'Opts outs by postcode map is not visible');
    yield sp.graph(mo.optOutByChannelGender, 'Opts outs by channel and gender graph is visible', 'Opts outs by channel and gender graph is not visible');
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
    yield protractor_1.browser.sleep(3000);
    yield sp.graph(mo.optOutByAgeGender, 'Opts outs by age and gender graph is visible', 'Opts outs by age and gender graph is not visible');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyT3B0T3V0U3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvbWVtYmVyT3B0T3V0U3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUg7QUFDckgsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUN2RCxzREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLGdEQUFtRDtBQUNuRCxrRUFBNkQ7QUFDN0Qsd0RBQXFEO0FBQ3JELHNFQUE4RDtBQUM5RCxrRUFBa0U7QUFHbEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQ0FBaUIsRUFBRSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksNkJBQVksRUFBRSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFFMUIsSUFBSSxJQUFJLEdBQUcscUVBQXFFLENBQUM7QUFHakYsSUFBQSxlQUFJLEVBQUMsMkNBQTJDLEVBQUUsR0FBUyxFQUFFO0lBRTNELDhDQUE4QztJQUM5QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVoQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxD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