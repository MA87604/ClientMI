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
exports.shadowDom = void 0;
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class shadowDom {
    constructor() {
    }
    findShadowDomElement(shadowHostSelector, shadowElementSelector) {
        return __awaiter(this, void 0, void 0, function* () {
            let shadowHost = protractor_2.browser.findElement(protractor_1.by.css(shadowHostSelector));
            let shadowRoot = yield protractor_2.browser.executeScript("return document.querySelector('#viewer').shadowRoot.querySelector('#toolbar').shadowRoot.querySelector('#downloads').shadowRoot.querySelector('#download')", shadowHost);
            return shadowRoot.findElement(protractor_1.by.css(shadowElementSelector));
        });
    }
}
exports.shadowDom = shadowDom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93RG9tRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlT2JqZWN0cy9zaGFkb3dEb21FbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwRztBQUMxRywyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLHdFQUE4QztBQUc5QyxjQUFJLENBQUMsR0FBRyxDQUFDLDBCQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBR3pCLE1BQWEsU0FBUztJQUVwQjtJQUdBLENBQUM7SUFFSyxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUI7O1lBQ3BFLElBQUksVUFBVSxHQUFHLG9CQUFPLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksVUFBVSxHQUFRLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsNEpBQTRKLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNU4sT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtDQUNBO0FBWkQsOEJBWUMifQ==