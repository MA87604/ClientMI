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
const { BeforeAll, Before, AfterAll, After, Status } = require('@cucumber/cucumber');
const protractor_1 = require("protractor");
//BeforeAll({timeout: 100 * 1000}, async () => {
//    await browser.get(config.baseUrl);
//});
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === Status.FAILED) {
            // screenShot is a base-64 encoded PNG
            const screenShot = yield protractor_1.browser.takeScreenshot();
            //const image = Buffer.alloc(screenShot,length,screenShot,'base64')
            //scenario.attach(image, "image/png");
            this.attach(screenShot, "image/png");
        }
    });
});
AfterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.quit();
}));
Before(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Scenario Name: " + scenario.pickle.name);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsRiwyQ0FBcUM7QUFJckMsZ0RBQWdEO0FBQ2hELHdDQUF3QztBQUN4QyxLQUFLO0FBRUwsS0FBSyxDQUFDLFVBQWUsUUFBUTs7UUFDekIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzFDLHNDQUFzQztZQUNyQyxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsbUVBQW1FO1lBQ25FLHNDQUFzQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQTtTQUN2QztJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsR0FBUyxFQUFFO0lBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLFVBQWUsUUFBUTs7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FBQSxDQUFDLENBQUMifQ==