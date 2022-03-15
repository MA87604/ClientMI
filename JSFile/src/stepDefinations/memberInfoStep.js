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
const genderAge_1 = require("../pageObjects/genderAge");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let ga = new genderAge_1.genderAge();
let mi = new memInfoPO_1.memInfo();
let sp = new schemePO_1.schemePage();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
let path = "C:\\Automation\\ClientMI\\data\\memberInformation.xlsx";
(0, cucumber_1.When)('user navigates to Member Information Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.sleep(5000);
    yield sp.memberTodayLink.click();
    yield protractor_1.browser.sleep(20000);
}));
(0, cucumber_1.Then)('user able to view the Member Information fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(mi.username, mi.dataAsOf, mi.logo);
}));
(0, cucumber_1.Then)('user able to view {string} Member Information Overview filter {string}, {string} and {string}', (schemeId, gender, ageband, age) => __awaiter(void 0, void 0, void 0, function* () {
    //await sp.schemeFilter(mi.schemeCategory, mi.search, mi.radioBtn, mi.minMaxBtn, scheme);
    yield ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1, mi.radioBtn2, mi.minMaxBtn1, gender);
    yield ga.ageFilter(mi.ageBand, mi.search2, mi.chkBox, mi.applyBtn, mi.chkAll, ageband);
    //await ga.ageFilter(mi.age, mi.search3, mi.chkBox2, mi.applyBtn, mi.chkAll, age);
    yield protractor_1.browser.sleep(5000);
    yield sp.lookForElement(mi.noOfMem, 'No. of members are - ', 'No. of members are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 3, 3, mi.noOfMem, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.regUsersOnline, 'Registered users online are - ', 'Registered users online are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 4, 3, mi.regUsersOnline, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.avgFund, 'Avg fund value by member are - ', 'Avg fund value by member are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, mi.avgFund, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.avgPayroll, 'Avg Payroll contribution are - ', 'Avg Payroll contribution are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 6, 3, mi.avgPayroll, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.avgMemAge, 'Average member age is - ', 'Average member age are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 7, 3, mi.avgMemAge, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.female, 'No. of female members are - ', 'No. of female members are  missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 8, 3, mi.female, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.male, 'No. of male members are - ', 'No. of male members are missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 9, 3, mi.male, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(mi.avgFemaleAge, 'Avg Female member age is - ', 'Avg Female member age is missing');
    yield sp.lookForElement(mi.avgMaleAge, 'Average male member age is - ', 'Average male member age is missing');
    /*await sp.lookForElement(sp.map, 'Map to show no. of members by postcode is visible', 'Map to show no. of members by postcode is missing');
   
    await sp.lookForElement(mi.memPolicyStartDt, 'Member by policy scheme start date graph is visible', 'Member by policy scheme start date graph is missing');
  
    await mi.memAgeGender.click();
  
    await browser.actions().sendKeys(protractor.Key.END).perform();
  
    await browser.sleep(3000);
  
    await sp.lookForElement(mi.memAgeGender, 'Member by Age and Gender graph is visible', 'Member by Age and Gender graph is not visible');
  
    await sp.lookForElement(mi.avgFundByGenderAge, 'Average fund value by age and gender graph is visible', 'Average fund value by age and gender graph is missing');
  
    await sp.lookForElement(mi.memByAgeActiveDeferred, 'Member by age and active or deferred graph is visible', 'Member by age and active or deferred graph is missing');
  
  */ //await browser.sleep(5000);
    yield dp.browseCollection.click();
    yield mi.memberInfoDetailReport.click();
    yield protractor_1.browser.sleep(8000);
    yield sp.tableData(mi.table1Header, mi.row1);
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation1(path, 10, 3, mi.table1Header, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 11, 3, mi.row1, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 12, 3, mi.summaryText, schemeId);
    yield protractor_1.browser.sleep(2000);
    //await sp.filterMethod(mi.schemeCategory, mi.search, mi.radioBtn, mi.minMaxBtn, "The Legal");
    //await ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1,mi.radioBtn2, mi.minMaxBtn1, 'Male');
    //await ga.ageFilter(mi.ageBand, mi.search2, mi.chkBox, mi.applyBtn, '40');
    //await ga.ageFilter(mi.age, mi.search3, mi.chkBox2, mi.applyBtn, '40');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVySW5mb1N0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL21lbWJlckluZm9TdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxSDtBQUNySCxzREFBcUQ7QUFDckQsd0RBQXVEO0FBQ3ZELHNEQUF1RDtBQUN2RCxnREFBd0I7QUFNeEIsd0RBQW1EO0FBQ25ELHdEQUFxRDtBQUNyRCxzRUFBOEQ7QUFDOUQsa0VBQWtFO0FBR2xFLElBQUksS0FBSyxHQUFHLElBQUksa0NBQWlCLEVBQUUsQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxJQUFJLDhCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLG1CQUFPLEVBQUUsQ0FBQztBQUN2QixJQUFJLEVBQUUsR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFZLEVBQUUsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxJQUFJLEdBQUcsd0RBQXdELENBQUM7QUFHcEUsSUFBQSxlQUFJLEVBQUMsK0NBQStDLEVBQUUsR0FBUyxFQUFFO0lBQy9ELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVqQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTdCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixJQUFBLGVBQUksRUFBQyw2REFBNkQsRUFBRSxHQUFTLEVBQUU7SUFFN0UsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTNDLE1BQU0sRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFckUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLElBQUEsZUFBSSxFQUFDLCtGQUErRixFQUFFLENBQU8sUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFHN0kseUZBQXlGO0lBRXpGLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFeEcsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUV2RixrRkFBa0Y7SUFFbEYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLGdDQUFnQyxFQUFFLHFDQUFxQyxDQUFDLENBQUM7SUFDcEgsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztJQUMvRyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxpQ0FBaUMsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ2xILE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLDBCQUEwQixFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztJQUN6RyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSw0QkFBNEIsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ2xHLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLDZCQUE2QixFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFFNUcsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsK0JBQStCLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztJQUU5Rzs7Ozs7Ozs7Ozs7Ozs7OztJQWdCQSxDQUFBLDRCQUE0QjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVsQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBSTFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4RSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBUTFCLDhGQUE4RjtJQUU5Rix5R0FBeUc7SUFFekcsMkVBQTJFO0lBQzNFLHdFQUF3RTtBQUN4RSxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=