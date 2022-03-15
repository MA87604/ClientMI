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
            protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem1), 35000);
            yield elem1.click(); //click combobox filter
            yield console.log("combobox has been clicked");
            protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem2), 35000);
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
    //await ga.genderRadioBtn(mi.chooseGender, mi.search1, mi.radioBtn1, mi.radioBtn2, mi.minMaxBtn1, gender);
    genderRadioBtn(elem1, elem2, elem3, elem4, elem5, gender) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(4000);
            yield elem1.click(); //click combobox filter
            yield console.log("Gender dropdown has been clicked");
            yield protractor_1.browser.sleep(10000);
            yield elem2.click(); //click search
            yield elem2.sendKeys(gender); //enter a scheme category
            yield elem2.sendKeys(protractor_1.protractor.Key.ENTER);
            yield protractor_1.browser.sleep(10000);
            if (gender == ('Female')) {
                //await browser.wait(ExpectedConditions.presenceOf(elem3), 35000);
                yield elem3.click();
                yield console.log("Female checkbox has been selected");
            }
            else if (gender == 'Male') {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem4), 40000);
                yield elem4.click();
                yield protractor_1.browser.sleep(2000);
                yield console.log("Male checkbox has been selected");
            }
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem5), 50000).then(function () {
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
            yield elem2.click(); //click search
            yield elem2.sendKeys(age); //enter age
            yield elem2.sendKeys(protractor_1.protractor.Key.ENTER);
            protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem3), 35000);
            yield elem3.click();
            /*if (age == "All") {
              elem5.click();
            }
            else {
              await elem2.click();//click search
              await elem2.sendKeys(age);//enter age
              await elem2.sendKeys(protractor.Key.ENTER);
              browser.wait(ExpectedConditions.presenceOf(elem3), 35000);
              await elem3.click();
              
            }*/
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(elem4), 3000).then(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyQWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VPYmplY3RzL2dlbmRlckFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUMsTUFBTSxFQUFDLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsMkNBQWlJO0FBQ2pJLGdEQUF3QjtBQUN4Qix3RUFBOEM7QUFHOUMsY0FBSSxDQUFDLEdBQUcsQ0FBQywwQkFBYyxDQUFDLENBQUM7QUFDekIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixNQUFhLFNBQVM7SUFFZCxjQUFjLENBQUMsS0FBb0IsRUFBRSxLQUFvQixFQUFFLEtBQW9CLEVBQUUsS0FBb0IsRUFBRSxLQUFvQixFQUFFLEtBQW9CLEVBQUMsS0FBbUIsRUFBRSxNQUFNOztZQUVqTCxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUQsTUFBTSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQSx1QkFBdUI7WUFDM0MsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDL0Msb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFELE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUEsY0FBYztZQUNsQyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSx5QkFBeUI7WUFDdEQsSUFBSSxNQUFNLElBQUksS0FBSyxFQUFFO2dCQUNuQixNQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxD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