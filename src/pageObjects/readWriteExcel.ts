import { browser, element, by, ExpectedConditions, protractor, ElementFinder, ElementArrayFinder} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import { Workbook, Row, Cell, Worksheet, ValueType } from 'exceljs';
import chai from 'chai';

var Excel = require('exceljs');
let expect = chai.expect;


export class excelReadAndWrite {


  async excelReadOperation() {
    browser.manage().timeouts().implicitlyWait(30000);
    // create object for workbook
    var wb = new Workbook();
    // read xlsx file type
    wb.xlsx.readFile("../testFile.xlsx").then(function () {
      //sheet object
      let sheet: Worksheet = wb.getWorksheet("Sheet1");

      let totalRowsIncludingEmptyRows: number = sheet.rowCount
      console.log("total nuumber of rows : " + totalRowsIncludingEmptyRows)
      // loop till end of row
      for (let i = 1; i <= totalRowsIncludingEmptyRows; i++) {
        let cellValue = sheet.getRow(i).getCell(2).toString();
        console.log("Column B value from the row '" + i + "' : " + cellValue)
    
      }
    })
  }




  async excelWriteOperation(excelFilePath, i, j, elem1:ElementFinder,schemeId) {

    await browser.wait(ExpectedConditions.presenceOf(elem1), 30000);

    await elem1.getText().then(function (text) {

      expect(text).to.equal(text);
      // create object for workbook
      var wb = new Workbook();
      // read xlsx file type
      wb.xlsx.readFile(excelFilePath).then(async() => {
        
        let myhash = {
          "GF61865001 - YOUR SODEXO RETIREMENT PLAN": "Sheet1",
          "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN": "Sheet2",

          "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
          "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)":"Sheet4",
          "GF43184001 - SERCO":"Sheet5",
          "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN":"Sheet6",
          "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN":"Sheet7",
          "GF06865001 - YOUR M & S PENSION SAVING PLAN":"Sheet8",
          "GF75755001 - SAINSBURY'S SIPP":"Sheet9",
          "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION":"Sheet10",
          "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS":"Sheet11",
          "GF34865001 - PACE DC - CO-OP SECTION AVCS":"Sheet12",
          "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)":"Sheet13", 
          "GF63965001 - BARCLAYS PENSION SAVINGS PLAN":"Sheet14",
          "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN":"Sheet15", 
          "GF72027001 - KINGFISHER PENSION SCHEME":"Sheet16",
          "GF83965001 - SAINSBURY'S PENSION SCHEME AVC":"Sheet17", 
          "GF90637001 - SERCO WORKSAVE PENSION PLAN":"Sheet18", 
          "GF06965001 - ARGOS PERSONAL PENSION PLAN":"Sheet19",
          "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION":"Sheet20",
          "GF27865001 - THE M&S AVC SCHEME":"Sheet21",
          "GF42075001 - IKEA RETIREMENT INCOME SCHEME":"Sheet22",
          "GF54037001 - FLEXIBLE RETIREMENT PLAN":"Sheet23",
          "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN":"Sheet24",
          "GF71095001 - GREGGS PENSION SCHEME":"Sheet25",
          "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN":"Sheet26",
          "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN":"Sheet27",
          "GF24865001 - PACE DC - CO-OP SECTION":"Sheet28",
          "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
          "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",     
          "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
          "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32", 
          "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33", 
          "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
          "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
          "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN":"Sheet36",
        }
        
        //sheet object
        let sheet: Worksheet = wb.getWorksheet(myhash[schemeId]);
        console.log(myhash[schemeId]);
          
        // write to excel sheet
        sheet.getRow(i).getCell(j).value = parseFloat(text.replace(',', ''));
        wb.xlsx.writeFile(excelFilePath);
        browser.sleep(3000);
        console.log(parseFloat(text.replace(',','')) + " has been written in excel file");

        console.log("Field is displayed,\n Result is written in "+myhash[schemeId]+", Row: "+i+" of the excel sheet ");


      })
    })
  }


