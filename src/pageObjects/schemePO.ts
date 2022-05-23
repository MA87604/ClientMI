const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, WebElementPromise,ExpectedConditions } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';
import { protractor } from "protractor/built/ptor";

chai.use(chaiAsPromised);
let expect = chai.expect;

export class schemePage {

  header: ElementFinder;
  username: ElementFinder;
  date: ElementFinder;
  logo: ElementFinder;
  serviceAgreement: ElementFinder;
  optOutRate: ElementFinder;
  totalReg: ElementFinder;
  memberToday: ElementFinder;
  netMovement: ElementFinder;
  memberContribution: ElementFinder;
  fundsUnderMgmt: ElementFinder;
  upcomingrRetirement: ElementFinder;
  countOfScheme: ElementFinder;
  serviceAgreementLink: ElementFinder;
  optOutRateLink: ElementFinder;
  totalRegLink: ElementFinder;
  memberTodayLink: ElementFinder;
  netMovementLink: ElementFinder;
  memberContributionLink: ElementFinder;
  upcomingrRetirementLink: ElementFinder;
  countOfSchemeLink: ElementFinder;
  fundsUnderMgmtLink: ElementFinder;
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
  groupName: ElementFinder;
  groupRef: ElementFinder;
  companyName: ElementFinder;
  startDate: ElementFinder;
  renewalDate: ElementFinder;
  autoEnrolDate: ElementFinder;


  

