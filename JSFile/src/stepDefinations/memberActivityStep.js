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
const memberActivityPO_1 = require("../pageObjects/memberActivityPO");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let ma = new memberActivityPO_1.memActivity();
let mi = new memInfoPO_1.memInfo();
let sp = new schemePO_1.schemePage();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
//let alert = new Alert();
let path = "C:\\Automation\\ClientMI - Copy\\data\\memberActivity.xlsx";
(0, cucumber_1.When)('user navigates to Member Activity Overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield sp.netMovementLink.click();
    yield protractor_1.browser.sleep(10000);
}));
(0, cucumber_1.Then)('user able to view the Member Activity fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(ma.username, ma.dataAsOf, ma.logo);
    yield ma.tile.getText().then(function (text) {
        console.log("Tile name is - " + text);
    });
    yield ma.groupName.getText().then(function (text) {
        console.log("Group name is - " + text);
    });
}));
(0, cucumber_1.Then)('user able to view {string} Member Activity filter {string}', (schemeId, string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    //await sp.schemeFilter(ma.schemeCategory, ma.search, ma.radioBtn, ma.minMaxBtn, string);
    //await browser.sleep(5000);
    yield sp.lookForElement(ma.memNetMovement, 'Member net movement is - ', 'Member net movement is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 3, 3, ma.memNetMovement, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(ma.totCont, 'Total Contributions is - ', 'Total Contributions is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 4, 3, ma.totCont, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(ma.totPaymentOut, 'Total payment out is - ', 'Total payment out is  missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperationString(path, 5, 3, ma.totPaymentOut, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.tableData(ma.tableHeader, ma.row);
    yield dp.browseCollection.click();
    yield ma.memberActivityAnalysis.click();
    yield protractor_1.browser.sleep(5000);
    yield sp.lookForElement(ma.memberStartDate, 'Members at start date - ', 'Members at start date is missing');
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation(path, 6, 3, ma.memberStartDate, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(ma.memberEndDate, 'Members at end date - ', 'Members at end date is missing');
    yield protractor_1.browser.sleep(3000);
    yield excel.excelWriteOperation(path, 7, 3, ma.memberEndDate, schemeId);
    yield protractor_1.browser.sleep(2000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyQWN0aXZpdHlTdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0ZXBEZWZpbmF0aW9ucy9tZW1iZXJBY3Rpdml0eVN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQXFIO0FBQ3JILHNEQUFxRDtBQUNyRCx3REFBdUQ7QUFDdkQsc0RBQXVEO0FBQ3ZELGdEQUF3QjtBQU14Qix3REFBbUQ7QUFDbkQsc0VBQThEO0FBQzlELHNFQUE4RDtBQUM5RCxrRUFBa0U7QUFHbEUsSUFBSSxLQUFLLEdBQUcsSUFBSSxrQ0FBaUIsRUFBRSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksOEJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksbUJBQU8sRUFBRSxDQUFDO0FBQ3ZCLElBQUksRUFBRSxHQUFHLElBQUkscUJBQVUsRUFBRSxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFDMUIsSUFBSSxJQUFJLEdBQUcsNERBQTRELENBQUM7QUFFeEUsSUFBQSxlQUFJLEVBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO0lBRzVELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWpDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFF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