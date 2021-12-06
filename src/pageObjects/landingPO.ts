import { by, element, ElementFinder, ElementArrayFinder, WebElement,WebElementPromise } from "protractor";
import { browser } from 'protractor';
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;


export class landingPage {

    header: ElementFinder;
    username: ElementFinder;
    date: ElementFinder;
    logo: ElementFinder;
    termAndCondition: ElementFinder;
    TCText: ElementArrayFinder;
    faqText: ElementArrayFinder;
    analyticsText: ElementArrayFinder;
    campaignText: ElementArrayFinder;
    analytics: ElementFinder;
    advancedDataFilter: ElementFinder;
    campaignHub: ElementFinder;
    SchemeCombobox: ElementFinder;
    maximizeTC: ElementFinder;
    maximizeFAQ: ElementFinder;
    maximizeA: ElementFinder;
    maximizeHub: ElementFinder;
    link: ElementFinder;
    export: ElementFinder;
    bookmark: ElementFinder;
    filter: ElementFinder;
    helpTips: ElementFinder;
    refresh: ElementFinder;
    browseCollection: ElementFinder;
    onClickTC: ElementFinder;
    onClickFAQ: ElementFinder;
    onClickNavTrain: ElementFinder;
    onClickAdvanceData: ElementFinder;
    onClickCampaignHub: ElementFinder;
    schemeCombobox: ElementFinder;
    schemeButton: ElementFinder;
    tcPdf: ElementFinder;
    faqPdf: ElementFinder;
    searchbutton: ElementFinder;
    viewAnalysisBtn: ElementFinder;
    groupName: ElementFinder;
    search: ElementFinder;
    radioBtn: ElementFinder;
    download: ElementFinder;
    exportToggle: ElementFinder;
    printPDF: ElementFinder;
    maxMinButton: ElementFinder;
    overlay: ElementFinder;
    plusBtn: ElementFinder;
    bookmarkText: ElementFinder;
    bookmarkOk: ElementFinder;
    bookmarkCancel: ElementFinder;
    bookmarkClose: ElementFinder;
    close: ElementFinder;
    copyURLBtn: ElementFinder;
    //filterData: ElementFinder;
    filterClose: ElementFinder;
    filterData: ElementArrayFinder;
    collectionData: ElementArrayFinder;
    collectionData1: ElementArrayFinder;
    collectionClose: ElementFinder;
    frame1: WebElementPromise;
    frame2: WebElementPromise;
    frame3: WebElementPromise;
    frame4: WebElementPromise;
    frame5: WebElementPromise;
    frame6: WebElementPromise;
    frame7: WebElementPromise;
    frame8: WebElementPromise;
    frame9: WebElementPromise;
    frame10: WebElementPromise;

    