  constructor() {

    this.header = element(by.xpath("//span[text() = 'Welcome to MySI: My Scheme Intelligence']"));
    this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/span"));
    this.date = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/strong/span/strong/span"));
    this.logo = element(by.xpath("//img[@src='/SMIWeb/rest/v2/contents/68475605-2a21-4ac6-9e94-c1dd0826f19c/image?imagePath=%2Fshared%2Fimages%2FLogo%20-%20L%26G.png']"));
    this.serviceAgreement = element(by.xpath("//h2[text() = ' Service level agreement score ']"));
    this.serviceAgreementLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/image-report/img"));
    this.optOutRate = element(by.xpath("//h2[text() = ' Opt out rate last 3 months ']"));
    this.totalReg = element(by.xpath("//h2[text() = ' Total online registrations ']"));
    this.memberToday = element(by.xpath("//h2[text() = ' Members  today ']"));
    this.netMovement = element(by.xpath("//h2[text() = ' Last 3 months member net movement ']"));
    this.memberContribution = element(by.xpath("//h2[text() = ' Last 3 months member contributions ']"));
    this.fundsUnderMgmt = element(by.xpath("//h2[text() = ' Funds under management as of today ']"));
    this.upcomingrRetirement = element(by.xpath("//h2[text() = ' Next 12 Months: Upcoming Retirements ']"));
    this.countOfScheme = element(by.xpath("//h2[text() = ' Count of scheme categories ']"));
    //this.optOutRateLink = element(by.xpath("//img[@src='/SMIWeb/rest/v2/contents/68475605-2a21-4ac6-9e94-c1dd0826f19c/image?imagePath=%2Fshared%2Fimages%2Ficon-chevron-right.png']"));
  
    this.optOutRateLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[23]/dashlet/div/report/image-report/img"));
    this.totalRegLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[24]/dashlet/div/report/image-report/img"));
    this.memberTodayLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[44]/dashlet/div/report/image-report/img"));
    this.netMovementLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[45]/dashlet/div/report/image-report/img"));
    this.memberContributionLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[46]/dashlet/div/report/image-report/img"));
    this.fundsUnderMgmtLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[64]/dashlet/div/report/image-report/img"));
    this.upcomingrRetirementLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[62]/dashlet/div/report/image-report/img"));
    this.countOfSchemeLink = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[63]/dashlet/div/report/image-report/img"));
    this.title = element(by.css("span.card-title"));
    this.map = element(by.css("svg.leaflet-zoom-animated"));

    this.groupName = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.groupRef = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.companyName = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[15]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.startDate = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.renewalDate = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[21]/dashlet/div/report/kpi-report/div/div/div/span"));
    this.autoEnrolDate = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));

  }

  async selectScheme(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder,elem5: ElementFinder, schemeId) {
    await elem1.click();
    await console.log("select a scheme ID has been selected");
  await browser.executeScript("arguments[0].click();", elem5);
    await browser.sleep(5000);//manually select the scheme
    await elem2.sendKeys(schemeId, protractor.Key.ENTER);
    await browser.sleep(4000);
    await elem3.click();
    await browser.sleep(4000);
    await elem4.click();

    //wait to manually click maximise icon
    // Move mouse over the button
   

    //elm[0].click();
    //});
    
   // await browser.driver.actions().mouseMove(element(by.css('cdk-overlay-container'))).perform();
    //await element(by.css('cdk-overlay-container')).then(function (elm) {

     // browser.driver.actions().mouseMove(element(by.css('cdk-overlay-connected-position-bounding-box'))).perform();
     // element(by.css('cdk-overlay-connected-position-bounding-box')).then(function (elm1) {
  
       // elem2.sendKeys(schemeId, protractor.Key.ENTER);
      //  browser.sleep(4000);
      //  elem3.click();
     //   browser.sleep(4000);
     //   elem4.click();
     // })
   // })
  

  }

  
  async schemeFilter(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder, string) {
    await browser.sleep(4000);
    await elem1.click();//click combobox filter
    await console.log("Select Scheme Category dropdown has been clicked");
    await browser.sleep(10000);
    await elem2.click();//click search
    await elem2.sendKeys(protractor.Key.CONTROL, "A");
    await elem2.sendKeys(protractor.Key.DELETE);
    await elem2.sendKeys(string);//enter a scheme category
    await elem2.sendKeys(protractor.Key.ENTER);
    await browser.sleep(3000);
    await elem3.click();
    await browser.sleep(3000);
    await elem4.click();
    await browser.sleep(3000);
    await console.log("Scheme Category "+string +" has been choosen");
  
  }


  async lookForElement(elem1: ElementFinder, string1, string2) {
    await browser.wait(ExpectedConditions.visibilityOf(elem1), 30000);
    await elem1.isPresent().then(function (isPresent) {
      if (isPresent) {
        elem1.getText().then(function (text) {
          console.log(string1 + text);
        })
      }
      else {
        console.log(string2);
      }
    })
  }


  async tableData(elem1: ElementArrayFinder, elem2: ElementArrayFinder) {
    console.log("Table data ");
    await elem1.isPresent().then(function (isVisible) {
      console.log("is visible: "+isVisible);
      if (isVisible) {
        elem1.getText().then(function (text) {
          console.log(text);
          elem2.getText().then(function (text) {
            console.log(text);
          })
        })
      }
    })
  }

  async forthRetirement(elem1: ElementFinder, elem2: ElementFinder, string) {
    await elem1.isPresent().then(function (isVisible) {//validating group name is displayed
      if (isVisible) {
        elem1.getText().then(function (text) {
          elem2.getText().then(function (text2) {
            console.log(text, text2);
          })
        })
      }
      else {
        console.log(string);
      }
    })
  }
  

  async graphBreakdown(elem1: ElementFinder, elem2: ElementArrayFinder, elem3: ElementArrayFinder, string) {
    await elem1.isPresent().then(function (isVisible) {//validating group name is displayed
      if (isVisible) {
        elem1.click();
        browser.switchTo().defaultContent();
        browser.actions().sendKeys(protractor.Key.HOME).perform();
        elem2.getText().then(function (text) {
          console.log(text);
          elem3.getText().then(function (text) {
            console.log(text);
          })
        })
      }
      else {
        console.log(string);
      }
    })
  }

  async graph(elem1: ElementFinder, string1, string2) {
    await elem1.isPresent().then(function (isVisible) {//validating group name is displayed
      if (isVisible) {
          console.log(string1);
        }
      else {
        console.log(string2);
      }
    }) 
  }
  


  async dashboardTiles(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, string) {
    await elem1.isDisplayed().then(function (isVisible) {//validating group name is displayed
      if (isVisible) {
        elem1.getText().then(function (text) {
          console.log(text);
        })
          elem2.getText().then(function (text) {
            console.log(text);
          })
        elem3.getText().then(function (text) {
          console.log(text);
        })
      }
      else {
        console.log(string);
      }
    })
    
  }
  
}
