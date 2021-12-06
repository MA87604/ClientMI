const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class schemeCategory {

  table1Header: ElementArrayFinder;
  table2Header: ElementArrayFinder;
  table3Header: ElementArrayFinder;
  row1: ElementArrayFinder;
  row2: ElementArrayFinder;
  row3: ElementArrayFinder;
  schemeCategory: ElementFinder;
  search: ElementFinder;
  maxMinButton: ElementFinder;
  radioBtn: ElementFinder;
  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;

  constructor() {

    this.table1Header = element(by.id("tableChart_148")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.table2Header = element(by.id("tableChart_149")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.table3Header = element(by.id("tableChart_150")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.row1 = element(by.id("tableChart_148")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row2 = element(by.id("tableChart_149")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row3 = element(by.id("tableChart_150")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.radioBtn = element(by.css("label.mat-radio-label"));
    
    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.maxMinButton = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
    
    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/strong/span"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/strong/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/image-report/img"));
    
  }
}