const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise,ExpectedConditions } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';
import { protractor } from "protractor/built/ptor";

chai.use(chaiAsPromised);
let expect = chai.expect;

export class memberEngagementPage {

  onlineReg: ElementFinder;
  memberLogLastMon: ElementFinder;
  memberLogLast3Mon: ElementFinder;
  memberWithEmail: ElementFinder;
  avgAge: ElementFinder;
  male1: ElementFinder;
  female1: ElementFinder;
  memberByAgeGender: ElementFinder;
  map: ElementFinder;
  barChart: ElementFinder;
  graphBreakdownBtn: ElementFinder;
  tableHeader1: ElementArrayFinder;
  row3: ElementArrayFinder;
  row4: ElementArrayFinder;
  filter: ElementFinder;


  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minMaxBtn: ElementFinder;
  
  chooseGender: ElementFinder;
  search1: ElementFinder;
  radioBtn1: ElementFinder;
  radioBtn2: ElementFinder;
  minMaxBtn1: ElementFinder;

  chooseAge: ElementFinder;
  search2: ElementFinder;
  chkBox: ElementFinder;
  chkAll: ElementFinder;
  minMaxBtn2: ElementFinder;
  applyBtn: ElementFinder;

  memStatus: ElementFinder;
  search3: ElementFinder;
  radioBtn3: ElementFinder;
  minMaxBtn3: ElementFinder;

  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;
  breakdownBtn: ElementFinder;
  onlineRegEmail: ElementFinder;
  notRegEmail: ElementFinder;
  regWithoutEmail: ElementFinder;
  notRegWithoutEmail: ElementFinder;

  constructor() {
  
    this.onlineReg = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[11]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.memberLogLastMon = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.memberLogLast3Mon = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.memberWithEmail = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[17]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avgAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[18]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.female1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.male1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[28]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.memberByAgeGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.barChart = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[40]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.graphBreakdownBtn = element(by.id("AgeGenderSwitch"));
    this.tableHeader1 = element(by.id("tableChart_171")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.row3 = element(by.id("tableChart_171")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.map = element(by.css("svg.leaflet-zoom-animated"));

    this.breakdownBtn = element(by.id("OptOutSwitcher"));
    this.onlineRegEmail = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.notRegEmail = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[21]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.regWithoutEmail = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.notRegWithoutEmail = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[23]/dashlet/div/report/kpi-report/div/div/div/span"));
    
    


    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.minMaxBtn =element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

    this.chooseGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.radioBtn1 =element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
    this.radioBtn2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[2]/label/span[1]"));
    this.minMaxBtn1 =element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

    this.chooseAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.chkBox = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/div/mat-checkbox/label/span[1]"));
    this.chkAll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div[1]/mat-checkbox/label/span[1]"));
    this.applyBtn = element(by.xpath("//span[text() = ' Apply ']"));

    this.memStatus = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.radioBtn3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
    this.minMaxBtn3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));

    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/span/strong"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/image-report/img"));
  }


}