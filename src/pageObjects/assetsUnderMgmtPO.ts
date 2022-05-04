const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class assetUnderMgmt {

  totAssetsUnderMgmt: ElementFinder;
  totAssetInvestedInNonLifestyleFund: ElementFinder;
  totAssetInvestedInLifestyleFund: ElementFinder;
  defaultStratPolicies: ElementFinder;
  otherStratPolicies: ElementFinder;
  table1Header:ElementArrayFinder
  row1: ElementArrayFinder;
  row2: ElementArrayFinder;
  table2Header: ElementArrayFinder;
  row3: ElementArrayFinder;
  row4: ElementArrayFinder;
  viewAllFundsBtn: ElementFinder;
  viewAllLifestyleProfileBtn: ElementFinder;
  fundDemographic: ElementFinder;
  showBreakdownBtn: ElementFinder;
  top5fundsGraph: ElementFinder;
  top5lifestyleGraph: ElementFinder;
  assetInvestedinDefaultStat: ElementFinder;
  assetInvestedinOtherStat: ElementFinder;
  schemeCategory: ElementFinder;
  search: ElementFinder;
  radioBtn: ElementFinder;
  minMaxBtn: ElementFinder;

  constructor() {

    this.totAssetsUnderMgmt= element(by.xpath("//h2[contains(text(),' Total assets under management ')]/parent::div/div/span"));
    // this.totAssetInvestedInNonLifestyleFund = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.totAssetInvestedInNonLifestyleFund = element(by.xpath("//h2[contains(text(),'(Non lifestyle profile) ')]/parent::div/div/span"));
    this.totAssetInvestedInLifestyleFund = element(by.xpath("//h2[contains(text(),'lifestyle profiles ')]/parent::div/div/span"));
    // this.totAssetInvestedInLifestyleFund = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.defaultStratPolicies = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[17]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.otherStratPolicies = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[19]/dashlet/div/report/kpi-report/div/div/div/span"));
  
    this.fundDemographic = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.viewAllFundsBtn = element(by.id("DashletSwitcher"));
    this.showBreakdownBtn = element(by.id("DefaultFundSwitcher"));
    this.top5fundsGraph = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[29]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.top5lifestyleGraph = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.assetInvestedinDefaultStat = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.assetInvestedinOtherStat = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[18]/dashlet/div/report/kpi-report/div/div/div/span"));

    this.table1Header = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.table2Header = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.headerText > div > span"));
    this.row1 = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row2 = element(by.css("[class=\"table-view\"]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));

    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
    this.minMaxBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

  
  }
}