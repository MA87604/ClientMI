const {BeforeAll,Before, AfterAll, After, Status} = require('@cucumber/cucumber');
import { browser } from "protractor";
import { config } from "../../configuration";


//BeforeAll({timeout: 100 * 1000}, async () => {
//    await browser.get(config.baseUrl);
//});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         //const image = Buffer.alloc(screenShot,length,screenShot,'base64')
         //scenario.attach(image, "image/png");
         this.attach(screenShot,"image/png")
    }
});

AfterAll(async () => {
    await browser.quit();
});


Before(async function(scenario)  {
    console.log("Scenario Name: "+ scenario.pickle.name);
});