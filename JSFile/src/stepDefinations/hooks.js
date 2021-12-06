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
const { BeforeAll, AfterAll, After, Status } = require('@cucumber/cucumber');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RlcERlZmluYXRpb25zL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzNFLDJDQUFxQztBQUlyQyxnREFBZ0Q7QUFDaEQsd0NBQXdDO0FBQ3hDLEtBQUs7QUFFTCxLQUFLLENBQUMsVUFBZSxRQUFROztRQUN6QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDMUMsc0NBQXNDO1lBQ3JDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxtRUFBbUU7WUFDbkUsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3ZDO0lBQ0wsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxHQUFTLEVBQUU7SUFDaEIsTUFBTSxvQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==