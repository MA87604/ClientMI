import {Config, by, element, ElementFinder, browser, ExpectedConditions} from "protractor";
//import * as reporter from "cucumber-html-reporter"
var reporter = require('cucumber-html-reporter');

const path = require('path');
//let inforBirstLoginpage = new inforBirstLoginPO();

export let config: Config = {
    framework: 'custom', //Type of Framework used 
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true, 
    useAllAngular2AppRoots: true,
    
    plugins: [{
        package: 'query-selector-shadow-dom/plugins/protractor',
        //package: 'protractor-react-selector'

    }],
    
    capabilities: {
        browserName: 'chrome',
          chromeOptions: {
            useAutomationExtension: false,
            args: [
              '--disable-gpu',
              '--no-sandbox',
              '--window-size=1024,768'
            ]
          },
        acceptInsecureCerts: true,
        ssl: false,
        excludeSwitches: ['enable-logging'],
        loggingPrefs: { browser: 'ALL' },
        prefs: {
            'plugins.always_open_pdf_externally': true,
            'download': {
                'prompt_for_download': false,
                'default_directory': 'C:/DataFiles/',
    
              }
        }
        
},
      
    specs: [ //Name of the Spec file
        //'../src/features/client-mi.feature',//login
        '../src/features/spaces.feature', '../src/features/landingPage.feature',
        '../src/features/selectScheme.feature', '../src/features/serviceAgreement.feature',
        '../src/features/memberOptOut.feature', '../src/features/memberEngagement.feature',
        '../src/features/memberInfo.feature', '../src/features/memberActivity.feature', '../src/features/contribution.feature',
        '../src/features/assetsUnderMgmt.feature','../src/features/retirement.feature','../src/features/schemeCategory.feature',
        //'../src/features/*.feature',
    ], 

    cucumberOpts: {
        tags: [
            //"@login", //Choose tags to test specific test cases
            //"@landing",
            //"@scheme",
            //"@serviceLevelAgreement",
            //"@optOut",
            //"@memberOnlineEngagement",
            //"@memberInfo",
            //"@memberActivity",
            //"@contribution",
            "@assetUnderMgmt",
            //"@retirement",
           // "@schemeCategory" 
            
        ],
        format: 'json:./cucumber_report.json',
        require: ['../JSFile/src/stepDefinations/*.js'],
    },
    onComplete: () =>
    {
        var options = {
            theme: 'bootstrap',
            jsonFile: './JSFile/cucumber_report.json',
            output: './JSFile/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "MI Client Version": "0.3",
                "Test Environment": "Developing test script",
                "Browser": "Chrome  92.0.4515.107",
                "Platform": "Windows 10",
                //"Parallel": "Scenarios",
                //"Executed": ""
            }
        };
        reporter.generate(options);
    },
    onPrepare: async () => {
        let username = 'monika.ahlawat@landg.com';
        let password = 'B1rstM!2@21';
        //let username = 'neil.ramsay@landg.com';
        //let password = 'Ftins67@Yn';
        
        
        await browser.waitForAngularEnabled(false);
        await browser.get("https://login.eu1.birst.com/");
        await browser.manage().window().maximize();
        await element(by.id("username")).sendKeys(username);
        await element(by.id("password")).sendKeys(password);
        await element(by.css("button.btn.submit")).click();
        await browser.manage().timeouts().implicitlyWait(30000);
        await browser.wait(ExpectedConditions.titleIs('Modeler'), 120000).then(function (text) {
            console.log("Welcome to client MI")
        }
        )
    },
   
}

