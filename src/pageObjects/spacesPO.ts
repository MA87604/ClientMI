import { by, element, ElementFinder, browser,ExpectedConditions } from "protractor";
import { emitKeypressEvents } from "readline";


export class chooseSpaces {

    spaces:ElementFinder;
    MySchemeIntelDev:ElementFinder;
    MySchemeIntelProd:ElementFinder;
    MySchemeIntelDash:ElementFinder;
    MySchemeIntelDashv02:ElementFinder;
    dashboard:ElementFinder;
    closeNav:ElementFinder;

    constructor () {

        this.spaces = element(by.id("projects-tab"));
        this.MySchemeIntelDev = element(by.xpath("//span[text() = 'My Scheme Intelligence - Development']"));
        this.MySchemeIntelProd = element(by.xpath("//span[text() = 'My Scheme Intelligence - Production Staging']"));
        this.MySchemeIntelDash = element(by.xpath("//span[text() = 'My Scheme Intelligence Dashboard']"));
        this.MySchemeIntelDashv02 = element(by.xpath("//span[text() = 'My Scheme Intelligence Dashboard V02']"));
        this.dashboard = element(by.css("button.mat-list-item.mat-focus-indicator.xpath-global-nav-dashboards-btn.active.mat-list-item-avatar.mat-list-item-with-avatar"));
        this.closeNav = element(by.css("button.mat-focus-indicator.mat-tooltip-trigger.global-nav-close.inset-button.mat-button.mat-button-base"));
        //this.closeNav = element(by.css("button.mat-focus-indicator.mat-tooltip-trigger.global-nav-close.inset-button.mat-button.mat-button-base"))
    }


    async chooseSpace(string, elem1 :ElementFinder, elem2 :ElementFinder,elem3 :ElementFinder,elem4 :ElementFinder) {
        if (string == "My Scheme Intelligence - Development") {
            await elem1.click();
            console.log("My Scheme Intelligence - Development have been found");
        }
        else if (string == "My Scheme Intelligence - Production Staging") {
            await elem2.click();
            console.log("My Scheme Intelligence - Production Staging have been found");
        }
        else if (string == "My Scheme Intelligence Dashboard") {
            await browser.wait(ExpectedConditions.elementToBeClickable(elem3), 1000).then(function () {
                elem3.click();
                console.log("My Scheme Intelligence Dashboard has been clicked");
            })
        }
        else if (string == "My Scheme Intelligence Dashboard V02") {
            await elem4.click();
            console.log("My Scheme Intelligence Dashboard V02 has been clicked");
        }
    }

}