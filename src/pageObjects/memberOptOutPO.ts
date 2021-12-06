const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';
import { protractor } from "protractor/built/ptor";

chai.use(chaiAsPromised);
let expect = chai.expect;

export class memberOptOut {

  totEnrolment: ElementFinder;
  enrolmentWithOptOut: ElementFinder;
  noOfOptOut: ElementFinder;
  optOutWithCont: ElementFinder;
  avgAge: ElementFinder;
  female: ElementFinder;
  male: ElementFinder;
  optOutByChannelGender: ElementFinder;
  optOutByAgeGender: ElementFinder;
  brekdownBtn2: ElementFinder;
  onlineReg: ElementFinder;
  memberLogLastMon: ElementFinder;
  memberLogLast3Mon: ElementFinder;
  memberWithEmail: ElementFinder;
  avgAgeMem: ElementFinder;
  male1: ElementFinder;
  female1: ElementFinder;
  memberByAgeGender: ElementFinder;
  map: ElementFinder;
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
  chkAll: ElementFinder;

  chooseAge: ElementFinder;
  search2: ElementFinder;
  chkBox: ElementFinder;
  minMaxBtn2: ElementFinder;
  applyBtn1: ElementFinder;
  chkAll1: ElementFinder;

  username: ElementFinder;
  dataAsOf: ElementFinder;
  logo: ElementFinder;

  empRegular: ElementFinder;
  empSingle: ElementFinder;
  employerRegular: ElementFinder;
  employerSingle: ElementFinder;


  constructor() {

    this.totEnrolment = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.enrolmentWithOptOut = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.noOfOptOut = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[23]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.optOutWithCont = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.empRegular = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[30]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employerRegular = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[40]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.empSingle = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.employerSingle = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[41]/dashlet/div/report/kpi-report/div/div/div/span"));


    this.avgAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[18]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.female = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[45]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.male = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[47]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.brekdownBtn2 = element(by.id("OptOutSwitcher"));
    this.optOutByChannelGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[50]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.optOutByAgeGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[55]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
    this.map = element(by.css("svg.leaflet-zoom-animated"));

    this.schemeCategory = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"))
    this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
    this.minMaxBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
    
    this.chooseGender = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[51]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[51]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.maleChkBox = element(by.xpath("//span[text() = 'Male']"));
    this.femaleChkBox = element(by.xpath("//span[text() = 'Female']"));
    this.unknownChkBox = element(by.xpath("//span[text() = 'Unknown']"));
    this.applyBtn = element(by.xpath("//span[text() = ' Apply ']"));
    this.chkAll = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[51]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div[1]/mat-checkbox/label/span[1]"));

    this.chooseAge = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
    this.search2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
    this.chkBox = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/div/mat-checkbox/label/span[1]"));
    this.applyBtn1 = element(by.xpath("//span[text() = ' Apply ']"));
    this.chkAll1 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[52]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div[1]/mat-checkbox/label/span[1]"));

    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/strong/span"));
    this.dataAsOf = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/strong/span/strong"));
    this.logo = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/image-report/img"));

  }
}