  async excelWriteOperation2(excelFilePath, i, j, elem1:ElementFinder,schemeId) {

    await browser.wait(ExpectedConditions.presenceOf(elem1), 30000);

    await elem1.getText().then(function (text) {

      expect(text).to.equal(text);
      // create object for workbook
      var wb = new Workbook();
      // read xlsx file type
      wb.xlsx.readFile(excelFilePath).then(async() => {

        let myhash = {
          "GF61865001 - YOUR SODEXO RETIREMENT PLAN": "Sheet1",
          "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN": "Sheet2",

          "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
          "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)":"Sheet4",
          "GF43184001 - SERCO":"Sheet5",
          "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN":"Sheet6",
          "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN":"Sheet7",
          "GF06865001 - YOUR M & S PENSION SAVING PLAN":"Sheet8",
          "GF75755001 - SAINSBURY'S SIPP":"Sheet9",
          "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION":"Sheet10",
          "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS":"Sheet11",
          "GF34865001 - PACE DC - CO-OP SECTION AVCS":"Sheet12",
          "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)":"Sheet13",
          "GF63965001 - BARCLAYS PENSION SAVINGS PLAN":"Sheet14",
          "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN":"Sheet15",
          "GF72027001 - KINGFISHER PENSION SCHEME":"Sheet16",
          "GF83965001 - SAINSBURY'S PENSION SCHEME AVC":"Sheet17",
          "GF90637001 - SERCO WORKSAVE PENSION PLAN":"Sheet18",
          "GF06965001 - ARGOS PERSONAL PENSION PLAN":"Sheet19",
          "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION":"Sheet20",
          "GF27865001 - THE M&S AVC SCHEME":"Sheet21",
          "GF42075001 - IKEA RETIREMENT INCOME SCHEME":"Sheet22",
          "GF54037001 - FLEXIBLE RETIREMENT PLAN":"Sheet23",
          "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN":"Sheet24",
          "GF71095001 - GREGGS PENSION SCHEME":"Sheet25",
          "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN":"Sheet26",
          "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN":"Sheet27",
          "GF24865001 - PACE DC - CO-OP SECTION":"Sheet28",
          "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
          "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
          "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
          "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
          "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
          "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
          "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
          "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN":"Sheet36",
        }

        //sheet object
        let sheet: Worksheet = wb.getWorksheet(myhash[schemeId]);
        console.log(myhash[schemeId]);

        // write to excel sheet
        sheet.getRow(i).getCell(j).value =text.substring(0,3)+ text.substring(5,10);
        wb.xlsx.writeFile(excelFilePath);
        browser.sleep(3000);
        console.log(text.substring(5,10) + " has been written in excel file");

        console.log("Field is displayed,\n Result is written in "+myhash[schemeId]+", Row: "+i+" of the excel sheet ");


      })
    })
  }

