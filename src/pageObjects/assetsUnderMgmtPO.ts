const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

var moment = require('moment');
var lastMonthFirstDay = moment().subtract(1, 'months').startOf('month').format('DD/MM/YYYY');
console.log("lastMonthFirstDay: "+lastMonthFirstDay)
export class assetUnderMgmt {
  totEnrolment: ElementFinder;
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
  graphExpandButton: ElementFinder;
  filterButton: ElementFinder;
  schemeHoldingAttr: ElementFinder;
  dateOption2: ElementFinder;
  searchAttrTextbox: ElementFinder;
  closeSchemeHoldingAttr: ElementFinder;
  ageBandFilter: ElementFinder;
  companyNameFilter: ElementFinder;
  genderFilter: ElementFinder;
  goneAwayFilter: ElementFinder;
  groupSchemeFilter: ElementFinder;
  memberStatusFilter: ElementFinder;
  yearOrMonthFilter: ElementFinder;
  schemeIDFilter: ElementFinder;




  constructor() {

    this.totAssetsUnderMgmt= element(by.xpath("//h2[contains(text(),' Total assets under management ')]/parent::div/div/span"));
    // this.totAssetInvestedInNonLifestyleFund = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.totAssetInvestedInNonLifestyleFund = element(by.xpath("//h2[contains(text(),'(Non lifestyle profile) ')]/parent::div/div/span"));
    this.totAssetInvestedInLifestyleFund = element(by.xpath("//h2[contains(text(),'lifestyle profiles ')]/parent::div/div/span"));
    // this.totAssetInvestedInLifestyleFund = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.defaultStratPolicies = element(by.xpath("//h2[contains(text(),' Regular contributions in default strategy')]/parent::div//div//span"));
    this.otherStratPolicies = element(by.xpath("//h2[contains(text(),' Regular contributions in other strategies')]/parent::div//div//span"));
  
    this.fundDemographic = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.viewAllFundsBtn = element(by.id("DashletSwitcher"));
    this.showBreakdownBtn = element(by.css("[id=DefaultFundSwitcher] a"));
    this.top5fundsGraph = element(by.xpath("(//div[@class=\"viz-container\"]//canvas)[1]"));
    this.top5lifestyleGraph = element(by.xpath("(//div[@class=\"viz-container\"]//canvas)[2]"));
    this.assetInvestedinDefaultStat = element(by.xpath("//h2[text()=' Assets invested in default strategy ']/parent::div//div//span"));
    this.assetInvestedinOtherStat = element(by.xpath("//h2[text()=' Assets invested in other strategies ']/parent::div//div//span"));

    this.table1Header = element(by.xpath("(//div[@class=\"table-view\"])[1]")).all(by.css("div.table-cell-outer-div headerText > div > span"));
    this.table2Header = element(by.xpath("(//div[@class=\"table-view\"])[2]")).all(by.css("div.table-cell-outer-div headerText > div > span"));
    this.row1 = element(by.xpath("(//div[@class=\"table-view\"])[1]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));
    this.row2 = element(by.xpath("(//div[@class=\"table-view\"])[2]")).all(by.css("div.table-cell-outer-div.bodyText > div > span"));

    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
    this.minMaxBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"))

    this.filterButton = element(by.css("[data-mat-icon-name=\"filter\"]"));
    this.schemeHoldingAttr = element(by.xpath("//*[text()='Scheme Holding Attributes.Date of Valuation']"));
// this.dateOption2 = element(by.xpath("//span[contains(text(),"+lastMonthFirstDay+")]/ancestor::label"));

    this.dateOption2 = element(by.xpath("/html/body/div[2]/div[2]/div/set-filter-drawer/mat-card/mat-card-content/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[2]/label"));
    this.graphExpandButton = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/div[1]/div[2]/div/dashlet-maximize/button/span[1]/mat-icon"));
    this.searchAttrTextbox = element(by.css("[placeholder=\"Search Attributes\"]"));

    this.closeSchemeHoldingAttr =  element(by.xpath("//mat-card-title[contains(text(),'Scheme Holding Attributes.Date of Valuation')]/ancestor::mat-card-header//button"));

    this.ageBandFilter= element(by.css("[aria-label=\"Open filter Age Band\"]"));
    this.companyNameFilter= element(by.css("[aria-label='Open filter Company Name']"));
    this.genderFilter= element(by.css("[aria-label='Open filter Gender']"));
    this.goneAwayFilter= element(by.css("[aria-label='Open filter Gone Away Indicator']"));
    this.groupSchemeFilter= element(by.css("[aria-label='Open filter Group Scheme Type']"));
    this.memberStatusFilter= element(by.css("[aria-label='Open filter Member Status']"));
    this.schemeIDFilter= element(by.css("[aria-label='Open filter Scheme ID']"));
    this.yearOrMonthFilter = element(by.css("[aria-label='Open filter Year/Month']"));
    this.totEnrolment = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
  }
}