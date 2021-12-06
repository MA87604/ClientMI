import {Given, When, Then} from "@cucumber/cucumber";
import { browser, by, By, element, ExpectedConditions } from "protractor";
import { chooseSpaces } from '../pageObjects/spacesPO';


let space = new chooseSpaces();

Given('user logged in successfully to clientMI Website', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.wait(ExpectedConditions.elementToBeClickable(space.spaces), 6000).then(async() =>{
        
        await space.spaces.click();
        await console.log("Spaces have been found");
    }
    )
});
    
When('user select {string}', async (string) => {
    
    await space.chooseSpace(string, space.MySchemeIntelDev, space.MySchemeIntelProd, space.MySchemeIntelDash, space.MySchemeIntelDashv02);
 
})
Then('user navigated to the workplace dashboards', async () => {

    await browser.wait(ExpectedConditions.elementToBeClickable(space.closeNav), 30000);
    await browser.wait(ExpectedConditions.titleIs('Entry Screen'), 100000).then(async () =>
    {
        await space.closeNav.click();
    })
    
});
        
        
        
       
        
