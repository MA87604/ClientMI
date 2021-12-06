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
let path = "C:\\Automation\\ClientMI - Copy\\data\\memberOptOut.xlsx";
(0, cucumber_1.When)('user navigates to Member Opt Out Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyT3B0T3V0U3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvbWVtYmVyT3B0T3V0U3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUg7QUFDckgsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUN2RCxzREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLGdEQUFtRDtBQUNuRCxrRUFBNkQ7QUFDN0Qsd0RBQXFEO0FBQ3JELHNFQUE4RDtBQUM5RCxrRUFBa0U7QUFHbEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQ0FBaUIsRUFBRSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksNkJBQVksRUFBRSxDQUFDO0FBQzVCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFFMUIsSUFBSSxJQUFJLEdBQUcsMERBQTBELENBQUM7QUFHdEUsSUFBQSxlQUFJLEVBQUMsMkNBQTJDLEVBQUUsR0FBUyxFQUFFO0lBRTNELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWhDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFD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