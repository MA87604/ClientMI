const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, ExpectedConditions, browser, protractor } from "protractor";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;

export class genderAge { 

  async genderComboBox(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder, elem5: ElementFinder, elem6: ElementFinder,elem7:ElementFinder, string) {
    
    browser.wait(ExpectedConditions.presenceOf(elem1), 35000);
    await elem1.click();//click combobox filter
    await console.log("combobox has been clicked");
    browser.wait(ExpectedConditions.presenceOf(elem2), 35000);
    await elem2.click();//click search
    await elem2.sendKeys(string);//enter a scheme category
    if (string == 'All') {
      await elem7.click();
      await console.log("All checkbox has been selected");
    }

    else if (string == 'Male') {
      await elem3.click();
      await console.log("Male checkbox has been selected");
    }
    else if (string == 'Female') {
      await elem4.click();
      await console.log("Female checkbox has been selected");
    }
    else {
      await elem5.click();
      await console.log("Unknown checkbox has been selected");
    }

    await browser.wait(ExpectedConditions.presenceOf(elem6), 30000).then(function () {
       elem6.click();
       console.log("Apply button has been clicked");
       browser.sleep(3000);
    })
    
  
  }


  async genderRadioBtn(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder, elem5: ElementFinder, gender) {
    await browser.sleep(4000);
    await elem1.click();//click combobox filter
    await console.log("Gender dropdown has been clicked");
    await browser.sleep(10000);
    /*await elem2.click();//click search
    await elem2.sendKeys(gender);//enter a scheme category
    await elem2.sendKeys(protractor.Key.ENTER);
    await browser.sleep(3000);
    if (gender == 'Male') {
      browser.wait(ExpectedConditions.presenceOf(elem4), 40000);
      await elem4.click();
      await browser.sleep(2000);
      await console.log("Male checkbox has been selected");
    }
    else if (gender == ('Female')) {
      browser.wait(ExpectedConditions.presenceOf(elem3), 35000);
      await elem3.click();
      await console.log("Female checkbox has been selected");
  
    }
    
    await browser.wait(ExpectedConditions.presenceOf(elem5), 50000).then(function () {
      elem5.click();
      browser.sleep(3000);
    })*/
    
  }
  

  async ageFilter(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder,elem5: ElementFinder, age) {
    await browser.sleep(4000);
    await elem1.click();//click combobox filter
    await console.log("Age dropdown has been clicked");
    await browser.sleep(10000);
    //await browser.actions().mouseMove(sc.search).perform();
    //await sc.maxMinButton.click();
    /*if (age == "All") {
      elem5.click();
    }
    else {
      await elem2.click();//click search
      await elem2.sendKeys(age);//enter a scheme category
      await elem2.sendKeys(protractor.Key.ENTER);
      browser.wait(ExpectedConditions.presenceOf(elem3), 35000);
      await elem3.click();
      
    }
    await browser.wait(ExpectedConditions.presenceOf(elem4), 3000).then(function () {
      elem4.click();
      console.log("Apply button has been clicked");
      }
      )
  
    await browser.sleep(2000);*/
  }


  async memStatus(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder, status) {
    await browser.sleep(4000);
    await elem1.click();//click combobox filter
    await console.log("Member Status dropdown has been clicked");
    await browser.sleep(10000);
    //await browser.actions().mouseMove(sc.search).perform();
    //await sc.maxMinButton.click();
    await elem2.click();//click search
    await elem2.sendKeys(status);//enter a scheme category
    await elem2.sendKeys(protractor.Key.ENTER);
    await browser.sleep(2000);
    await elem3.click();
    await browser.sleep(2000);
    await elem4.click();
    await browser.sleep(2000);
  }


}