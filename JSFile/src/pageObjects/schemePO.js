"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemePage = void 0;
const { Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const ptor_1 = require("protractor/built/ptor");
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class schemePage {
    constructor() {
        this.header = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'Welcome to MySI: My Scheme Intelligence']"));
        this.username = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/span"));
        this.date = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/strong/span/strong/span"));
        this.logo = (0, protractor_1.element)(protractor_1.by.xpath("//img[@src='/SMIWeb/rest/v2/contents/68475605-2a21-4ac6-9e94-c1dd0826f19c/image?imagePath=%2Fshared%2Fimages%2FLogo%20-%20L%26G.png']"));
        this.serviceAgreement = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Service level agreement score ']"));
        this.serviceAgreementLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/report/image-report/img"));
        this.optOutRate = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Opt out rate last 3 months ']"));
        this.totalReg = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Total online registrations ']"));
        this.memberToday = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Members  today ']"));
        this.netMovement = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Last 3 months member net movement ']"));
        this.memberContribution = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Last 3 months member contributions ']"));
        this.fundsUnderMgmt = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Funds under management as of today ']"));
        this.upcomingrRetirement = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Next 12 Months: Upcoming Retirements ']"));
        this.countOfScheme = (0, protractor_1.element)(protractor_1.by.xpath("//h2[text() = ' Count of scheme categories ']"));
        //this.optOutRateLink = element(by.xpath("//img[@src='/SMIWeb/rest/v2/contents/68475605-2a21-4ac6-9e94-c1dd0826f19c/image?imagePath=%2Fshared%2Fimages%2Ficon-chevron-right.png']"));
        this.optOutRateLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/image-report/img"));
        this.totalRegLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[26]/dashlet/div/report/image-report/img"));
        this.memberTodayLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[46]/dashlet/div/report/image-report/img"));
        this.netMovementLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[47]/dashlet/div/report/image-report/img"));
        this.memberContributionLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[48]/dashlet/div/report/image-report/img"));
        this.fundsUnderMgmtLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[66]/dashlet/div/report/image-report/img"));
        this.upcomingrRetirementLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[64]/dashlet/div/report/image-report/img"));
        this.countOfSchemeLink = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[65]/dashlet/div/report/image-report/img"));
        this.title = (0, protractor_1.element)(protractor_1.by.css("span.card-title"));
        this.map = (0, protractor_1.element)(protractor_1.by.css("svg.leaflet-zoom-animated"));
        this.groupName = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.groupRef = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[14]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.companyName = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[15]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.startDate = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[20]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.renewalDate = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[21]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.autoEnrolDate = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[22]/dashlet/div/report/kpi-report/div/div/div/span"));
    }
    selectScheme(elem1, elem2, elem3, elem4, schemeId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.click();
            yield console.log("select a scheme ID has been selected");
            yield protractor_2.browser.sleep(10000); //manually select the scheme
            yield elem2.sendKeys(schemeId, ptor_1.protractor.Key.ENTER);
            yield protractor_2.browser.sleep(4000);
            yield elem3.click();
            yield protractor_2.browser.sleep(4000);
            yield elem4.click();
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
        });
    }
    schemeFilter(elem1, elem2, elem3, elem4, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_2.browser.sleep(4000);
            yield elem1.click(); //click combobox filter
            yield console.log("Select Scheme Category dropdown has been clicked");
            yield protractor_2.browser.sleep(10000);
            yield elem2.click(); //click search
            yield elem2.sendKeys(ptor_1.protractor.Key.CONTROL, "A");
            yield elem2.sendKeys(ptor_1.protractor.Key.DELETE);
            yield elem2.sendKeys(string); //enter a scheme category
            yield elem2.sendKeys(ptor_1.protractor.Key.ENTER);
            yield protractor_2.browser.sleep(3000);
            yield elem3.click();
            yield protractor_2.browser.sleep(3000);
            yield elem4.click();
            yield protractor_2.browser.sleep(3000);
            yield console.log("Scheme Category " + string + " has been choosen");
        });
    }
    lookForElement(elem1, string1, string2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_2.browser.wait(protractor_1.ExpectedConditions.visibilityOf(elem1), 30000);
            yield elem1.isPresent().then(function (isPresent) {
                if (isPresent) {
                    elem1.getText().then(function (text) {
                        console.log(string1 + text);
                    });
                }
                else {
                    console.log(string2);
                }
            });
        });
    }
    tableData(elem1, elem2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.isPresent().then(function (isVisible) {
                if (isVisible) {
                    elem1.getText().then(function (text) {
                        console.log(text);
                        elem2.getText().then(function (text) {
                            console.log(text);
                        });
                    });
                }
            });
        });
    }
    forthRetirement(elem1, elem2, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.isPresent().then(function (isVisible) {
                if (isVisible) {
                    elem1.getText().then(function (text) {
                        elem2.getText().then(function (text2) {
                            console.log(text, text2);
                        });
                    });
                }
                else {
                    console.log(string);
                }
            });
        });
    }
    graphBreakdown(elem1, elem2, elem3, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.isPresent().then(function (isVisible) {
                if (isVisible) {
                    elem1.click();
                    protractor_2.browser.switchTo().defaultContent();
                    protractor_2.browser.actions().sendKeys(ptor_1.protractor.Key.HOME).perform();
                    elem2.getText().then(function (text) {
                        console.log(text);
                        elem3.getText().then(function (text) {
                            console.log(text);
                        });
                    });
                }
                else {
                    console.log(string);
                }
            });
        });
    }
    graph(elem1, string1, string2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.isPresent().then(function (isVisible) {
                if (isVisible) {
                    console.log(string1);
                }
                else {
                    console.log(string2);
                }
            });
        });
    }
    dashboardTiles(elem1, elem2, elem3, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.isDisplayed().then(function (isVisible) {
                if (isVisible) {
                    elem1.getText().then(function (text) {
                        console.log(text);
                    });
                    elem2.getText().then(function (text) {
                        console.log(text);
                    });
                    elem3.getText().then(function (text) {
                        console.log(text);
                    });
                }
                else {
                    console.log(string);
                }
            });
        });
    }
}
exports.schemePage = schemePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZU9iamVjdHMvc2NoZW1lUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLDJDQUE4SDtBQUM5SCwyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLHdFQUE4QztBQUU5QyxnREFBbUQ7QUFFbkQsY0FBSSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixNQUFhLFVBQVU7SUE2RXJCO1FBRUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5SUFBeUksQ0FBQyxDQUFDLENBQUM7UUFDN0ssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0SkFBNEosQ0FBQyxDQUFDLENBQUM7UUFDNUwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1SUFBdUksQ0FBQyxDQUFDLENBQUM7UUFDdkssSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkhBQTZILENBQUMsQ0FBQyxDQUFDO1FBQzdLLElBQUksQ0FBQyxVQUFVLEdBQUcs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