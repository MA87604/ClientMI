const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class retirementOverview {

  currentYear: ElementFinder;
  currentYearRet: ElementFinder;
  year2: ElementFinder;
  year3: ElementFinder;
  year4: ElementFinder;
  year5:ElementFinder
  retirement2: ElementFinder;
  retirement3: ElementFinder;
  retirement4: ElementFinder;
  retirement5: ElementFinder;

  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minMaxBtn: ElementFinder;
  
  chooseGender: ElementFinder;
  search1: ElementFinder;
  maleChkBox: ElementFinder;
  femaleChkBox: ElementFinder;
  unknownChkBox: ElementFinder;
  minMaxBtn1: ElementFinder;
  applyBtn: ElementFinder;

  chooseAge: ElementFinder;
  search2: ElementFinder;
  chkBox: ElementFinder;
  minMaxBtn2: ElementFinder;
  applyBtn1: ElementFinder;

  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;

  retirementAnalysis: ElementFinder;
  totMember: ElementFinder;
  upcomingRetirementInDateRange: ElementFinder;
  upcomingRetirementActive: ElementFinder;
  upcomingRetirementDeferred: ElementFinder;

  table1Header: ElementArrayFinder;
  row1: ElementArrayFinder;
  summaryText: ElementArrayFinder;
  
  constructor() {

    this.currentYear = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[15]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.year2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.year3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[17]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.year4 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[18]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.year5 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[19]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.currentYearRet = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.retirement2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[21]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.retirement3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.retirement4 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[23]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.retirement5 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/kpi-report/div/div/div/span"));
    
    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/span/label/mat-label[2]"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.minMaxBtn =element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

    this.chooseGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[51]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[51]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.maleChkBox = element(by.xpath("//span[text() = 'Male']"));
    this.femaleChkBox = element(by.xpath("//span[text() = 'Female']"));
    this.unknownChkBox = element(by.xpath("//span[text() = 'Unknown']"));
    this.applyBtn = element(by.xpath("//span[text() = ' Apply ']"));

    this.chooseAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.chkBox = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/div/mat-checkbox/label/span[1]"));
    this.applyBtn1 = element(by.xpath("//span[text() = ' Apply ']"));

    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/span/strong"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/image-report/img"));

    this.retirementAnalysis = element(by.xpath("//a[text() = 'Retirement Analysis']"));
    this.totMember = element(by.xpath("//h2[text()=' Total Members ']/parent::div//span[contains(@class,'kpi-measure')]"));
    // this.totMember = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/kpi-report/div/div/div/span"));
    // this.upcomingRetirementInDateRange = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.upcomingRetirementInDateRange = element(by.xpath("(/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div/dashlet/div/report/kpi-report/div/div/div/span)[6]"));
    this.upcomingRetirementActive = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[18]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.upcomingRetirementDeferred = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));

    this.table1Header = element(by.xpath("(//visualizer-report//div[contains(@class,'table-view')])[2]")).all(by.css("div.table-cell-outer-div.headerText.wrappedText> div > span"));
    this.row1 = element(by.xpath("(//visualizer-report//div[contains(@class,'table-view')])[2]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.summaryText = element(by.xpath("(//visualizer-report//div[contains(@class,'table-view')])[2]")).all(by.css("div.table-cell-outer-div.summaryText > div > span"));

    // this.table1Header = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.headerText.wrappedText> div > span"));
    // this.row1 = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    // this.summaryText = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.summaryText > div > span"));
  
  }
}