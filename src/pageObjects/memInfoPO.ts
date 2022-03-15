const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class memInfo {

  noOfMem: ElementFinder;
  regUsersOnline: ElementFinder;
  avgFund: ElementFinder;
  avgPayroll: ElementFinder;
  avgMemAge: ElementFinder;
  female: ElementFinder;
  male: ElementFinder;
  avgFemaleAge: ElementFinder;
  avgMaleAge: ElementFinder;
  memPolicyStartDt: ElementFinder;
  memAgeGender: ElementFinder;
  avgFundByGenderAge: ElementFinder;
  memByAgeActiveDeferred: ElementFinder;

  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minMaxBtn: ElementFinder;
  
  chooseGender: ElementFinder;
  search1: ElementFinder;
  radioBtn1: ElementFinder;
  minMaxBtn1: ElementFinder;
  radioBtn2: ElementFinder;

  ageBand: ElementFinder;
  search2: ElementFinder;
  chkBox: ElementFinder;
  minMaxBtn2: ElementFinder;
  applyBtn: ElementFinder;
  chkAll: ElementFinder;

  age: ElementFinder;
  search3: ElementFinder;
  chkBox2: ElementFinder;
  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;
  
  memberInfoDetailReport: ElementFinder;
  table1Header: ElementArrayFinder;
  row1: ElementArrayFinder;
  summaryText: ElementArrayFinder;


  constructor() {

    this.noOfMem = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span[2]"));
    this.regUsersOnline = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[15]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avgFund = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avgPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[17]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avgMemAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[23]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.female = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.male = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avgFemaleAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avgMaleAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.memPolicyStartDt = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.memAgeGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[33]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.avgFundByGenderAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.memByAgeActiveDeferred = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));

    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
    this.minMaxBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

  
    this.chooseGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[4]/input"));
    this.radioBtn1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]/span[1]"));
    this.radioBtn2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[3]/label/span[2]/span[2]"));
    this.minMaxBtn1 =element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

    this.ageBand = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[27]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[27]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[4]/input"));
    this.chkBox = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[27]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/div/mat-checkbox/label/span[1]"));
    this.chkAll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[27]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div[1]/mat-checkbox/label/span[1]"));
    this.applyBtn = element(by.xpath("//span[text() = ' Apply ']"));

    this.age = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[28]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[28]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.chkBox2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[28]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/div/mat-checkbox[1]/label/span[1]"));
    //this.minMaxBtn3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));

    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/span/strong"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/image-report/img"));

    this.memberInfoDetailReport = element(by.xpath("//a[text() = 'Member Information Detail Report']"));
    this.table1Header = element(by.id("tableChart_189")).all(by.css("div.table-cell-outer-div.headerText.wrappedText> div > span"));
    this.row1 = element(by.id("tableChart_189")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.summaryText = element(by.id("tableChart_189")).all(by.css("div.table-cell-outer-div.summaryText > div > span"));
    //this.table1Header = 206element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[1]/div[1]/div[1]/div/span"));


    
  }
}