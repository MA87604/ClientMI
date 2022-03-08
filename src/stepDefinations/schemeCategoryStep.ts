import { Given, When, Then } from '@cucumber/cucumber';
import { browser, by, By, element, ExpectedConditions, WebDriver, WebElement, WebElementPromise, ElementArrayFinder } from 'protractor';
import { schemePage } from '../pageObjects/schemePO';
import chai from 'chai';
import { schemeCategory } from '../pageObjects/schemeCategoryPO';
//import * as schemeData from '../testData/scheme.json';
//import * as data1 from '../testData/scheme.ts'
import { genderAge } from '../pageObjects/genderAge';
import { basicFields } from '../pageObjects/generalFunctions';
import { excelReadAndWrite } from '../pageObjects/readWriteExcel';



//let data = require('../testData/dataTest.json');
//let schemeData = require("../testData/scheme");
//Products: (schemeData as any).default;

let excel = new excelReadAndWrite();
let bf = new basicFields();
let ga = new genderAge();
let sc = new schemeCategory();
let sp = new schemePage();
let expect = chai.expect;
let should = chai.should;
//let alert = new Alert();
let path = "C:\\Automation\\ClientMI\\data\\schemeCategory.xlsx";


When('user navigates to Scheme Category Overview', async () => {
  
  await browser.sleep(5000);
  await sp.countOfSchemeLink.click();

  await browser.sleep(10000);
})


Then('user able to view the Scheme Category Overview fields in the page', async () => {

  await browser.waitForAngularEnabled(false);

  await bf.basicFieldWithoutFonts(sc.username, sc.dataAsOf, sc.logo);

})

Then('user able to view {string} Scheme Category Overview filter {string}', async (scheme,string) => {
  
  //await sp.schemeFilter(sc.schemeCategory, sc.search, sc.radioBtn, sc.maxMinButton, string);
   
  await browser.waitForAngularEnabled(true);
  
  await browser.sleep(5000);
  
  await bf.tableData(sc.table1Header);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 3, 3, sc.table1Header, scheme);
  await browser.sleep(2000);

  await bf.tableData(sc.row1);
  await browser.sleep(2000);
  await excel.excelWriteOperation1(path, 4, 3, sc.row1, scheme);
  await browser.sleep(2000);

  await bf.tableData(sc.table2Header);

  await bf.tableData(sc.row2);

  await bf.tableData(sc.table3Header);
  
  } 
)

  
  
