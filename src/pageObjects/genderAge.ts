const {Status} = require('@cucumber/cucumber');
import { by, element, ElementFinder, ElementArrayFinder, WebElement, ExpectedConditions, browser, protractor } from "protractor";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {  } from 'selenium-webdriver';

chai.use(chaiAsPromised);
let expect = chai.expect;


import { memInfo } from './memInfoPO';
let mi = new memInfo();

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


  async genderRadioBtn(elem1: ElementFinder, elem2: ElementFinder, elem3: ElementFinder, elem4: ElementFinder, elem5: ElementFinder,elem6: ElementFinder, gender) {
    await browser.wait(ExpectedConditions.visibilityOf(elem1),5000);
    await elem1.click();//click combobox filter
    await console.log("Gender dropdown has been clicked");
    await browser.sleep(2000);

    await browser.executeScript("arguments[0].click();", elem6);
    await console.log("Expand button has been clicked");
    await browser.sleep(2000);

    let genderOption = element(by.xpath("//span[text()='"+ gender +"']"));
    await browser.wait(ExpectedConditions.visibilityOf(genderOption),5000);

    // await elem2.click();//click search
    // await elem2.sendKeys(gender);//enter a scheme category
    // await elem2.sendKeys(protractor.Key.ENTER);
    // await browser.sleep(3000);

    await genderOption.click();
      await console.log("Gender option has been selected");
      await browser.sleep(1000);
  /*  if (gender == 'Male') {
      browser.wait(ExpectedConditions.presenceOf(elem4), 20000);
      await elem4.click();
      await browser.sleep(2000);
      await console.log("Male radio button has been selected");
    }
    else if (gender == ('Female')) {
      browser.wait(ExpectedConditions.presenceOf(elem3), 20000);
      await elem3.click();
      await console.log("Female radio button has been selected");
  
    }*/
    await browser.executeScript("arguments[0].click();", elem5);
    await browser.sleep(2000);

    
  }
  

  async ageFilter(elem1: ElementFinder, elem2: ElementFinder, elem4: ElementFinder,elem5: ElementFinder, age) {
   let chkBox= element(by.xpath("//input[@value='"+age+"']"));

    await browser.wait(ExpectedConditions.visibilityOf(elem1),5000);
    await elem1.click();//click combobox filter
    await console.log("Age dropdown has been clicked");
    await browser.sleep(2000);
    await browser.executeScript("arguments[0].click();", mi.ageExpandButton);
    await browser.sleep(2000);
    console.log("Age band: "+age);
    // if (age == "All") {
    //   elem5.click();
    // }
    // else {}
    await browser.executeScript("arguments[0].click();", chkBox);

    await browser.wait(ExpectedConditions.presenceOf(elem4), 3000).then(function () {
      elem4.click();
      console.log("Apply button has been clicked");
      }
      )
      await browser.sleep(2000);
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