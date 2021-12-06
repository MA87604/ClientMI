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
exports.genderAge = void 0;
const { Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class genderAge {
    genderComboBox(elem1, elem2, elem3, elem4, elem5, elem6, elem7, string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(4000);
            yield elem1.click(); //click combobox filter
            yield console.log("combobox has been clicked");
            yield protractor_1.browser.sleep(10000);
            yield elem2.click(); //click search
            yield elem2.sendKeys(string); //enter a scheme category
            if (string == 'All') {
                yield elem7.click();
                yield console.log("All checkbox has been selected");
            }
            else if (string == 'Male') {
                yield elem3.click();
                yield console.log("Male checkbox has been selected");
            }
            else if (string == 'Female') {
                yield elem4.click();
                yield console.log("Female checkbox has been selected");
            }
            else {
                yield elem5.click();
                yield console.log("Unknown checkbox has been selected");
            }
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem6), 30000).then(function () {
                elem6.click();
                console.log("Apply button has been clicked");
                protractor_1.browser.sleep(3000);
            });
        });
    }
    genderRadioBtn(elem1, elem2, elem3, elem4, elem5, gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(4000);
            yield elem1.click(); //click combobox filter
            yield console.log("Gender dropdown has been clicked");
            yield protractor_1.browser.sleep(10000);
            yield elem2.click(); //click search
            yield elem2.sendKeys(gender); //enter a scheme category
            yield elem2.sendKeys(protractor_1.protractor.Key.ENTER);
            yield protractor_1.browser.sleep(3000);
            if (gender == 'Male') {
                yield protractor_1.browser.sleep(3000);
                yield elem4.click();
                yield protractor_1.browser.sleep(2000);
                yield console.log("Male checkbox has been selected");
            }
            else if (gender == ('Female')) {
                yield protractor_1.browser.sleep(4000);
                yield elem3.click();
                yield console.log("Female checkbox has been selected");
                yield protractor_1.browser.sleep(4000);
            }
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem5), 30000).then(function () {
                elem5.click();
                protractor_1.browser.sleep(3000);
            });
        });
    }
    ageFilter(elem1, elem2, elem3, elem4, elem5, age) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(4000);
            yield elem1.click(); //click combobox filter
            yield console.log("Age dropdown has been clicked");
            yield protractor_1.browser.sleep(10000);
            //await browser.actions().mouseMove(sc.search).perform();
            //await sc.maxMinButton.click();
            if (age == "All") {
                elem5.click();
            }
            else {
                yield elem2.click(); //click search
                yield elem2.sendKeys(age); //enter a scheme category
                yield elem2.sendKeys(protractor_1.protractor.Key.ENTER);
                yield protractor_1.browser.sleep(2000);
                yield elem3.click();
                yield protractor_1.browser.sleep(2000);
            }
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem4), 30000).then(function () {
                elem4.click();
                console.log("Apply button has been clicked");
            });
            yield protractor_1.browser.sleep(2000);
        });
    }
    memStatus(elem1, elem2, elem3, elem4, status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(4000);
            yield elem1.click(); //click combobox filter
            yield console.log("Member Status dropdown has been clicked");
            yield protractor_1.browser.sleep(10000);
            //await browser.actions().mouseMove(sc.search).perform();
            //await sc.maxMinButton.click();
            yield elem2.click(); //click search
            yield elem2.sendKeys(status); //enter a scheme category
            yield elem2.sendKeys(protractor_1.protractor.Key.ENTER);
            yield protractor_1.browser.sleep(2000);
            yield elem3.click();
            yield protractor_1.browser.sleep(2000);
            yield elem4.click();
            yield protractor_1.browser.sleep(2000);
        });
    }
}
exports.genderAge = genderAge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyQWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VPYmplY3RzL2dlbmRlckFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsMkNBQWlJO0FBQ2pJLGdEQUF3QjtBQUN4Qix3RUFBOEM7QUFHOUMsY0FBSSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixNQUFhLFNBQVM7SUFFZCxjQUFjLENBQUMsS0FBb0IsRUFBRSxLQUFvQixFQUFFLEtBQW9CLEVBQUUsS0FBb0IsRUFBRSxLQUFvQixFQUFFLEtBQW9CLEVBQUMsS0FBbUIsRUFBRSxNQUFNOztZQUNqTCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUEsdUJBQXVCO1lBQzNDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsTUFBTSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQSxjQUFjO1lBQ2xDLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLHlCQUF5QjtZQUN0RCxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzthQUNyRDtpQkFFSSxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7Z0JBQ3pCLE1BQU0sS0FBSyxD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