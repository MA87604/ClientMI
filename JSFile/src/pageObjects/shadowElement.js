"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadowElement = void 0;
const protractor_1 = require("protractor");
class getShadowElement {
}
exports.getShadowElement = getShadowElement;
async;
getShadowRoot(WebDriver, driver, shadowHost, protractor_1.WebElement);
{
    JavascriptExecutor;
    js = (JavascriptExecutor);
    driver;
    return (protractor_1.WebElement);
    js.executeScript("return arguments[0].shadowRoot", shadowHost);
}
async;
getShadowElements(shadowHost, protractor_1.WebElement, cssOfShadowElement, String);
{
    protractor_1.WebElement;
    shardowRoot = getShadowRoot(driver, shadowHost);
    return shardowRoot.findElement(By.cssSelector(cssOfShadowElement));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93RWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlT2JqZWN0cy9zaGFkb3dFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFpRztBQUlqRyxNQUFhLGdCQUFnQjtDQUM1QjtBQURELDRDQUNDO0FBR0QsS0FBSyxDQUFBO0FBQUMsYUFBYSxDQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLHVCQUFVLENBQUUsQ0FBQTtBQUFDO0lBQzNELGtCQUFrQixDQUFBO0lBQUMsRUFBRSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUFDLE1BQU0sQ0FBQztJQUNwRCxPQUFPLENBQUMsdUJBQVUsQ0FBQyxDQUFBO0lBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUNwRjtBQUNELEtBQUssQ0FBQTtBQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBQyx1QkFBVSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sQ0FBRSxDQUFBO0FBQUM7SUFDekUsdUJBQVUsQ0FBQTtJQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztDQUNwRSJ9