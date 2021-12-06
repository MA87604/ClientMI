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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const inforBirstLoginPO_1 = require("../pageObjects/inforBirstLoginPO");
const chai_1 = __importDefault(require("chai"));
let inforBirstLoginpage = new inforBirstLoginPO_1.inforBirstLoginPO();
let expectall = chai_1.default.expect;
let should = chai_1.default.should;
(0, cucumber_1.Given)('user navigated to login page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://login.eu1.birst.com/");
    yield protractor_1.browser.manage().window().maximize();
}));
(0, cucumber_1.When)('user enter {string}, {string} login credentails', (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield inforBirstLoginpage.userName.sendKeys(username);
    yield inforBirstLoginpage.password.sendKeys(password);
    yield inforBirstLoginpage.loginButton.click();
    yield protractor_1.browser.manage().timeouts().implicitlyWait(30000);
}));
(0, cucumber_1.Then)('user logged in successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.titleIs('Modeler'), 120000).then(function (text) {
        console.log("Welcome to client MI");
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50TUlMb2dpblN0ZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL2NsaWVudE1JTG9naW5TdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXFEO0FBQ3JELDJDQUEwRTtBQUMxRSx3RUFBcUU7QUFDckUsZ0RBQXdCO0FBR3hCLElBQUksbUJBQW1CLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO0FBQ2xELElBQUksU0FBUyxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFBLGdCQUFLLEVBQUMsOEJBQThCLEVBQUUsR0FBTyxFQUFFO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDbEQsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRS9DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQyxpREFBaUQsRUFBRSxDQUFPLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUdqRixNQUFNLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsTUFBTSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sbUJBQW1CLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILElBQUEsZUFBSSxFQUFDLDZCQUE2QixFQUFFLEdBQU8sRUFBRTtJQUV6QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBRWhGLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQ0EsQ0FBQTtBQUVMLENBQUMsQ0FBQSxDQUNBLENBQUMifQ==