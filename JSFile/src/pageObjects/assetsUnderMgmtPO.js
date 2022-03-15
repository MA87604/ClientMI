"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetUnderMgmt = void 0;
const { Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
chai_1.default.use(chai_as_promised_1.default);
let expect = chai_1.default.expect;
class assetUnderMgmt {
    constructor() {
        this.totAssetsUnderMgmt = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[10]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.totAssetInvestedInNonLifestyleFund = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[12]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.totAssetInvestedInLifestyleFund = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[13]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.defaultStratPolicies = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[15]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.otherStratPolicies = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[17]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.fundDemographic = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[36]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
        this.viewAllFundsBtn = (0, protractor_1.element)(protractor_1.by.id("DashletSwitcher"));
        this.showBreakdownBtn = (0, protractor_1.element)(protractor_1.by.id("DefaultFundSwitcher"));
        this.top5fundsGraph = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[29]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
        this.top5lifestyleGraph = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[31]/dashlet/div/report/visualizer-report/div/chart-visualization/div[1]/div[1]/div/canvas"));
        this.assetInvestedinDefaultStat = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[16]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.assetInvestedinOtherStat = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[18]/dashlet/div/report/kpi-report/div/div/div/span"));
        this.table1Header = (0, protractor_1.element)(protractor_1.by.id("tableChart_167")).all(protractor_1.by.css("div.table-cell-outer-div.headerText > div > span"));
        this.table2Header = (0, protractor_1.element)(protractor_1.by.id("tableChart_168")).all(protractor_1.by.css("div.table-cell-outer-div.headerText > div > span"));
        this.row1 = (0, protractor_1.element)(protractor_1.by.id("tableChart_167")).all(protractor_1.by.css("div.table-cell-outer-div.bodyText > div > span"));
        this.row2 = (0, protractor_1.element)(protractor_1.by.id("tableChart_168")).all(protractor_1.by.css("div.table-cell-outer-div.bodyText > div > span"));
        this.schemeCategory = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[1]/dashlet/div/embedded-filter/mat-form-field/div/div[1]/div/mat-select"));
        this.search = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/mat-form-field/div/div[1]/div[2]/input"));
        this.radioBtn = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[2]/div/filter-option-list/mat-radio-group/mat-radio-button/label/span[1]"));
        this.minMaxBtn = (0, protractor_1.element)(protractor_1.by.xpath("/html/body/ui-view/main/ui-view[2]/ui-view/ui-view/div/dashboard-canvas/div/div/div[5]/dashlet/div/embedded-filter/filter-selection/div[1]/search-panel/form/div/button"));
    }
}
exports.assetUnderMgmt = assetUnderMgmt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzVW5kZXJNZ210UE8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZU9iamVjdHMvYXNzZXRzVW5kZXJNZ210UE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxFQUFDLE1BQU0sRUFBQyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLDJDQUEyRztBQUUzRyxnREFBd0I7QUFDeEIsd0VBQThDO0FBRzlDLGNBQUksQ0FBQyxHQUFHLENBQUMsMEJBQWMsQ0FBQyxDQUFDO0FBQ3pCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsTUFBYSxjQUFjO0lBMEJ6QjtRQUVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3SUFBd0ksQ0FBQyxDQUFDLENBQUM7UUFDckwsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdJQUF3SSxDQUFDLENBQUMsQ0FBQztRQUN0TSxJQUFJLENBQUMsK0JBQStCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0lBQXdJLENBQUMsQ0FBQyxDQUFDO1FBQ25NLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3SUFBd0ksQ0FBQyxDQUFDLENBQUM7UUFDeEwsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdJQUF3SSxDQUFDLENBQUMsQ0FBQztRQUV0TCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtLQUErSyxDQUFDLENBQUMsQ0FBQztRQUMxTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0tBQStLLENBQUMsQ0FBQyxDQUFDO1FBQ3pOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrS0FBK0ssQ0FBQyxDQUFDLENBQUM7UUFDN04sSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdJQUF3SSxDQUFDLENBQUMsQ0FBQztRQUM5TCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0lBQXdJLENBQUMsQ0FBQyxDQUFDO1FBRTVMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztRQUNySCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQzNHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUUzRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZKQUE2SixDQUFDLENBQUMsQ0FBQztRQUN2TSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFNQUFxTSxDQUFDLENBQUMsQ0FBQTtRQUN0TyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtOQUFrTixDQUFDLENBQUMsQ0FBQztRQUN0UCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlLQUF5SyxDQUFDLENBQUMsQ0FBQTtJQUcvTSxDQUFDO0NBQ0Y7QUF0REQsd0NBc0RDIn0=