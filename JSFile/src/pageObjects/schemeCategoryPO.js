"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemeCategory = void 0;
const { Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class schemeCategory {
    constructor() {
        this.table1Header = (0, protractor_1.element)(protractor_1.by.id("tableChart_148")).all(protractor_1.by.css("div.table-cell-outer-div.headerText > div > span"));
        this.table2Header = (0, protractor_1.element)(protractor_1.by.id("tableChart_149")).all(protractor_1.by.css("div.table-cell-outer-div.headerText > div > span"));
        this.table3Header = (0, protractor_1.element)(protractor_1.by.id("tableChart_150")).all(protractor_1.by.css("div.table-cell-outer-div.headerText > div > span"));
        this.row1 = (0, protractor_1.element)(protractor_1.by.id("tableChart_148")).all(protractor_1.by.css("div.table-cell-outer-div.bodyText > div > span"));
        this.row2 = (0, protractor_1.element)(protractor_1.by.id("tableChart_149")).all(protractor_1.by.css("div.table-cell-outer-div.bodyText > div > span"));
        this.row3 = (0, protractor_1.element)(protractor_1.by.id("tableChart_150")).all(protractor_1.by.css("div.table-cell-outer-div.bodyText > div > span"));
        this.radioBtn = (0, protractor_1.element)(protractor_1.by.css("label.mat-radio-label"));
        this.schemeCategory = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
        this.search = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
        this.radioBtn = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button[1]/label/span[1]"));
        this.maxMinButton = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[4]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
        this.username = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[2]/strong/span"));
        this.dataAsOf = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/report/text-report/div/div/p[3]/strong/span/strong"));
        this.logo = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/report/image-report/img"));
    }
}
exports.schemeCategory = schemeCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1lQ2F0ZWdvcnlQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlT2JqZWN0cy9zY2hlbWVDYXRlZ29yeVBPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMvQywyQ0FBMkc7QUFFM0csZ0RBQXdCO0FBQ3hCLHdFQUE4QztBQUc5QyxjQUFJLENBQUMsR0FBRyxDQUFDLDBCQUFjLENBQUMsQ0FBQztBQUN6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLE1BQWEsY0FBYztJQWdCekI7UUFFRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZKQUE2SixDQUFDLENBQUMsQ0FBQztRQUN2TSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFNQUFxTSxDQUFDLENBQUMsQ0FBQztRQUN2TyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFOQUFxTixDQUFDLENBQUMsQ0FBQztRQUN6UCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlLQUF5SyxDQUFDLENBQUMsQ0FBQztRQUVqTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdKQUFnSixDQUFDLENBQUMsQ0FBQztRQUNwTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVKQUF1SixDQUFDLENBQUMsQ0FBQztRQUMzTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDRIQUE0SCxDQUFDLENBQUMsQ0FBQztJQUU5SixDQUFDO0NBQ0Y7QUFwQ0Qsd0NBb0NDIn0=