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
exports.excelReadAndWrite = void 0;
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
const chai_1 = __importDefault(require("chai"));
var Excel = require('exceljs');
let expect = chai_1.default.expect;
class excelReadAndWrite {
    excelReadOperation() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.manage().timeouts().implicitlyWait(30000);
            // create object for workbook
            var wb = new exceljs_1.Workbook();
            // read xlsx file type
            wb.xlsx.readFile("../testFile.xlsx").then(function () {
                //sheet object
                let sheet = wb.getWorksheet("Sheet1");
                let totalRowsIncludingEmptyRows = sheet.rowCount;
                console.log("total nuumber of rows : " + totalRowsIncludingEmptyRows);
                // loop till end of row
                for (let i = 1; i <= totalRowsIncludingEmptyRows; i++) {
                    let cellValue = sheet.getRow(i).getCell(2).toString();
                    console.log("Column B value from the row '" + i + "' : " + cellValue);
                }
            });
        });
    }
    excelWriteOperation(excelFilePath, i, j, elem1, schemeId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem1), 30000);
            yield elem1.getText().then(function (text) {
                expect(text).to.equal(text);
                // create object for workbook
                var wb = new exceljs_1.Workbook();
                // read xlsx file type
                wb.xlsx.readFile(excelFilePath).then(() => __awaiter(this, void 0, void 0, function* () {
                    let myhash = {
                        "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN": "Sheet1",
                        "GF06865001 - YOUR M & S PENSION SAVING PLAN": "Sheet2",
                        "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
                        "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)": "Sheet4",
                        "GF43184001 - SERCO": "Sheet5",
                        "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN": "Sheet6",
                        "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN": "Sheet7",
                        "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN": "Sheet8",
                        "GF75755001 - SAINSBURY'S SIPP": "Sheet9",
                        "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION": "Sheet10",
                        "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS": "Sheet11",
                        "GF34865001 - PACE DC - CO-OP SECTION AVCS": "Sheet12",
                        "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)": "Sheet13",
                        "GF63965001 - BARCLAYS PENSION SAVINGS PLAN": "Sheet14",
                        "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN": "Sheet15",
                        "GF72027001 - KINGFISHER PENSION SCHEME": "Sheet16",
                        "GF83965001 - SAINSBURY'S PENSION SCHEME AVC": "Sheet17",
                        "GF90637001 - SERCO WORKSAVE PENSION PLAN": "Sheet18",
                        "GF06965001 - ARGOS PERSONAL PENSION PLAN": "Sheet19",
                        "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION": "Sheet20",
                        "GF27865001 - THE M&S AVC SCHEME": "Sheet21",
                        "GF42075001 - IKEA RETIREMENT INCOME SCHEME": "Sheet22",
                        "GF54037001 - FLEXIBLE RETIREMENT PLAN": "Sheet23",
                        "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN": "Sheet24",
                        "GF71095001 - GREGGS PENSION SCHEME": "Sheet25",
                        "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN": "Sheet26",
                        "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN": "Sheet27",
                        "GF24865001 - PACE DC - CO-OP SECTION": "Sheet28",
                        "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
                        "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
                        "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
                        "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
                        "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
                        "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
                        "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
                        "GF61865001 - YOUR SODEXO RETIREMENT PLAN": "Sheet36",
                    };
                    //sheet object
                    let sheet = wb.getWorksheet(myhash[schemeId]);
                    console.log(myhash[schemeId]);
                    // write to excel sheet
                    sheet.getRow(i).getCell(j).value = parseFloat(text.replace(',', ''));
                    wb.xlsx.writeFile(excelFilePath);
                    protractor_1.browser.sleep(3000);
                    console.log(parseFloat(text.replace(',', '')) + " has been written in excel file");
                }));
            });
        });
    }
    excelWriteOperationString(excelFilePath, i, j, elem1, schemeId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem1), 30000);
            yield elem1.getText().then(function (text) {
                expect(text).to.equal(text);
                // create object for workbook
                var wb = new exceljs_1.Workbook();
                // read xlsx file type
                wb.xlsx.readFile(excelFilePath).then(() => __awaiter(this, void 0, void 0, function* () {
                    let myhash = {
                        "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN": "Sheet1",
                        "GF06865001 - YOUR M & S PENSION SAVING PLAN": "Sheet2",
                        "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
                        "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)": "Sheet4",
                        "GF43184001 - SERCO": "Sheet5",
                        "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN": "Sheet6",
                        "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN": "Sheet7",
                        "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN": "Sheet8",
                        "GF75755001 - SAINSBURY'S SIPP": "Sheet9",
                        "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION": "Sheet10",
                        "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS": "Sheet11",
                        "GF34865001 - PACE DC - CO-OP SECTION AVCS": "Sheet12",
                        "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)": "Sheet13",
                        "GF63965001 - BARCLAYS PENSION SAVINGS PLAN": "Sheet14",
                        "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN": "Sheet15",
                        "GF72027001 - KINGFISHER PENSION SCHEME": "Sheet16",
                        "GF83965001 - SAINSBURY'S PENSION SCHEME AVC": "Sheet17",
                        "GF90637001 - SERCO WORKSAVE PENSION PLAN": "Sheet18",
                        "GF06965001 - ARGOS PERSONAL PENSION PLAN": "Sheet19",
                        "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION": "Sheet20",
                        "GF27865001 - THE M&S AVC SCHEME": "Sheet21",
                        "GF42075001 - IKEA RETIREMENT INCOME SCHEME": "Sheet22",
                        "GF54037001 - FLEXIBLE RETIREMENT PLAN": "Sheet23",
                        "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN": "Sheet24",
                        "GF71095001 - GREGGS PENSION SCHEME": "Sheet25",
                        "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN": "Sheet26",
                        "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN": "Sheet27",
                        "GF24865001 - PACE DC - CO-OP SECTION": "Sheet28",
                        "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
                        "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
                        "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
                        "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
                        "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
                        "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
                        "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
                        "GF61865001 - YOUR SODEXO RETIREMENT PLAN": "Sheet36",
                    };
                    //sheet object
                    //var worksheet = wb.addWorksheet(myhash[schemeId]);
                    let sheet = wb.getWorksheet(myhash[schemeId]);
                    console.log(myhash[schemeId]);
                    // write to excel sheet
                    sheet.getRow(i).getCell(j).value = text;
                    wb.xlsx.writeFile(excelFilePath);
                    protractor_1.browser.sleep(3000);
                    console.log(text + " has been written in excel file");
                }));
            });
        });
    }
    excelWriteOperation1(excelFilePath, i, j, elem1, schemeId) {
        return __awaiter(this, void 0, void 0, function* () {
            //await browser.wait(ExpectedConditions.presenceOf(elem1), 30000);
            yield elem1.getText().then(function (text) {
                expect(text).to.equal(text);
                // create object for workbook
                var wb = new exceljs_1.Workbook();
                // read xlsx file type
                wb.xlsx.readFile(excelFilePath).then(() => __awaiter(this, void 0, void 0, function* () {
                    let myhash = {
                        "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN": "Sheet1",
                        "GF06865001 - YOUR M & S PENSION SAVING PLAN": "Sheet2",
                        "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
                        "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)": "Sheet4",
                        "GF43184001 - SERCO": "Sheet5",
                        "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN": "Sheet6",
                        "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN": "Sheet7",
                        "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN": "Sheet8",
                        "GF75755001 - SAINSBURY'S SIPP": "Sheet9",
                        "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION": "Sheet10",
                        "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS": "Sheet11",
                        "GF34865001 - PACE DC - CO-OP SECTION AVCS": "Sheet12",
                        "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)": "Sheet13",
                        "GF63965001 - BARCLAYS PENSION SAVINGS PLAN": "Sheet14",
                        "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN": "Sheet15",
                        "GF72027001 - KINGFISHER PENSION SCHEME": "Sheet16",
                        "GF83965001 - SAINSBURY'S PENSION SCHEME AVC": "Sheet17",
                        "GF90637001 - SERCO WORKSAVE PENSION PLAN": "Sheet18",
                        "GF06965001 - ARGOS PERSONAL PENSION PLAN": "Sheet19",
                        "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION": "Sheet20",
                        "GF27865001 - THE M&S AVC SCHEME": "Sheet21",
                        "GF42075001 - IKEA RETIREMENT INCOME SCHEME": "Sheet22",
                        "GF54037001 - FLEXIBLE RETIREMENT PLAN": "Sheet23",
                        "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN": "Sheet24",
                        "GF71095001 - GREGGS PENSION SCHEME": "Sheet25",
                        "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN": "Sheet26",
                        "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN ": "Sheet27",
                        "GF24865001 - PACE DC - CO-OP SECTION": "Sheet28",
                        "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
                        "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
                        "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
                        "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
                        "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
                        "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
                        "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
                        "GF61865001 - YOUR SODEXO RETIREMENT PLAN": "Sheet36",
                    };
                    //sheet object
                    //var worksheet = wb.addWorksheet(myhash[schemeId]);
                    let sheet = wb.getWorksheet(myhash[schemeId]);
                    console.log(myhash[schemeId]);
                    // write to excel sheet
                    sheet.getRow(i).getCell(j).value = text;
                    wb.xlsx.writeFile(excelFilePath);
                    protractor_1.browser.sleep(3000);
                    console.log(text + " has been written in excel file");
                }));
            });
        });
    }
}
exports.excelReadAndWrite = excelReadAndWrite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFdyaXRlRXhjZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZU9iamVjdHMvcmVhZFdyaXRlRXhjZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1IO0FBRW5ILHFDQUFvRTtBQUNwRSxnREFBd0I7QUFFeEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsTUFBYSxpQkFBaUI7SUFHdEIsa0JBQWtCOztZQUN0QixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRCw2QkFBNkI7WUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUM7WUFDeEIsc0JBQXNCO1lBQ3RCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QyxjQUFjO2dCQUNkLElBQUksS0FBSyxHQUFjLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWpELElBQUksMkJBQTJCLEdBQVcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtnQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRywyQkFBMkIsQ0FBQyxDQUFBO2dCQUNyRSx1QkFBdUI7Z0JBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSwyQkFBMkIsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdB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