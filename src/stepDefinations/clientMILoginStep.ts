import {Given, When, Then} from "@cucumber/cucumber";
import { browser, by, By, element, ExpectedConditions } from "protractor";
import { inforBirstLoginPO } from "../pageObjects/inforBirstLoginPO";
import chai from "chai";


let inforBirstLoginpage = new inforBirstLoginPO();
let expectall = chai.expect;
let should = chai.should;

Given('user navigated to login page', async()=> {
    await browser.waitForAngularEnabled(false);
    await browser.get("https://login.eu1.birst.com/");
    await browser.manage().window().maximize();

});


When('user enter {string}, {string} login credentails', async (username, password) => {

    
    await inforBirstLoginpage.userName.sendKeys(username);
    await inforBirstLoginpage.password.sendKeys(password);
    await inforBirstLoginpage.loginButton.click();
    await browser.manage().timeouts().implicitlyWait(30000);
      
});


Then('user logged in successfully', async()=> {

    await browser.wait(ExpectedConditions.titleIs('Modeler'), 120000).then(function(text)
    {
        console.log("Welcome to client MI")
    }
    )

}
);