  async excelWriteOperationString(excelFilePath, i, j, elem1:ElementFinder,schemeId) {

    await browser.wait(ExpectedConditions.presenceOf(elem1), 30000);

    await elem1.getText().then(function (text) {

      expect(text).to.equal(text);
      // create object for workbook
      let wb = new Workbook();
      // read xlsx file type
      wb.xlsx.readFile(excelFilePath).then(async() => {
        
        let myhash = {
          "GF61865001 - YOUR SODEXO RETIREMENT PLAN":"Sheet1",
          "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN":"Sheet2",
          "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
          "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)":"Sheet4",
          "GF43184001 - SERCO":"Sheet5",
          "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN":"Sheet6",
          "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN":"Sheet7",
          "GF06865001 - YOUR M & S PENSION SAVING PLAN": "Sheet8",
          "GF75755001 - SAINSBURY'S SIPP":"Sheet9",
          "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION":"Sheet10",
          "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS":"Sheet11",
          "GF34865001 - PACE DC - CO-OP SECTION AVCS":"Sheet12",
          "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)":"Sheet13", 
          "GF63965001 - BARCLAYS PENSION SAVINGS PLAN":"Sheet14",
          "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN":"Sheet15", 
          "GF72027001 - KINGFISHER PENSION SCHEME":"Sheet16",
          "GF83965001 - SAINSBURY'S PENSION SCHEME AVC":"Sheet17", 
          "GF90637001 - SERCO WORKSAVE PENSION PLAN":"Sheet18", 
          "GF06965001 - ARGOS PERSONAL PENSION PLAN":"Sheet19",
          "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION":"Sheet20",
          "GF27865001 - THE M&S AVC SCHEME":"Sheet21",
          "GF42075001 - IKEA RETIREMENT INCOME SCHEME":"Sheet22",
          "GF54037001 - FLEXIBLE RETIREMENT PLAN":"Sheet23",
          "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN":"Sheet24",
          "GF71095001 - GREGGS PENSION SCHEME":"Sheet25",
          "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN":"Sheet26",
          "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN": "Sheet27",
          "GF24865001 - PACE DC - CO-OP SECTION":"Sheet28",
          "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
          "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",     
          "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
          "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32", 
          "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33", 
          "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
          "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
          "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN": "Sheet36"
        }
        //sheet object
        
        //var worksheet = wb.addWorksheet(myhash[schemeId]);
        let sheet: Worksheet = wb.getWorksheet(myhash[schemeId]);
        console.log(myhash[schemeId]);
          
        // write to excel sheet
        sheet.getRow(i).getCell(j).value = text;
        wb.xlsx.writeFile(excelFilePath);
        browser.sleep(3000);
        console.log(text + " has been written in excel file");
        console.log("Field is displayed,\n Result is written in "+myhash[schemeId]+", Row: "+i+" of the excel sheet ");
      })
    })
  }



  async excelWriteOperation1(excelFilePath, i, j, elem1:ElementArrayFinder,schemeId) {

    //await browser.wait(ExpectedConditions.presenceOf(elem1), 30000);

    await elem1.getText().then(function (text) {

      expect(text).to.equal(text);
      // create object for workbook
      var wb = new Workbook();
      // read xlsx file type
      wb.xlsx.readFile(excelFilePath).then(async() => {

        let myhash = {
          "GF61865001 - YOUR SODEXO RETIREMENT PLAN": "Sheet1",
          "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN": "Sheet2",

          "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
          "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)":"Sheet4",
          "GF43184001 - SERCO":"Sheet5",
          "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN":"Sheet6",
          "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN":"Sheet7",
          "GF06865001 - YOUR M & S PENSION SAVING PLAN":"Sheet8",
          "GF75755001 - SAINSBURY'S SIPP":"Sheet9",
          "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION":"Sheet10",
          "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS":"Sheet11",
          "GF34865001 - PACE DC - CO-OP SECTION AVCS":"Sheet12",
          "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)":"Sheet13",
          "GF63965001 - BARCLAYS PENSION SAVINGS PLAN":"Sheet14",
          "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN":"Sheet15",
          "GF72027001 - KINGFISHER PENSION SCHEME":"Sheet16",
          "GF83965001 - SAINSBURY'S PENSION SCHEME AVC":"Sheet17",
          "GF90637001 - SERCO WORKSAVE PENSION PLAN":"Sheet18",
          "GF06965001 - ARGOS PERSONAL PENSION PLAN":"Sheet19",
          "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION":"Sheet20",
          "GF27865001 - THE M&S AVC SCHEME":"Sheet21",
          "GF42075001 - IKEA RETIREMENT INCOME SCHEME":"Sheet22",
          "GF54037001 - FLEXIBLE RETIREMENT PLAN":"Sheet23",
          "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN":"Sheet24",
          "GF71095001 - GREGGS PENSION SCHEME":"Sheet25",
          "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN":"Sheet26",
          "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN":"Sheet27",
          "GF24865001 - PACE DC - CO-OP SECTION":"Sheet28",
          "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
          "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
          "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
          "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
          "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
          "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
          "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
          "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN":"Sheet36",
        }

        //sheet object
        
        //var worksheet = wb.addWorksheet(myhash[schemeId]);
        let sheet: Worksheet = wb.getWorksheet(myhash[schemeId]);
        console.log(myhash[schemeId]);
          
        // write to excel sheet
        sheet.getRow(i).getCell(j).value = text;
        wb.xlsx.writeFile(excelFilePath);
        browser.sleep(3000);
        console.log(text + " has been written in excel file");
        console.log("Field is displayed,\n Result is written in "+myhash[schemeId]+", Row: "+i+" of the excel sheet");
      })
    })
  }


