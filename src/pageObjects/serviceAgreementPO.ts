const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';
import { protractor } from "protractor/built/ptor";

chai.use(chaiAsPromised);
let expect = chai.expect;

export class serviceLevelAgreementPage {


  serviceScore: ElementFinder;
  noOfCalls: ElementFinder;
  callsPerMem: ElementFinder;
  title: ElementFinder;
  piegraph: ElementFinder;
  callgraph: ElementFinder;
  showBreakdown: ElementFinder;
  breakdownGraph: ElementFinder;
  breakdownBtn: ElementFinder;
  tableHeader: ElementArrayFinder;
  table1Header: ElementArrayFinder;
  row1: ElementArrayFinder;
  row2: ElementArrayFinder;
  row4: ElementArrayFinder;
  
  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minMaxBtn: ElementFinder;

  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;

  constructor() {


    this.serviceScore = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[11]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.noOfCalls = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[12]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.callsPerMem = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.title = element(by.css("span.card-title"));
    this.piegraph = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[19]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.callgraph = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.breakdownBtn = element(by.id("CallSwitcher"));
    this.breakdownGraph = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[21]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]"));
    this.tableHeader = element(by.xpath("(//div[@class=\"table-view\"])[2]")).all(by.css("div.table-cell-outer-div.headerText.wrappedText > div > span"));
    this.table1Header = element(by.xpath("(//div[@class=\"table-view\"])[1]")).all(by.css("div.table-cell-outer-div.headerText  > div > span"));
    this.row1 = element(by.xpath("(//div[@class=\"table-view\"])[2]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row2 = element(by.xpath("(//div[@class=\"table-view\"])[1]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row4 = element(by.xpath("(//div[@class=\"table-view\"])[1]")).all(by.css("div.table-cell-outer-div.summaryText  > div > span"));
    
    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.minMaxBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
  
    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[2]/dashlet/div/report/text-report/div/div/p[2]/span/strong"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[2]/dashlet/div/report/text-report/div/div/p[3]/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/image-report/img"));
    
    
  
  }
}