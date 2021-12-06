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
const retirementPO_1 = require("../pageObjects/retirementPO");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
const landingPO_1 = require("../pageObjects/landingPO");
const ptor_1 = require("protractor/built/ptor");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let dp = new landingPO_1.landingPage();
let ro = new retirementPO_1.retirementOverview();
let sp = new schemePO_1.schemePage();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
let path = "C:\\Automation\\ClientMI - Copy\\data\\retirement.xlsx";
(0, cucumber_1.When)('user navigates to Retirement Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield sp.upcomingrRetirementLink.click();
    yield protractor_1.browser.sleep(10000);
}));
(0, cucumber_1.Then)('user able to view the Retirement Overview fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(ro.username, ro.dataAsOf, ro.logo);
}));
(0, cucumber_1.Then)('user able to view Retirement Overview filter {string} for {string}', (scheme, schemeId) => __awaiter(void 0, void 0, void 0, function* () {
    //await sp.schemeFilter(ro.schemeCategory, ro.search, ro.radioBtn, ro.minMaxBtn, scheme);
    yield protractor_1.browser.sleep(7000);
    yield sp.lookForElement(ro.currentYear, 'current Year is - ', 'Current year is missing');
    yield sp.lookForElement(ro.currentYearRet, 'Forthcoming retirement in current year are - ', 'Forthcoming retirement in current year is not unavailable');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 3, 3, ro.currentYearRet, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.forthRetirement(ro.year2, ro.retirement2, 'Forthcoming retirement is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 4, 3, ro.retirement2, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.forthRetirement(ro.year3, ro.retirement3, 'Forthcoming retirement is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 5, 3, ro.retirement3, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.forthRetirement(ro.year4, ro.retirement4, 'Forthcoming retirement is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 6, 3, ro.retirement4, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.forthRetirement(ro.year5, ro.retirement5, 'Forthcoming retirement is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 7, 3, ro.retirement5, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield dp.browseCollection.click();
    yield ro.retirementAnalysis.click();
    yield protractor_1.browser.sleep(6000);
    yield sp.lookForElement(ro.totMember, 'Total Members - ', 'Total Memebers are missing');
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation(path, 8, 3, ro.totMember, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(ro.upcomingRetirementInDateRange, 'Upcoming retirements in date range are- ', 'Upcoming retirements in date range are missing');
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation(path, 9, 3, ro.upcomingRetirementInDateRange, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(ro.upcomingRetirementActive, 'Upcoming retirements active are- ', 'Upcoming retirements active are missing');
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation(path, 10, 3, ro.upcomingRetirementActive, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(ro.upcomingRetirementDeferred, 'Upcoming retirements deferred are- ', 'Upcoming retirements deferred are missing');
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation(path, 11, 3, ro.upcomingRetirementDeferred, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield ro.upcomingRetirementDeferred.click();
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
    yield protractor_1.browser.sleep(2000);
    yield sp.tableData(ro.table1Header, ro.row1);
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation1(path, 12, 3, ro.table1Header, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 13, 3, ro.row1, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 14, 3, ro.summaryText, schemeId);
    yield protractor_1.browser.sleep(2000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0aXJlbWVudFN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL3JldGlyZW1lbnRTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxSDtBQUNySCxzREFBcUQ7QUFDckQsZ0RBQXdCO0FBQ3hCLDhEQUFpRTtBQUVqRSxzRUFBOEQ7QUFDOUQsa0VBQWtFO0FBQ2xFLHdEQUF1RDtBQUN2RCxnREFBbUQ7QUFHbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQ0FBaUIsRUFBRSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWtCLEVBQUUsQ0FBQztBQUNsQyxJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsd0RBQXdELENBQUM7QUFHcEUsSUFBQSxlQUFJLEVBQUMsdUNBQXVDLEVBQUUsR0FBUyxFQUFFO0lBRXZELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFekMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsOERBQThELEVBQUUsR0FBUyxFQUFFO0lBRTlFLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJ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