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
const serviceAgreementPO_1 = require("../pageObjects/serviceAgreementPO");
const genderAge_1 = require("../pageObjects/genderAge");
const generalFunctions_1 = require("../pageObjects/generalFunctions");
const readWriteExcel_1 = require("../pageObjects/readWriteExcel");
let excel = new readWriteExcel_1.excelReadAndWrite();
let bf = new generalFunctions_1.basicFields();
let ga = new genderAge_1.genderAge();
let sp = new schemePO_1.schemePage();
let slp = new serviceAgreementPO_1.serviceLevelAgreementPage();
let dp = new landingPO_1.landingPage();
let space = new spacesPO_1.chooseSpaces();
let expect = chai_1.default.expect;
let should = chai_1.default.should;
//let alert = new Alert();
let path = "C:\\Automation\\ClientMI\\data\\serviceLevelAgreement.xlsx";
(0, cucumber_1.When)('user navigates to service level agreement overview', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield sp.serviceAgreementLink.click();
    yield protractor_1.browser.sleep(10000);
}));
(0, cucumber_1.Then)('user able to view the service level agreement fields in the page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield bf.basicFieldWithoutFonts(slp.username, slp.dataAsOf, slp.logo);
}));
(0, cucumber_1.Then)('user able to view {string} service level agreement filter {string}', (schemeId, options) => __awaiter(void 0, void 0, void 0, function* () {
    //await sp.schemeFilter(slp.schemeCategory, slp.search, slp.radioBtn, slp.minMaxBtn, options);
    yield sp.lookForElement(slp.serviceScore, 'Service level agreement score is - ', 'Service level agreement score is missing');
    yield sp.lookForElement(slp.noOfCalls, 'Total number of calls  - ', 'Total no of calls is missing');
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation(path, 3, 3, slp.noOfCalls, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.lookForElement(slp.callsPerMem, 'Calls per member - ', 'Call per member is missing');
    yield excel.excelWriteOperation(path, 4, 3, slp.callsPerMem, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield sp.graph(slp.piegraph, 'Service level agreement pie chart is visible', 'Service level agreement pie chart is not visible');
    yield sp.graph(slp.callgraph, 'Calls received graph is visible', 'Calls received graph is not visible');
    yield protractor_1.browser.waitForAngularEnabled(false);
    let frame1 = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    yield protractor_1.browser.switchTo().frame(frame1);
    yield slp.breakdownBtn.click();
    yield protractor_1.browser.switchTo().defaultContent();
    yield slp.breakdownGraph.isPresent().then(function (isVisible) {
        if (isVisible) {
            console.log("Calls recieved breakdown is visible");
            slp.table1Header.getText().then(function (text) {
                console.log(text);
                slp.row2.getText().then(function (text) {
                    console.log(text);
                    slp.row4.getText().then(function (text) {
                        console.log(text);
                    });
                });
            });
        }
        else {
            console.log("Calls recieved breakdown is not visible");
        }
    });
    //await excel.excelWriteOperation1(path, 10, 3, slp.table1Header, schemeId);
    //await browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 5, 3, slp.row2, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield excel.excelWriteOperation1(path, 6, 3, slp.row4, schemeId);
    yield protractor_1.browser.sleep(2000);
    yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.END).perform();
    yield sp.tableData(slp.tableHeader, slp.row1);
}));
/*await slp.tableHeader.isPresent().then(function (isVisible) {//validating group name is displayed
if (isVisible) {
    slp.tableHeader.getText().then(function (text) {
      console.log(text);
    })
  }
  else {
    console.log("SLA - Formula table is missing");
  }
})

await slp.row1.isPresent().then(function (isVisible) {//validating group name is displayed
  if (isVisible) {
    slp.row1.getText().then(function (text) {
      console.log(text);
    })
  }
  else {
    console.log("SLA - Formula table is missing");
  }
})*/
//await ga.filterMethod(slp.schemeCategory, slp.search, slp.radioBtn, slp.minMaxBtn,"the");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZUFncmVlbWVudFN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL3NlcnZpY2VBZ3JlZW1lbnRTdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDJDQUFxSDtBQUNySCxzREFBcUQ7QUFDckQsd0RBQXVEO0FBQ3ZELHNEQUF1RDtBQUN2RCxnREFBd0I7QUFDeEIsZ0RBQW1EO0FBQ25ELDBFQUE4RTtBQUM5RSx3REFBcUQ7QUFDckQsc0VBQThEO0FBQzlELGtFQUFrRTtBQUlsRSxJQUFJLEtBQUssR0FBRyxJQUFJLGtDQUFpQixFQUFFLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsSUFBSSw4QkFBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxxQkFBVSxFQUFFLENBQUM7QUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSw4Q0FBeUIsRUFBRSxDQUFBO0FBQ3pDLElBQUksRUFBRSxHQUFHLElBQUksdUJBQVcsRUFBRSxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QiwwQkFBMEI7QUFFMUIsSUFBSSxJQUFJLEdBQUcsNERBQTRELENBQUM7QUFJeEUsSUFBQSxlQUFJLEVBQUMsb0RBQW9ELEVBQUUsR0FBUyxFQUFFO0lBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsa0VBQWtFLEVBQUUsR0FBUyxFQUFFO0lBRWxGLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUzQyxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXhFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixJQUFBLGVBQUksRUFBQyxvRUFBb0UsRUFBRSxDQUFPLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUVyRyw4RkFBOEY7SUFFOUYsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUscUNBQXFDLEVBQUUsMENBQTBDLENBQUMsQ0FBQztJQUU3SCxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSwyQkFBMkIsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBQ3BHLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDOUYsTUFBTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLDhDQUE4QyxFQUFFLGtEQUFrRCxDQUFDLENBQUM7SUFFakksTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUNBQWlDLEVBQUUscUNBQXFDLENBQUMsQ0FBQztJQUd4RyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsSUFBSSxNQUFNLEdBQXNCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1JQUFtSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2TSxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFMUMsTUFBTSxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLFNBQVM7UUFDM0QsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDbkQsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7b0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtTQUNEO2FBQ0U7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLDRFQUE0RTtJQUM1RSw0QkFBNEI7SUFDNUIsTUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU1QixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRS9ELE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJO0FBRUosMkZBQTJGIn0=