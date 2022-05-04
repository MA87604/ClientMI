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
const memInfoPO_1 = require("../pageObjects/memInfoPO");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const contributionPO_1 = require("../pageObjects/contributionPO");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let cont = new contributionPO_1.Contribution();
let mi = new memInfoPO_1.memInfo();
let sp = new schemePO_1.schemePage();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
//let alert = new Alert();
let path = "C:\\Dev\\ClientMI_WorkSpace\\ClientMI-main\\data\\contributions.xlsx";
const date = new Date();
(0, cucumber_1.When)('user navigates to Contribution Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    //browser.manage().window().setSize(900, 720);
    yield protractor_1.browser.sleep(2000);
    yield sp.memberContributionLink.click();
    yield protractor_1.browser.sleep(20000);
}));
(0, cucumber_1.Then)('user able to view the basic contribution fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(cont.username, cont.dataAsOf, cont.logo);
}));
(0, cucumber_1.Then)('user able to view {string} contribution filter {string}', (scheme, string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(20000);
    //await sp.schemeFilter(cont.schemeCategory, cont.search, cont.radioBtn, cont.minMaxBtn, string);
    yield sp.lookForElement(cont.totMemCont, 'Total Member Contributions is - ', 'Total Member Contributions is missing');
    yield sp.lookForElement(cont.payroll, 'Total Payroll Contributions is - ', 'Total Payroll Contributions is missing');
    yield sp.lookForElement(cont.employerRegPayroll, 'Total Employer Regular payroll contribution is - ', 'Total Employer Regular payroll contribution is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 3, 3, cont.employerRegPayroll, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(cont.employerSingPayroll, 'Total Employer Single payroll contribution is - ', 'Total Employer Single payroll contribution is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 4, 3, cont.employerSingPayroll, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(cont.employeeRegPayroll, 'Total Employee Regular payroll contribution is - ', 'Total Employee Regular payroll contribution is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, cont.employeeRegPayroll, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(cont.employeeSingPayroll, 'Total Employee Single payroll contribution is - ', 'Total Employee Single payroll contribution is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 6, 3, cont.employeeSingPayroll, scheme);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(cont.transferAmt, 'Total transfer amount contribution is - ', 'Total transfer amount contribution is missing');
    yield sp.lookForElement(cont.pension, 'Total transfer amount contribution is - ', 'Total transfer amount contribution is missing');
    yield sp.lookForElement(cont.acv, 'Total AVC contribution is - ', 'Total AVC contribution is missing');
    yield sp.lookForElement(cont.intraScheme, 'Total Intra Scheme contribution is -', 'Total Intra Scheme contribution is missing');
    yield sp.lookForElement(cont.nonPayroll, 'Total Non Payroll contribution is - ', 'Total Non Payroll contribution is missing');
    yield sp.lookForElement(cont.employerRegNonPayroll, 'Regular Employer Non-Payroll contribution is - ', 'Regular Employer Non-Payroll contribution is  missing');
    yield sp.lookForElement(cont.employerSingNonPayroll, 'Single Employer Non-Payroll contribution is - ', 'Single Employer Non-Payroll contribution is missing');
    yield sp.lookForElement(cont.employeeRegNonPayroll, 'Regular Employee Non-Payroll contribution is - ', 'Regular Employee Non-Payroll contribution is missing');
    yield sp.lookForElement(cont.employeeSingNonPayroll, 'Single Employee Non-Payroll contribution is - ', 'Single Employee Non-Payroll contribution is missing');
    yield protractor_1.browser.sleep(3000);
    // await browser.executeScript("arguments[0].click();", cont.maxBtn);
    // await browser.wait(ExpectedConditions.visibilityOf(cont.editCurrentDate),5000);
    // await cont.editCurrentDate.click();
    // await cont.maxVal.sendKeys(date.getMonth()-1);
    // await cont.doneButton.click();
    // await browser.executeScript("arguments[0].click();", cont.minBtn);
    yield dp.browseCollection.click();
    yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", cont.contributionAnalysisLink);
    yield cont.contributionAnalysisLink.click();
    console.log("Contribution Analysis page displayed");
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(cont.payrollAnalysisValue), 10000);
    yield sp.lookForElement(cont.payrollAnalysisValue, 'Total Payroll contribution is - ', 'Total Payroll contribution is missing');
    yield cont.breakdownButton.click();
    yield sp.lookForElement(cont.employeeSingle, 'Single Employee Payroll contribution is - ', 'Single Employee Payroll contribution is missing');
    yield sp.lookForElement(cont.employeeRegular, 'Regular Employee Payroll contribution is - ', 'Regular Employee Payroll contribution is missing');
    yield sp.lookForElement(cont.employerSingle, 'Single Employer Payroll contribution is - ', 'Single Employer Payroll contribution is missing');
    yield sp.lookForElement(cont.employerRegular, 'Single Employer Payroll contribution is - ', 'Single Employer Payroll contribution is missing');
    /*  await cont.contDetailReport.click();
    
      await browser.sleep(5000);
      await sp.tableData(cont.table1Header, cont.row1);
      
      await browser.sleep(2000);
    
      await excel.excelWriteOperation1(path, 7, 3, cont.table1Header, scheme);
      await browser.sleep(2000);
      await excel.excelWriteOperation1(path, 8, 3, cont.row1, scheme);
      await browser.sleep(2000);*/
}));
//await sp.filterMethod(ma.schemeCategory1, ma.search1, ma.radioBtn1, ma.minMaxBtn1, string);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJpYnV0aW9uU3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvY29udHJpYnV0aW9uU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUF1RDtBQUN2RCwyQ0FBcUg7QUFDckgsc0RBQXFEO0FBQ3JELHdEQUF1RDtBQUN2RCxzREFBdUQ7QUFDdkQsZ0RBQXdCO0FBQ3hCLHdEQUFtRDtBQUNuRCxzRUFBOEQ7QUFDOUQsa0VBQTZEO0FBQzdELGtFQUFrRTtBQUdsRSxJQUFJLEtBQUssR0FBRyxJQUFJLGtDQUFpQixFQUFFLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSw4QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSw2QkFBWSxFQUFFLENBQUM7QUFDOUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxtQkFBTyxFQUFFLENBQUM7QUFDdkIsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxFQUFFLEdBQUcsSUFBSSx1QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLDBCQUEwQjtBQUMxQixJQUFJLElBQUksR0FBRyxzRUFBc0UsQ0FBQztBQUNsRixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBS3hCLElBQUEsZUFBSSxFQUFDLHlDQUF5QyxFQUFFLEdBQVMsRUFBRTtJQUN6RCw4Q0FBOEM7SUFDOUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FB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