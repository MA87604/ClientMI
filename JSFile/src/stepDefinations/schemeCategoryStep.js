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
const chai_1 = __importDefault(require("chai"));
const schemeCategoryPO_1 = require("../pageObjects/schemeCategoryPO");
//import * as schemeData from '../testData/scheme.json';
//import * as data1 from '../testData/scheme.ts'
const genderAge_1 = require("../pageObjects/genderAge");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
//let data = require('../testData/dataTest.json');
//let schemeData = require("../testData/scheme");
//Products: (schemeData as any).default;
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let ga = new genderAge_1.genderAge();
let sc = new schemeCategoryPO_1.schemeCategory();
let sp = new schemePO_1.schemePage();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
//let alert = new Alert();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\schemeCategory.xlsx";
(0, cucumber_1.When)('user navigates to Scheme Category Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    //browser.manage().window().setSize(900, 720);
    yield protractor_1.browser.sleep(2000);
    yield sp.countOfSchemeLink.click();
    yield protractor_1.browser.sleep(10000);
}));
(0, cucumber_1.Then)('user able to view the Scheme Category Overview fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(sc.username, sc.dataAsOf, sc.logo);
}));
(0, cucumber_1.Then)('user able to view {string} Scheme Category Overview filter {string}', (scheme, string) => __awaiter(void 0, void 0, void 0, function* () {
    //await sp.schemeFilter(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);
    yield protractor_1.browser.waitForAngularEnabled(true);
    yield protractor_1.browser.sleep(5000);
    yield bf.tableData(sc.table1Header);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 3, 3, sc.table1Header, scheme);
    yield protractor_1.browser.sleep(2000);
    yield bf.tableData(sc.row1);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 4, 3, sc.row1, scheme);
    yield protractor_1.browser.sleep(2000);
    yield bf.tableData(sc.table2Header);
    yield bf.tableData(sc.row2);
    yield bf.tableData(sc.table3Header);
    //****************new steps to capture individual cell values
    yield protractor_1.browser.executeScript("arguments[0].click();", sc.expandIcon);
    yield protractor_1.browser.sleep(3000);
    yield sp.lookForElement(sc.sodexomonthlyPaidCount, 'Sodexo Ltd Monthly Paid - Count of policies is - ', 'Sodexo Ltd Monthly Paid - Count of policies is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, sc.sodexomonthlyPaidCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sc.sodexoAEWeeklyPaidCount, 'Sodexo Ltd AE Weekly Paid - Count Of Policies is  - ', 'Sodexo Ltd AE Weekly Paid - Count of policies is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 6, 3, sc.sodexoAEWeeklyPaidCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(sc.sodexoAEmonthlyPaidCount, 'Sodexo Ltd AE Monthly Paid - Count of policies is - ', 'Sodexo Ltd AE Monthly Paid - Count of policies is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 7, 3, sc.sodexoAEmonthlyPaidCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.sodexoMotivationSolutionsCount);
    yield sp.lookForElement(sc.sodexoMotivationSolutionsCount, 'Sodexo Motivation Solutions UK Ltd is - ', 'Sodexo Motivation Solutions UK Ltd is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 8, 3, sc.sodexoMotivationSolutionsCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.sodexoGlobalServicesCount);
    yield sp.lookForElement(sc.sodexoGlobalServicesCount, 'Sodexo Global Services Ltd - ', 'Sodexo Global Services Ltd is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 9, 3, sc.sodexoGlobalServicesCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.tvfWeeklyPaidCount);
    yield sp.lookForElement(sc.tvfWeeklyPaidCount, 'TVF Weekly Paid is - ', 'TVF Weekly Paid is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 10, 3, sc.tvfWeeklyPaidCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.sportsTravelHospitalityGroupCount);
    yield sp.lookForElement(sc.sportsTravelHospitalityGroupCount, 'Sports Travel & Hospitality Group Ltd is - ', 'Sports Travel & Hospitality Group Ltd is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 11, 3, sc.sportsTravelHospitalityGroupCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.sodexo4WeeklyPaidCount);
    yield sp.lookForElement(sc.sodexo4WeeklyPaidCount, 'Sodexo Ltd - Four Weekly Paid - ', 'Sodexo Ltd - Four Weekly Paid is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 12, 3, sc.sodexo4WeeklyPaidCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.sodexoTravelCount);
    yield sp.lookForElement(sc.sodexoTravelCount, 'Sodexo Travel- Count of policies is - ', 'Sodexo Travel- Count of policies is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 13, 3, sc.sodexoTravelCount, scheme);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", sc.tvf4WeeklyTempCount);
    yield sp.lookForElement(sc.tvf4WeeklyTempCount, 'TVF Four weekly Temporary- Count of policies is - ', 'TVF Four weekly Temporary - Count of policies is not present');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 14, 3, sc.tvf4WeeklyTempCount, scheme);
    yield protractor_1.browser.sleep(2000);
    /**************************/
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lQ2F0ZWdvcnlTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXBEZWZpbmF0aW9ucy9zY2hlbWVDYXRlZ29yeVN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQXdJO0FBQ3hJLHNEQUFxRDtBQUNyRCxnREFBd0I7QUFDeEIsc0VBQWlFO0FBQ2pFLHdEQUF3RDtBQUN4RCxnREFBZ0Q7QUFDaEQsd0RBQXFEO0FBQ3JELHNFQUE4RDtBQUM5RCxrRUFBa0U7QUFLbEUsa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFFeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQ0FBaUIsRUFBRSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWMsRUFBRSxDQUFDO0FBQzlCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFDMUIsSUFBSSxJQUFJLEdBQUcsdUVBQXVFLENBQUM7QUFHbkYsSUFBQSxlQUFJLEVBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO0lBRTVELDhDQUE4QztJQUM5QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBRW5DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLElB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