    constructor() {

        this.header = element(by.xpath("//span[text() = 'Welcome to MySI: My Scheme Intelligence']"));
        this.username = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/text-report/div/div/p/span/strong"));
        this.date = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/text-report/div/div/p/span/span/strong"));
        this.logo = element(by.xpath("//img[@src='/SMIWeb/rest/v2/contents/af5a002e-272c-4e85-bb32-5a5103cda76c/image?imagePath=%2Fshared%2Fimages%2FLogo%20-%20L%26G.png']"));
        this.onClickTC = element(by.xpath("//a[text() = 'View Terms and Conditions']"));
        this.onClickFAQ = element(by.xpath("//a[text() = 'Read our FAQs']"));
        this.analytics = element(by.xpath("//a[text() = 'Navigation training video']"));
        this.advancedDataFilter = element(by.xpath("//a[text() = 'Advanced data filtering video']"));
        this.campaignHub = element(by.xpath("//a[text() = 'Access our campaign hub']"));
        this.link = element(by.id("db-toolbar-link-button"));
        this.export = element(by.id("db-toolbar-export-button"));
        this.bookmark = element(by.id("db-toolbar-bookmarks-btn"));
        this.filter = element(by.id("open-consumption-filter-panel"));
        this.refresh = element(by.id("page-reset-btn"));
        this.browseCollection = element(by.id("dashboards-header-edit-mode-dashboards-btn"));

        this.TCText = element.all(by.xpath("/html/body"));
        this.faqText = element.all(by.xpath("/html/body"));
        this.analyticsText = element.all(by.xpath("/html/body"));
        this.campaignText = element.all(by.xpath("/html/body"));
        //this.schemeCombobox = element(by.css("div.mat-select-value ng-tns-c214-5"));
        this.schemeCombobox = element(by.id("mat-select-0"));
        this.overlay = element(by.xpath("/html/body/div[3]"));
        this.close = element(by.xpath("//span[text() = 'Close']"));
        this.copyURLBtn = element(by.css("button.mat-focus-indicator.copy-button.mat-flat-button.mat-button-base.mat-primary.birst-button.birst-button-primary > span.mat-button-wrapper > span"));
        this.plusBtn = element(by.id("xpath-create-bookmark-button"));
        this.bookmarkText = element(by.xpath("/html/body/div[2]/div/div/bookmark-manager/mat-card/mat-card-content/mat-list/mat-list-item/div/create-bookmark-input/birst-text-input/mat-form-field/div/div[1]/div/input"));
        this.bookmarkOk = element(by.id("confirm-btn-birst-text-input"));
        this.bookmarkCancel = element(by.id("cancel-btn-birst-text-input"));
        this.bookmarkClose = element(by.css("#xpath-bookmarks > mat-card-header > button:nth-child(3)"));
        //this.filterData = element(by.xpath("/html/body/div[2]/div/div/filter-list/mat-card/mat-card-content/mat-action-list/button[2]/div/div[2]/small"));
        this.filterData = element.all(by.css("#filter-list > mat-card-content > mat-action-list > button:nth-child(2) > div > div.mat-list-text > small"));
        this.filterClose = element(by.id("close-filter-drawer-button"));
        
        this.collectionData = element.all(by.css("mat-card-content.mat-card-content.mat-card-content-full.mat-elevation-z0.ng-star-inserted > mat-accordion > collection-panel > mat-expansion-panel > mat-expansion-panel-header > span > mat-panel-title > birst-panel-title-text"));
        this.collectionData1 = element.all(by.css("mat-card-content.mat-card-content.mat-card-content-full.mat-elevation-z0.ng-star-inserted > mat-accordion > collection-panel > mat-expansion-panel > div > div > mat-nav-list > dashboard-panel > mat-list-item > div > div.mat-list-text > a"));
        this.collectionClose = element(by.xpath("/html/body/ui-view/div[2]/collection-manager/mat-card/mat-card-header/button[1]"));


        
        
        //this.schemeCombobox = element(by.id("mat-select-0"));
        this.radioBtn = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[7]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
        //this.radioBtn = element(by.id('mat-radio-36')).element(by.className('mat-radio-label'));

        this.schemeButton = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[7]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div"));
        // this.radioBtn = element(by.css("label.mat-radio-label"));
        this.download = element(by.xpath("/html/body/pdf-viewer//viewer-toolbar//div/div[3]/viewer-download-controls//cr-icon-button//div/iron-icon//svg"));
        //this.download = element(by.id('viewer')).element(by.id('download'));
        //this.download = element(by.css("cr-icon-button#download"));
        this.tcPdf = element(by.id("plugin"));
        this.faqPdf = element(by.id("plugin"));
        this.searchbutton = element(by.id("mat-input-1"));
        this.maxMinButton = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[7]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
     
        this.viewAnalysisBtn = element(by.id("Default"));
        this.groupName = element(by.css("div.text-center.kpi-details-section.ng-star-inserted:nth-child(1)"));
        this.exportToggle = element(by.id("mat-slide-toggle-4"));
        this.printPDF = element(by.xpath("//span[text() = 'Printable PDF']"));

        //this.frame1  = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[25]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame10 = element(by.xpath("//iframe[@src='https://entry.landg.com/CAWeb/LandGEntry?targetApp=MANAGEYOURSCHEME_DOCUMENTLIBRARY_ENTRY&reference=MySI_EULA_Document.pdf']")).getWebElement();
        //this.frame2 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[37]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame3 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[38]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame4 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[39]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame5= element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[40]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame6 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame7 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame8 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[34]/dashlet/div/report/web-page-report/iframe")).getWebElement();
        //this.frame9 = element(by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[35]/dashlet/div/report/web-page-report/iframe")).getWebElement();
    
    }
    
    


    /*async readPdfFile(pdffilepath) {

        const fs = require('fs');
        await fs.readFileSync(pdffilepath), function (err, data) {
            if (err)
                console.log(err);
            else
                console.log(data);
        }
    }*/


    async readPDFFile(pdfFilePath) {
        let PDFParser = require("pdf2json"); //store pdf2json library into variable which contains all methods of reading PDF file.
        let fs = require("fs"); //create file system object
        let FileParser = new PDFParser(this, 1); // Create object of PDFParser defined in first line.
     
        //if any error occured while reading data
        FileParser.on("pdfParser_dataError", errData => console.error(errData.parserError)); //execute only when receive any error while reading PDF file.
        //If data read successfully
        FileParser.on("pdfParser_dataReady", pdfText => {
            //to print data on console
            console.log(FileParser.getRawTextContent().toString());
            //To print data in json file
            fs.writeFile("C:\Users\MA87604\Downloads\pdfData.json", JSON.stringify(pdfText));
        });
        FileParser.loadPDF(pdfFilePath);
    }
    //To execute above function  C:\Users\MA87604\Downloads\Terms and Conditions.pdf
        
    
    //let pdfF = element(by.xpath("//img[@src='/SMIWeb/rest/v2/contents/af5a002e-272c-4e85-bb32-5a5103cda76c/image?imagePath=%2Fshared%2Fimages%2FLogo%20-%20L%26G.png']"));
    //readPDFFile(pdfFilePath);

    

    async tilesData(elem1: WebElementPromise, elem2: ElementFinder, string) {
    
        await browser.switchTo().frame(elem1);
        await elem2.each(function (element) {
            element.getText().then(function (text) {
                console.log(string)
                console.log(text);
            })
        })
        await browser.switchTo().defaultContent();
    }


    async fieldText(frame: WebElementPromise, elem1: ElementArrayFinder, string) {

        await browser.switchTo().frame(frame);
        await elem1.each(function (element) {
            element.getText().then(function (text) {
                console.log(string);
                console.log(text);
            });
        })
        await browser.switchTo().defaultContent();
    }


    
}