  async excelWriteOperationText(excelFilePath, i, j, text,schemeId) {

      let wb = new Workbook();
      // read xlsx file type
      wb.xlsx.readFile(excelFilePath).then(async() => {

        let myhash = {
          "GF61865001 - YOUR SODEXO RETIREMENT PLAN":"Sheet1",
          "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN":"Sheet2",
          "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
          "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)":"Sheet4",
          "GF43184001 - SERCO":"Sheet5",
          "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN":"Sheet6",
          "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN":"Sheet7",
          "GF06865001 - YOUR M & S PENSION SAVING PLAN": "Sheet8",
          "GF75755001 - SAINSBURY'S SIPP":"Sheet9",
          "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION":"Sheet10",
          "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS":"Sheet11",
          "GF34865001 - PACE DC - CO-OP SECTION AVCS":"Sheet12",
          "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)":"Sheet13",
          "GF63965001 - BARCLAYS PENSION SAVINGS PLAN":"Sheet14",
          "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN":"Sheet15",
          "GF72027001 - KINGFISHER PENSION SCHEME":"Sheet16",
          "GF83965001 - SAINSBURY'S PENSION SCHEME AVC":"Sheet17",
          "GF90637001 - SERCO WORKSAVE PENSION PLAN":"Sheet18",
          "GF06965001 - ARGOS PERSONAL PENSION PLAN":"Sheet19",
          "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION":"Sheet20",
          "GF27865001 - THE M&S AVC SCHEME":"Sheet21",
          "GF42075001 - IKEA RETIREMENT INCOME SCHEME":"Sheet22",
          "GF54037001 - FLEXIBLE RETIREMENT PLAN":"Sheet23",
          "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN":"Sheet24",
          "GF71095001 - GREGGS PENSION SCHEME":"Sheet25",
          "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN":"Sheet26",
          "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN": "Sheet27",
          "GF24865001 - PACE DC - CO-OP SECTION":"Sheet28",
          "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
          "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
          "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
          "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
          "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
          "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
          "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
          "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN": "Sheet36"
        }
        //sheet object

        //var worksheet = wb.addWorksheet(myhash[schemeId]);
        let sheet: Worksheet = wb.getWorksheet(myhash[schemeId]);
        console.log(myhash[schemeId]);

        // write to excel sheet
        sheet.getRow(i).getCell(j).value = text;
        wb.xlsx.writeFile(excelFilePath);
        browser.sleep(3000);
        console.log("Field is displayed,\n Result is written in "+myhash[schemeId]+", Row: "+i+" of the excel sheet ");

      })

  }


