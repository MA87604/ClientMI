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
  expandIcon: ElementFinder;
  categoryRet_Subheader: ElementFinder;
  dashletActionsIcon: ElementFinder;


  sodexomonthlyPaidCount: ElementFinder;
  sodexoAEWeeklyPaidCount: ElementFinder;
  sodexoAEmonthlyPaidCount: ElementFinder;
  sodexoMotivationSolutionsCount: ElementFinder;
  sodexoGlobalServicesCount: ElementFinder;
 tvfWeeklyPaidCount: ElementFinder;
  sportsTravelHospitalityGroupCount: ElementFinder;
  sodexo4WeeklyPaidCount: ElementFinder;
  sodexoTravelCount: ElementFinder;
  tvf4WeeklyTempCount: ElementFinder;







  constructor() {

    this.table1Header = element(by.xpath("//div[@class='table-view']")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.table2Header = element(by.xpath("//div[@class='table-view']")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.table3Header = element(by.xpath("//div[@class='table-view']")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.row1 = element(by.xpath("//div[@class='table-view']")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row2 = element(by.xpath("//div[@class='table-view']")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row3 = element(by.xpath("//div[@class='table-view']")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.radioBtn = element(by.css("label.mat-radio-label"));
    
    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.maxMinButton = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
    
    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/strong/span"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/strong/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/image-report/img"));

  //  table cell values

     this.sodexomonthlyPaidCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[3]/div/div/span"));

    this.sodexoAEWeeklyPaidCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[6]/div/div/span"));
    this.sodexoAEmonthlyPaidCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[9]/div/div/span"));
    this.sodexoMotivationSolutionsCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[12]/div/div/span"));
    this.sodexoGlobalServicesCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[15]/div/div/span"));
    this.tvfWeeklyPaidCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[18]/div/div/span"));
    this.sportsTravelHospitalityGroupCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[21]/div/div/span"));
    this.sodexo4WeeklyPaidCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[24]/div/div/span"));
    this.sodexoTravelCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[27]/div/div/span"));
    this.tvf4WeeklyTempCount = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/visualizer-report/div/table-container/table-visualization/div[1]/div/div/div[2]/div[30]/div/div/span"));

    this.expandIcon = element(by.xpath("//span[text()=' Category selected retirement age ']/ancestor::div[@class='dashlet-header']//mat-icon[@data-mat-icon-namespace=\"icon-expand\"]"));
    this.dashletActionsIcon = element(by.xpath("//span[text()=' Category selected retirement age ']/ancestor::div[@class='dashlet-header']//mat-icon[@data-mat-icon-namespace=\"icon-arrow-down-tail\"]"));
    this.categoryRet_Subheader = element(by.xpath("//span[text()=' Category selected retirement age ']"));
  }
}