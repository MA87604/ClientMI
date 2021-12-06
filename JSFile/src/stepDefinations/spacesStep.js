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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const spacesPO_1 = require("../pageObjects/spacesPO");
let space = new spacesPO_1.chooseSpaces();
(0, cucumber_1.Given)('user logged in successfully to clientMI Website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(space.spaces), 6000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield space.spaces.click();
        yield console.log("Spaces have been found");
    }));
}));
(0, cucumber_1.When)('user select {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield space.chooseSpace(string, space.MySchemeIntelDev, space.MySchemeIntelProd, space.MySchemeIntelDash, space.MySchemeIntelDashv02);
}));
(0, cucumber_1.Then)('user navigated to the workplace dashboards', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(space.closeNav), 30000);
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.titleIs('Entry Screen'), 100000).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield space.closeNav.click();
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2VzU3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGVwRGVmaW5hdGlvbnMvc3BhY2VzU3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlEQUFxRDtBQUNyRCwyQ0FBMEU7QUFDMUUsc0RBQXVEO0FBR3ZELElBQUksS0FBSyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO0FBRS9CLElBQUEsZ0JBQUssRUFBQyxpREFBaUQsRUFBRSxHQUFTLEVBQUU7SUFDaEUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFRLEVBQUU7UUFFM0YsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQSxDQUNBLENBQUE7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsc0JBQXNCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUUxQyxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTFJLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDRixJQUFBLGVBQUksRUFBQyw0Q0FBNEMsRUFBRSxHQUFTLEVBQUU7SUFFMUQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkYsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtRQUVuRixNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==