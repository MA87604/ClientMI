const {BeforeAll, AfterAll, After, Status} = require('@cucumber/cucumber');
import { browser } from "protractor";
import { config } from "../../configuration";


//BeforeAll({timeout: 100 * 1000}, async () => {
//    await browser.get(config.baseUrl);
//});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot,"image/png")
    }
});

AfterAll(async () => {
    await browser.quit();
});