  async excelWriteOperationMember(excelFilePath, i, j, text,schemeId) {

    let wb = new Workbook();
    // read xlsx file type
    wb.xlsx.readFile(excelFilePath).then(async() => {

      let myhash = {
        "GF61865001 - YOUR SODEXO RETIREMENT PLAN":"Sheet1",
        "GF71965001 - SAINSBURY'S RETIREMENT SAVINGS PLAN":"Sheet2",
        "GF10606001 - THE TESCO RETIREMENT SAVINGS PLAN": "Sheet3",
        "GF32307001 - RBS GROUP RETIREMENT SAVINGS PLAN (GIB)":"Sheet4",
        "GF43184001 - SERCO":"Sheet5",
        "GF62596001 - RBS GROUP RETIREMENT SAVINGS PLAN":"Sheet6",
        "GF65927001 - SIEMENS HEALTHINEERS PENSION PLAN":"Sheet7",
        "GF06865001 - YOUR M & S PENSION SAVING PLAN": "Sheet8",
        "GF75755001 - SAINSBURY'S SIPP":"Sheet9",
        "GF90275001 - SAVE THE CHILDREN UK GROUP PERSONAL PENSION":"Sheet10",
        "GF26495001 - PACE DC - CO-OPERATIVE BANK SECTION AVCS":"Sheet11",
        "GF34865001 - PACE DC - CO-OP SECTION AVCS":"Sheet12",
        "GF48375001 - THE LEGAL & GENERAL MASTERTRUST (SOMERFIELD TRANSFER PLAN)":"Sheet13",
        "GF63965001 - BARCLAYS PENSION SAVINGS PLAN":"Sheet14",
        "GF68407001 - LONDON STOCK EXCHANGE GROUP PENSION PLAN":"Sheet15",
        "GF72027001 - KINGFISHER PENSION SCHEME":"Sheet16",
        "GF83965001 - SAINSBURY'S PENSION SCHEME AVC":"Sheet17",
        "GF90637001 - SERCO WORKSAVE PENSION PLAN":"Sheet18",
        "GF06965001 - ARGOS PERSONAL PENSION PLAN":"Sheet19",
        "GF17495001 - PACE DC - CO-OPERATIVE BANK SECTION":"Sheet20",
        "GF27865001 - THE M&S AVC SCHEME":"Sheet21",
        "GF42075001 - IKEA RETIREMENT INCOME SCHEME":"Sheet22",
        "GF54037001 - FLEXIBLE RETIREMENT PLAN":"Sheet23",
        "GF65737001 - ACCENTURE RETIREMENT SAVINGS PLAN":"Sheet24",
        "GF71095001 - GREGGS PENSION SCHEME":"Sheet25",
        "GF74927001 - MITCHELLS & BUTLERS EXECUTIVE PENSION PLAN":"Sheet26",
        "GF89265001 - BOOTS RETIREMENT SAVINGS PLAN": "Sheet27",
        "GF24865001 - PACE DC - CO-OP SECTION":"Sheet28",
        "GF07437001 - EY RETIREMENT SAVINGS TRUST": "Sheet29",
        "GF51465001 - REPSOL SINOPEC RESOURCES UK LIMITED MYPENSION PLAN": "Sheet30",
        "GF59556001 - NORCROS RETIREMENT SAVINGS SCHEME": "Sheet31",
        "GF69037001 - MARSHALL RETIREMENT SAVINGS PLAN": "Sheet32",
        "GF74327001 - OSPS INVESTMENT BUILDER": "Sheet33",
        "GF98696001 - RSPB DC PENSION SCHEME": "Sheet34",
        "GF99556001 - THE NORCROS SECURITY PLAN": "Sheet35",
        "GF15927001 - MITCHELLS & BUTLERS PENSION PLAN": "Sheet36"
      }
      //sheet object

      //var worksheet = wb.addWorksheet(myhash[schemeId]);
      let sheet: Worksheet = wb.getWorksheet(myhash[schemeId]);
      console.log(myhash[schemeId]);

      // write to excel sheet
      sheet.getRow(i).getCell(j).value = text;
      wb.xlsx.writeFile(excelFilePath);
      browser.sleep(3000);
      console.log("Field is displayed,\n Result is written in "+myhash[schemeId]+", Row: "+i+" of the excel sheet ");

    })

  }
  }
