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
exports.landingPage = void 0;
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class landingPage {
    constructor() {
        this.header = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'Welcome to MySI: My Scheme Intelligence']"));
        this.username = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/text-report/div/div/p/span/strong"));
        this.date = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/report/text-report/div/div/p/span/span/strong"));
        this.logo = (0, protractor_1.element)(protractor_1.by.xpath("//img[@src='/SMIWeb/rest/v2/contents/af5a002e-272c-4e85-bb32-5a5103cda76c/image?imagePath=%2Fshared%2Fimages%2FLogo%20-%20L%26G.png']"));
        this.onClickTC = (0, protractor_1.element)(protractor_1.by.xpath("//a[text() = 'View Terms and Conditions']"));
        this.onClickFAQ = (0, protractor_1.element)(protractor_1.by.xpath("//a[text() = 'Read our FAQs']"));
        this.analytics = (0, protractor_1.element)(protractor_1.by.xpath("//a[text() = 'Navigation training video']"));
        this.advancedDataFilter = (0, protractor_1.element)(protractor_1.by.xpath("//a[text() = 'Advanced data filtering video']"));
        this.campaignHub = (0, protractor_1.element)(protractor_1.by.xpath("//a[text() = 'Access our campaign hub']"));
        this.link = (0, protractor_1.element)(protractor_1.by.id("db-toolbar-link-button"));
        this.export = (0, protractor_1.element)(protractor_1.by.id("db-toolbar-export-button"));
        this.bookmark = (0, protractor_1.element)(protractor_1.by.id("db-toolbar-bookmarks-btn"));
        this.filter = (0, protractor_1.element)(protractor_1.by.id("open-consumption-filter-panel"));
        this.refresh = (0, protractor_1.element)(protractor_1.by.id("page-reset-btn"));
        this.browseCollection = (0, protractor_1.element)(protractor_1.by.id("dashboards-header-edit-mode-dashboards-btn"));
        this.TCText = protractor_1.element.all(protractor_1.by.xpath("/html/body"));
        this.faqText = protractor_1.element.all(protractor_1.by.xpath("/html/body"));
        this.analyticsText = protractor_1.element.all(protractor_1.by.xpath("/html/body"));
        this.campaignText = protractor_1.element.all(protractor_1.by.xpath("/html/body"));
        //this.schemeCombobox = element(by.css("div.mat-select-value ng-tns-c214-5"));
        this.schemeCombobox = (0, protractor_1.element)(protractor_1.by.id("mat-select-0"));
        this.overlay = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/div[3]"));
        this.close = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'Close']"));
        this.copyURLBtn = (0, protractor_1.element)(protractor_1.by.css("button.mat-focus-indicator.copy-button.mat-flat-button.mat-button-base.mat-primary.birst-button.birst-button-primary > span.mat-button-wrapper > span"));
        this.plusBtn = (0, protractor_1.element)(protractor_1.by.id("xpath-create-bookmark-button"));
        this.bookmarkText = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/div[2]/div/div/bookmark-manager/mat-card/mat-card-content/mat-list/mat-list-item/div/create-bookmark-input/birst-text-input/mat-form-field/div/div[1]/div/input"));
        this.bookmarkOk = (0, protractor_1.element)(protractor_1.by.id("confirm-btn-birst-text-input"));
        this.bookmarkCancel = (0, protractor_1.element)(protractor_1.by.id("cancel-btn-birst-text-input"));
        this.bookmarkClose = (0, protractor_1.element)(protractor_1.by.css("#xpath-bookmarks > mat-card-header > button:nth-child(3)"));
        //this.filterData = element(by.xpath("/html/body/div[2]/div/div/filter-list/mat-card/mat-card-content/mat-action-list/button[2]/div/div[2]/small"));
        this.filterData = protractor_1.element.all(protractor_1.by.css("#filter-list > mat-card-content > mat-action-list > button:nth-child(2) > div > div.mat-list-text > small"));
        this.filterClose = (0, protractor_1.element)(protractor_1.by.id("close-filter-drawer-button"));
        this.collectionData = protractor_1.element.all(protractor_1.by.css("mat-card-content.mat-card-content.mat-card-content-full.mat-elevation-z0.ng-star-inserted > mat-accordion > collection-panel > mat-expansion-panel > mat-expansion-panel-header > span > mat-panel-title > birst-panel-title-text"));
        this.collectionData1 = protractor_1.element.all(protractor_1.by.css("mat-card-content.mat-card-content.mat-card-content-full.mat-elevation-z0.ng-star-inserted > mat-accordion > collection-panel > mat-expansion-panel > div > div > mat-nav-list > dashboard-panel > mat-list-item > div > div.mat-list-text > a"));
        this.collectionClose = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/div[2]/collection-manager/mat-card/mat-card-header/button[1]"));
        //this.schemeCombobox = element(by.id("mat-select-0"));
        this.radioBtn = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[7]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
        //this.radioBtn = element(by.id('mat-radio-36')).element(by.className('mat-radio-label'));
        this.schemeButton = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[7]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div"));
        // this.radioBtn = element(by.css("label.mat-radio-label"));
        this.download = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/pdf-viewer//viewer-toolbar//div/div[3]/viewer-download-controls//cr-icon-button//div/iron-icon//svg"));
        //this.download = element(by.id('viewer')).element(by.id('download'));
        //this.download = element(by.css("cr-icon-button#download"));
        this.tcPdf = (0, protractor_1.element)(protractor_1.by.id("plugin"));
        this.faqPdf = (0, protractor_1.element)(protractor_1.by.id("plugin"));
        this.searchbutton = (0, protractor_1.element)(protractor_1.by.id("mat-input-1"));
        this.maxMinButton = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[7]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
        this.viewAnalysisBtn = (0, protractor_1.element)(protractor_1.by.id("Default"));
        this.groupName = (0, protractor_1.element)(protractor_1.by.css("div.text-center.kpi-details-section.ng-star-inserted:nth-child(1)"));
        this.exportToggle = (0, protractor_1.element)(protractor_1.by.id("mat-slide-toggle-4"));
        this.printPDF = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'Printable PDF']"));
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
    readPDFFile(pdfFilePath) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    //To execute above function  C:\Users\MA87604\Downloads\Terms and Conditions.pdf
    //let pdfF = element(by.xpath("//img[@src='/SMIWeb/rest/v2/contents/af5a002e-272c-4e85-bb32-5a5103cda76c/image?imagePath=%2Fshared%2Fimages%2FLogo%20-%20L%26G.png']"));
    //readPDFFile(pdfFilePath);
    tilesData(elem1, elem2, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_2.browser.switchTo().frame(elem1);
            yield elem2.each(function (element) {
                element.getText().then(function (text) {
                    console.log(string);
                    console.log(text);
                });
            });
            yield protractor_2.browser.switchTo().defaultContent();
        });
    }
    fieldText(frame, elem1, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_2.browser.switchTo().frame(frame);
            yield elem1.each(function (element) {
                element.getText().then(function (text) {
                    console.log(string);
                    console.log(text);
                });
            });
            yield protractor_2.browser.switchTo().defaultContent();
        });
    }
}
exports.landingPage = landingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZ1BPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VPYmplY3RzL2xhbmRpbmdQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEc7QUFDMUcsMkNBQXFDO0FBQ3JDLGdEQUF3QjtBQUN4Qix3RUFBOEM7QUFHOUMsY0FBSSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUd6QixNQUFhLFdBQVc7SUF1RXBCO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2SUFBNkksQ0FBQyxDQUFDLENBQUM7UUFDakwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrSkFBa0osQ0FBQyxDQUFDLENBQUM7UUFDbEwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1SUFBdUksQ0FBQyxDQUFDLENBQUM7UUFDdkssSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFD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