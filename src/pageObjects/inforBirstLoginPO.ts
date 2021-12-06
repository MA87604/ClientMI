import { by, element, ElementFinder, browser,ExpectedConditions } from "protractor";


export class inforBirstLoginPO {

    userName:ElementFinder;
    password:ElementFinder;
    loginButton:ElementFinder;

    constructor () {

        this.userName = element(by.id("username"));
        this.password = element(by.id("password"));
        this.loginButton = element(by.css("button.btn.submit"))
    }


    
}