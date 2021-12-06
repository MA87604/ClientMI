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
exports.navigateClass = void 0;
const { Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class navigateClass {
    navigateTo(string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(8000);
            yield protractor_1.browser.getCurrentUrl().then(function (currentUrl) {
                expect(currentUrl).to.equal(string);
            });
            yield protractor_1.browser.sleep(8000);
        });
    }
    ;
    navigateBack(string) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.navigate().back(); //Back method used here
            yield protractor_1.browser.sleep(8000);
            yield protractor_1.browser.getCurrentUrl().then(function (currentUrl) {
                expect(currentUrl).to.equal(string);
            });
            yield console.log("Navigated back to Dashboard Page.");
        });
    }
    ;
    navigateToNewTab(string, string1) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getAllWindowHandles().then(function (handles) {
                protractor_1.browser.sleep(4000);
                let newWindowHandle = handles[1]; // this is your new window
                protractor_1.browser.switchTo().window(newWindowHandle).then(function () {
                    protractor_1.browser.getCurrentUrl().then(function (currentUrl) {
                        expect(currentUrl).to.equal(string);
                    });
                    //expect(browser.getCurrentUrl()).to.equal("https://legalandgeneral.blob.core.windows.net/live-bc-publicdata/assets/110437/video.mp4");
                    console.log(string1 + " tab is opened.");
                    protractor_1.browser.driver.close();
                });
                protractor_1.browser.driver.switchTo().window(handles[0]);
            });
            yield console.log("Navigated back to Dashboard Page.");
        });
    }
}
exports.navigateClass = navigateClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGVUby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlT2JqZWN0cy9uYXZpZ2F0ZVRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMvQywyQ0FBaUo7QUFDakosZ0RBQXdCO0FBQ3hCLHdFQUE4QztBQUc5QyxjQUFJLENBQUMsR0FBRyxDQUFDLDBCQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQWEsYUFBYTtJQUlsQixVQUFVLENBQUMsTUFBTTs7WUFFckIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTtnQkFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUE7WUFDRixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRzVCLENBQUM7S0FBQTtJQUFBLENBQUM7SUFDSSxZQUFZLENBQUMsTUFBTTs7WUFFdkIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsdUJBQXVCO1lBQ3hELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLFVBQVU7Z0JBQ3JELE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFBO1lBQ0YsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFFekQsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUdJLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPOztZQUVwQyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO2dCQUN4RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO2dCQUM1RCxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBRTlDLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBVTt3QkFDL0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFBO29CQUNGLHVJQUF1STtvQkFDdkksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztvQkFDekMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBRXpCLENBQUMsQ0FBQyxDQUFDO2dCQUNILG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtDQUNGO0FBOUNELHNDQThDQyJ9