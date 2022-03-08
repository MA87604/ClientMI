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
exports.basicFields = void 0;
const { Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const landingPO_1 = require("./landingPO");
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
let dp = new landingPO_1.landingPage();
class basicFields {
    basicField(elem1, elem2, elem3) {
        return __awaiter(this, void 0, void 0, function* () {
            let username_fontType = yield elem1.getCssValue("font-family");
            let username_fontSize = yield elem1.getCssValue("font-size");
            yield console.log("Username font type is - " + username_fontType + " and font size is - " + username_fontSize);
            yield elem1.getText().then(function (text) {
                //expect(text).to.equal('Monika Ahlawat');
                console.log("Username is - " + text);
            });
            let date_fontType = yield elem2.getCssValue("font-family");
            let date_fontSize = yield elem2.getCssValue("font-size");
            yield console.log("Data as of font type is - " + date_fontType + " and font size is - " + date_fontSize);
            yield elem2.getText().then(function (text) {
                console.log("Data as of - " + text);
            });
            yield elem3.isDisplayed().then(function (isVisible) {
                if (isVisible) {
                    console.log("Logo is present");
                }
                else {
                    console.log("Logo is not present");
                }
            });
        });
    }
    basicFieldWithoutFonts(elem1, elem2, elem3) {
        return __awaiter(this, void 0, void 0, function* () {
            let username_fontType = yield elem1.getCssValue("font-family");
            let username_fontSize = yield elem1.getCssValue("font-size");
            //await console.log("Username font type is - " + username_fontType + " and font size is - " + username_fontSize);
            yield elem1.getText().then(function (text) {
                //expect(text).to.equal('Monika Ahlawat');
                console.log("Username is - " + text);
            });
            let date_fontType = yield elem2.getCssValue("font-family");
            let date_fontSize = yield elem2.getCssValue("font-size");
            // await console.log("Data as of font type is - " + date_fontType + " and font size is - " + date_fontSize);
            yield elem2.getText().then(function (text) {
                console.log("Data as of - " + text);
            });
            yield elem3.isDisplayed().then(function (isVisible) {
                if (isVisible) {
                    console.log("Logo is present");
                }
                else {
                    console.log("Logo is not present");
                }
            });
        });
    }
    exportButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield dp.export.click();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(dp.export), 30000).then(function () {
                dp.exportToggle.isSelected().then(selected => {
                    if (selected) {
                        console.log('Export is already selected');
                    }
                    else {
                        dp.exportToggle.click();
                        console.log("Export is selected now");
                    }
                });
            });
            yield dp.printPDF.click();
            yield console.log("pdf is downloading");
            yield protractor_1.browser.sleep(40000);
            yield console.log("pdf is downloaded");
        });
    }
    linkButton(string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dp.link.click();
            yield console.log("Link in the toolbar has been clicked");
            yield protractor_1.browser.sleep(3000);
            //await browser.driver.switchTo().activeElement();
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(dp.copyURLBtn), 30000).then(function () {
                //dp.copyURLBtn.click();
                if (string == 'Copy URL') {
                    dp.copyURLBtn.click();
                    console.log("Link has been copied");
                }
                else {
                    dp.close.click();
                    console.log("Link has been closed");
                }
            });
        });
    }
    bookmarks(string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dp.bookmark.click();
            yield console.log("Bookmark in the toolbar has been clicked");
            //await browser.sleep(3000);
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(dp.plusBtn), 30000).then(function () {
                dp.plusBtn.click();
                dp.bookmarkText.sendKeys(protractor_1.protractor.Key.CONTROL, "a", protractor_1.protractor.Key.DELETE);
                dp.bookmarkText.sendKeys(string);
                dp.bookmarkOk.click();
            });
            yield dp.bookmarkClose.click();
            //await browser.sleep(3000);
            yield console.log("bookmark has been closed");
        });
    }
    filter(string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dp.filter.click();
            yield console.log("Filter in the toolbar has been clicked");
            yield protractor_1.browser.sleep(3000);
            yield dp.filterData.getText().then(function (text) {
                //expect(text).to.equal(string);
                console.log("Username is - " + text);
            });
            yield dp.filterClose.click();
            console.log("filter has been closed");
        });
    }
    browseCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield dp.browseCollection.click();
            yield console.log("Browse Collections & Dashboards in the toolbar has been clicked");
            yield protractor_1.browser.sleep(3000);
            yield dp.collectionData.getText().then(function (text) {
                //expect(text).to.equal(string);
                dp.collectionData1.getText().then(function (text1) {
                    console.log("Browse collections and Dashboards fields are - ");
                    console.log(text);
                    console.log(text1);
                });
            });
            yield dp.collectionClose.click();
            console.log("Collection has been closed");
        });
    }
    tableData(elem1) {
        return __awaiter(this, void 0, void 0, function* () {
            yield elem1.getText().then(function (text) {
                console.log(text);
            });
        });
    }
}
exports.basicFields = basicFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbEZ1bmN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlT2JqZWN0cy9nZW5lcmFsRnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMvQywyQ0FBa0g7QUFDbEgsZ0RBQXdCO0FBQ3hCLHdFQUE4QztBQUU5QywyQ0FBMEM7QUFFMUMsY0FBSSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUUzQixNQUFhLFdBQVc7SUFFaEIsVUFBVSxDQUFDLEtBQW9CLEVBQUUsS0FBb0IsRUFBRSxLQUFvQjs7WUFFL0UsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0QsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFN0QsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLGlCQUFpQixHQUFHLHNCQUFzQixHQUFHLGlCQUFpQixDQUFDLENBQUM7WUFFL0csTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDdkMsMENBQTBDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBRXZDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxhQUFhLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNELElBQUksYUFBYSxHQUFHLE1BQU0sS0FBSyxDQUFD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