const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class Contribution {

  totMemCont: ElementFinder;
  payroll: ElementFinder;
  transferAmt: ElementFinder;
  nonPayroll: ElementFinder;
  employerRegPayroll: ElementFinder;
  employerSingPayroll: ElementFinder;
  employeeRegPayroll: ElementFinder;
  employeeSingPayroll: ElementFinder;
  pension: ElementFinder;
  avc: ElementFinder;
  intraScheme: ElementFinder;
  avcIntraScheme: ElementFinder;
  employerRegNonPayroll: ElementFinder;
  employerSingNonPayroll: ElementFinder;
  employeeRegNonPayroll: ElementFinder;
  employeeSingNonPayroll: ElementFinder;
  contByPayroll: ElementFinder;

  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minBtn: ElementFinder;
  maxBtn: ElementFinder;

  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;
  contDetailReport: ElementFinder;
  table1Header: ElementArrayFinder;
  row1: ElementArrayFinder;
  table2Header: ElementArrayFinder;
  row2: ElementArrayFinder;

  contributionAnalysisLink: ElementFinder;
  breakdownButton: ElementFinder;
  employeeSingle: ElementFinder;
  employeeRegular: ElementFinder;
  employerSingle: ElementFinder;
  employerRegular: ElementFinder;
  payrollAnalysisValue: ElementFinder;
  editMaxDateVal: ElementFinder
  maxVal:ElementFinder
  doneButton: ElementFinder;
  nonPayrollAnalysisValue: ElementFinder;
  employeeSingleAnalysisValue: ElementFinder;
  employeeRegularAnalysisValue: ElementFinder;
  employerSingleAnalysisValue: ElementFinder;
  employerRegularAnalysisValue: ElementFinder;
  transferAmountAnalysisValue: ElementFinder;
  pensionAnalysisValue: ElementFinder;
  avcAnalysisValue: ElementFinder;
  intraSchemeAnalysisValue: ElementFinder;
  avcIntraSchemeAnalysisValue: ElementFinder;
  breakdownButton1: ElementFinder;
  breakdownButton2: ElementFinder;
  breakdownButton3: ElementFinder;
  frame1: ElementFinder;
  frame2: ElementFinder;
  frame3: ElementFinder;
  map: ElementFinder;
  lineGraph: ElementFinder;
  barChartTotalvsLastYear: ElementFinder;
  barChartByAgeGender: ElementFinder;

  constructor() {

    this.totMemCont = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.payroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.transferAmt = element(by.xpath("//h2[text()=' Transfer amount ']/parent::div//span"));
    this.nonPayroll = element(by.xpath("//h2[text()=' Non-payroll ']/parent::div//span"));
    this.employerRegPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[47]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employerSingPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[48]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employeeRegPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[57]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employeeSingPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[58]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.pension = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[51]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avc = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.intraScheme = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[53]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.avcIntraScheme = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[54]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employerRegNonPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[49]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employerSingNonPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[50]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employeeRegNonPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[59]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employeeSingNonPayroll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[60]/dashlet/div/report/kpi-report/div/div/div/span"));

    this.frame1 = element(by.xpath("(//iframe[@class=\"fill-parent html-report ng-star-inserted\"])[1]"));
    this.breakdownButton1 = element(by.css("div[id=\"PayrollSwitcher\"] a"));
    ;this.frame2 = element(by.xpath("(//iframe[@class=\"fill-parent html-report ng-star-inserted\"])[2]"));
    this.breakdownButton2 = element(by.css("div[id=\"NonPayrollSwitcher\"] a"));
    this.frame3 = element(by.xpath("(//iframe[@class=\"fill-parent html-report ng-star-inserted\"])[3]"));
    this.breakdownButton3 = element(by.css("div[id=\"TransferSwitcher\"] a"));

    this.nonPayrollAnalysisValue = element(by.xpath("//h2[text()=' Non Payroll ']/parent::div//span"));
    this.employeeSingleAnalysisValue = element(by.xpath("(//h2[text()=' Employee single contribution ']/parent::div//span)[2]"));
    this.employeeRegularAnalysisValue = element(by.xpath("(//h2[text()=' Employee reg contribution ']/parent::div//span)[2]"));
    this.employerSingleAnalysisValue = element(by.xpath("(//h2[text()=' Employer single contribution ']/parent::div//span)[2]"));
    this.employerRegularAnalysisValue = element(by.xpath("(//h2[text()=' Employer reg contribution ']/parent::div//span)[2]"));
    this.transferAmountAnalysisValue = element(by.xpath("//h2[text()=' Transfer Amount ']/parent::div//span"));
    this.pensionAnalysisValue = element(by.xpath("//h2[text()=' Pension amount ']/parent::div//span"));
    this.avcAnalysisValue = element(by.xpath("//h2[text()=' AVC ']/parent::div//span"));
    this.intraSchemeAnalysisValue = element(by.xpath("//h2[text()=' Intra scheme amount ']/parent::div//span"));
    this.avcIntraSchemeAnalysisValue = element(by.xpath("//h2[text()=' AVC intra scheme ']/parent::div//span"));

    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[3]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[3]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[3]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.maxBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/div[1]/div/div/dashlet-maximize/button/span[1]/mat-icon"));
    this.minBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/div[1]/div/div/dashlet-maximize/button/span[1]/mat-icon"));

    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/text-report/div/div/p[2]/span/strong"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/text-report/div/div/p[3]/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/image-report/img"));

    this.contDetailReport = element(by.xpath("//a[text() = 'Contribution Detail Report']"));
    this.contByPayroll = element(by.xpath("//a[text() = 'Contribution by Payroll']"));
    this.table1Header = element(by.css("[class=\"table-view\"]")).all(by.css("div[class=\"table-cell-outer-div headerText wrappedText\"] div span"));
    this.row1 = element(by.css("[class=\"table-view\"]")).all(by.css("div[class=\"table-cell-outer-div bodyText\"] div span"));//210
    this.table2Header = element(by.css("[class=\"table-view\"]")).all(by.css("div[class=\"table-cell-outer-div headerText\"] div span"));
    this.row2 = element(by.css("[class=\"table-view\"]")).all(by.css("div[class=\"table-cell-outer-div bodyText\"] div span"));//210


    this.contributionAnalysisLink = element(by.xpath("//a[text()='Contribution Analysis']"));
    this.payrollAnalysisValue = element(by.xpath("//h2[text()=' Payroll ']/ancestor::dashlet[contains(@aria-label,'Payroll')]//span"));
    this.employeeSingle = element(by.xpath("//*[@aria-label=\"Payroll Employee Single Contribution\"]//span"));
    this.employeeRegular = element(by.xpath("//*[@aria-label=\"Payroll Employee Reg Contribution\"]//span"));
    this.employerSingle = element(by.xpath("//*[@aria-label=\"Payroll Employer Single Contribution\"]//span"));
    this.employerRegular = element(by.xpath("//*[@aria-label=\"Payroll Employer Reg Contribution\"]//span"));

    this.editMaxDateVal = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/embedded-filter/filter-selection/div/filter-slider/form/ngx-slider/span[10]"));
this.maxVal = element(by.css("[aria-label=\"Enter max value\"]"));
this.doneButton = element(by.xpath("//span[text()='Done']"));
    this.map = element(by.css("[class=\"map-container leaflet-container leaflet-fade-anim\"]"));
    this.lineGraph = element(by.xpath("(//*[@class=\"turbo-container\"]//canvas)[1]"));
    this.barChartTotalvsLastYear = element(by.xpath("(//*[@class=\"turbo-container\"]//canvas)[2]"));
    this.barChartByAgeGender = element(by.xpath("(//*[@class=\"turbo-container\"]//canvas)[3]"));
  }
}
