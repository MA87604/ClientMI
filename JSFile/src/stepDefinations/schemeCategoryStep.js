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
let path = "C:\\Automation\\ClientMI - Copy\\data\\schemeCategory.xlsx";
(0, cucumber_1.When)('user navigates to Scheme Category Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
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
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lQ2F0ZWdvcnlTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXBEZWZpbmF0aW9ucy9zY2hlbWVDYXRlZ29yeVN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQXdJO0FBQ3hJLHNEQUFxRDtBQUNyRCxnREFBd0I7QUFDeEIsc0VBQWlFO0FBQ2pFLHdEQUF3RDtBQUN4RCxnREFBZ0Q7QUFDaEQsd0RBQXFEO0FBQ3JELHNFQUE4RDtBQUM5RCxrRUFBa0U7QUFJbEUsa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFFeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQ0FBaUIsRUFBRSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWMsRUFBRSxDQUFDO0FBQzlCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFDMUIsSUFBSSxJQUFJLEdBQUcsNERBQTRELENBQUM7QUFHeEUsSUFBQSxlQUFJLEVBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO0lBRTVELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbkMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBR0YsSUFBQSxlQUFJLEVBQUMsbUVBQW1FLEVBQUUsR0FBUyxFQUFFO0lBRW5GLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXJFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixJQUFBLGVBQUksRUFBQyxxRUFBcUUsRUFBRSxDQUFPLE1BQU0sRUFBQyxNQUFNLEVBQUUsRUFBRTtJQUVsRyw0RkFBNEY7SUFFNUYsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFcEMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXBDLENBQUMsQ0FBQSxDQUNGLENBQUEifQ==