import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver,  WebElement, WebElementPromise } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import { landingPage } from '../pageObjects/landingPO';
import { chooseSpaces } from '../pageObjects/spacesPO';
import chai from 'chai';
import { protractor } from 'protractor/built/ptor';
import { serviceLevelAgreementPage } from '../pageObjects/serviceAgreementPO';
import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';



let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();
let sp = new schemePage();
let slp = new serviceLevelAgreementPage()
let dp = new landingPage();
let space = new chooseSpaces();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();

let path = "C:\\Automation\\ClientMI\\data\\serviceLevelAgreement.xlsx";



When('user navigates to service level agreement overview', async () => {
  await browser.sleep(5000);
  await sp.serviceAgreementLink.click();

  await browser.sleep(10000);

})

Then('user able to view the service level agreement fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(slp.username, slp.dataAsOf, slp.logo);

})

Then('user able to view {string} service level agreement filter {string}', async (schemeId, options) => {

  //await sp.schemeFilter(slp.schemeCategory, slp.search, slp.radioBtn, slp.minMaxBtn, options);

  await sp.lookForElement(slp.serviceScore, 'Service level agreement score is - ', 'Service level agreement score is missing');

  await sp.lookForElement(slp.noOfCalls, 'Total number of calls  - ', 'Total no of calls is missing');
  await browser.sleep(2000);
  await excel.excelWriteOperation(path, 3, 3, slp.noOfCalls, schemeId);
  await browser.sleep(2000);
  await sp.lookForElement(slp.callsPerMem, 'Calls per member - ', 'Call per member is missing');
  await excel.excelWriteOperation(path, 4, 3, slp.callsPerMem, schemeId);
  await browser.sleep(2000);
  await sp.graph(slp.piegraph, 'Service level agreement pie chart is visible', 'Service level agreement pie chart is not visible');

  await sp.graph(slp.callgraph, 'Calls received graph is visible', 'Calls received graph is not visible');

   
  await browser.waitForAngularEnabled(false);
  let frame1: WebElementPromise = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/web-page-report/iframe")).getWebElement();
  await browser.switchTo().frame(frame1);
  await slp.breakdownBtn.click();
  await browser.switchTo().defaultContent();

  await slp.breakdownGraph.isPresent().then(function (isVisible) {//validating group name is displayed
    if (isVisible) {
      console.log("Calls recieved breakdown is visible");
      slp.table1Header.getText().then(function (text) {
        console.log(text);
        slp.row2.getText().then(function (text) {
          console.log(text);
          slp.row4.getText().then(function (text) {
            console.log(text);
          })
        })
      })
      }
    else {
      console.log("Calls recieved breakdown is not visible");
    }
  })
  //await excel.excelWriteOperation1(path, 10, 3, slp.table1Header, schemeId);
  //await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 5, 3, slp.row2, schemeId);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 6, 3, slp.row4, schemeId);
  await browser.sleep(2000);

await browser.actions().sendKeys(protractor.Key.END).perform();

await sp.tableData(slp.tableHeader, slp.row1);
})


  

  
    
  
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


