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
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseSpaces = void 0;
const protractor_1 = require("protractor");
class chooseSpaces {
    constructor() {
        this.spaces = (0, protractor_1.element)(protractor_1.by.id("projects-tab"));
        this.MySchemeIntelDev = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'My Scheme Intelligence - Development']"));
        this.MySchemeIntelProd = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'My Scheme Intelligence - Production Staging']"));
        this.MySchemeIntelDash = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'My Scheme Intelligence Dashboard']"));
        this.MySchemeIntelDashv02 = (0, protractor_1.element)(protractor_1.by.xpath("//span[text() = 'My Scheme Intelligence Dashboard V02']"));
        this.dashboard = (0, protractor_1.element)(protractor_1.by.css("button.mat-list-item.mat-focus-indicator.xpath-global-nav-dashboards-btn.active.mat-list-item-avatar.mat-list-item-with-avatar"));
        this.closeNav = (0, protractor_1.element)(protractor_1.by.css("button.mat-focus-indicator.mat-tooltip-trigger.global-nav-close.inset-button.mat-button.mat-button-base"));
        //this.closeNav = element(by.css("button.mat-focus-indicator.mat-tooltip-trigger.global-nav-close.inset-button.mat-button.mat-button-base"))
    }
    chooseSpace(string, elem1, elem2, elem3, elem4) {
        return __awaiter(this, void 0, void 0, function* () {
            if (string == "My Scheme Intelligence - Development") {
                yield elem1.click();
                console.log("My Scheme Intelligence - Development have been found");
            }
            else if (string == "My Scheme Intelligence - Production Staging") {
                yield elem2.click();
                console.log("My Scheme Intelligence - Production Staging have been found");
            }
            else if (string == "My Scheme Intelligence Dashboard") {
                yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(elem3), 1000).then(function () {
                    elem3.click();
                    console.log("My Scheme Intelligence Dashboard has been clicked");
                });
            }
            else if (string == "My Scheme Intelligence Dashboard V02") {
                yield elem4.click();
                console.log("My Scheme Intelligence Dashboard V02 has been clicked");
            }
        });
    }
}
exports.chooseSpaces = chooseSpaces;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VzUE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZU9iamVjdHMvc3BhY2VzUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9GO0FBSXBGLE1BQWEsWUFBWTtJQVVyQjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQyxDQUFDO1FBQ3pHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0lBQWdJLENBQUMsQ0FBQyxDQUFDO1FBQ25LLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUdBQXlHLENBQUMsQ0FBQyxDQUFDO1FBQzNJLDRJQUE0STtJQUNoSixDQUFDO0lBR0ssV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFvQixFQUFFLEtBQW9CLEVBQUMsS0FBb0IsRUFBQyxLQUFvQjs7WUFDMUcsSUFBSSxNQUFNLElBQUksc0NBQXNDLEVBQUU7Z0JBQ2xELE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7YUFDdkU7aUJBQ0ksSUFBSSxNQUFNLElBQUksNkNBQTZDLEVBQUU7Z0JBQzlELE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7YUFDOUU7aUJBQ0ksSUFBSSxNQUFNLElBQUksa0NBQWtDLEVBQUU7Z0JBQ25ELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMxRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDLENBQUMsQ0FBQTthQUNMO2lCQUNJLElBQUksTUFBTSxJQUFJLHNDQUFzQyxFQUFFO2dCQUN2RCxNQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0wsQ0FBQztLQUFBO0NBRUo7QUE1Q0Qsb0NBNENDIn0=