const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise, ExpectedConditions, protractor } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';
import { register } from "ts-node";
import { landingPage } from "./landingPO";
import { Console } from "console";


chai.use(chaiAsPromised);
let expect = chai.expect;
let dp = new landingPage();

export class workplaceDashboard {

  label1: ElementFinder;
  label2: ElementFinder;
  label3: ElementFinder;
  label4: ElementFinder;
  label5: ElementFinder;
  label6: ElementFinder
  label7: ElementFinder;
  label8: ElementFinder;
  label9: ElementFinder;
  serviceScore: ElementFinder;
  optOutRate: ElementFinder;
  totOnlineReg: ElementFinder;
  memberToday: ElementFinder;
  netMovement: ElementFinder;
  memContributions: ElementFinder;
  fundUnderMgmt: ElementFinder;
  upcomingRetirement: ElementFinder;
  countOfScheme: ElementFinder;
  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minMaxBtn: ElementFinder;

  
  constructor() {

    this.label1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/kpi-report/div/div/h2"));
    this.serviceScore = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.label2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/h2"));
    this.optOutRate = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"))
    this.label3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/h2"));
    this.totOnlineReg = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/div/span[2]"));
    this.label4 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/kpi-report/div/div/h2"));
    this.memberToday = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.label5 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/kpi-report/div/div/h2"));
    this.netMovement = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.label6 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/report/kpi-report/div/div/h2"));
    this.memContributions = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.label7 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[49]/dashlet/div/report/kpi-report/div/div/h2"));
    this.fundUnderMgmt = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[49]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.label8 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/report/kpi-report/div/div/h2"));
    this.upcomingRetirement = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.label9 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[55]/dashlet/div/report/kpi-report/div/div/h2"));
    this.countOfScheme = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[55]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.id("mat-input-3"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
    this.minMaxBtn =element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

  }

}

      

  
