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
exports.config = void 0;
const protractor_1 = require("protractor");
//import * as reporter from "cucumber-html-reporter"
var reporter = require('cucumber-html-reporter');
const path = require('path');
//let inforBirstLoginpage = new inforBirstLoginPO();
exports.config = {
    framework: 'custom',
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
    specs: [
        //'../src/features/client-mi.feature',//login
        '../src/features/spaces.feature', '../src/features/landingPage.feature',
        '../src/features/selectScheme.feature', '../src/features/serviceAgreement.feature',
        '../src/features/memberOptOut.feature', '../src/features/memberEngagement.feature',
        '../src/features/memberInfo.feature', '../src/features/memberActivity.feature', '../src/features/contribution.feature',
        '../src/features/assetsUnderMgmt.feature', '../src/features/retirement.feature', '../src/features/schemeCategory.feature',
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
            //"@schemeCategory" 
        ],
        format: 'json:./cucumber_report.json',
        require: ['../JSFile/src/stepDefinations/*.js'],
    },
    onComplete: () => {
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
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        let username = 'monika.ahlawat@landg.com';
        let password = 'B1rstM!2@21';
        //let username = 'neil.ramsay@landg.com';
        //let password = 'Ftins67@Yn';
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://login.eu1.birst.com/");
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.manage().window().getSize();
        yield (0, protractor_1.element)(protractor_1.by.id("username")).sendKeys(username);
        yield (0, protractor_1.element)(protractor_1.by.id("password")).sendKeys(password);
        yield (0, protractor_1.element)(protractor_1.by.css("button.btn.submit")).click();
        yield protractor_1.browser.manage().timeouts().implicitlyWait(30000);
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.titleIs('Modeler'), 120000).then(function (text) {
            console.log("Welcome to client MI");
        });
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJGO0FBQzNGLG9EQUFvRDtBQUNwRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUVqRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0Isb0RBQW9EO0FBRXpDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLHNCQUFzQixFQUFFLElBQUk7SUFFNUIsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsOENBQThDO1lBQ3ZELHNDQUFzQztTQUV6QyxDQUFDO0lBRUYsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7UUFDbkIsYUFBYSxFQUFFO1lBQ2Isc0JBQXNCLEVBQUUsS0FBSztZQUM3QixJQUFJLEVBQUU7Z0JBQ0osZUFBZTtnQkFDZixjQUFjO2dCQUNkLHdCQUF3QjthQUN6QjtTQUNGO1FBQ0gsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixHQUFHLEVBQUUsS0FBSztRQUNWLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1FBQ25DLFlBQVksRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7UUFDaEMsS0FBSyxFQUFFO1lBQ0gsb0NBQW9DLEVBQUUsSUFBSTtZQUMxQyxVQUFVLEVBQUU7Z0JBQ1IscUJBQXFCLEVBQUUsS0FBSztnQkFDNUIsbUJBQW1CLEVBQUUsZUFBZTthQUVyQztTQUNOO0tBRVI7SUFFRyxLQUFLLEVBQUU7UUFDSCw2Q0FBNkM7UUFDN0MsZ0NBQWdDLEVBQUUscUNBQXFDO1FBQ3ZFLHNDQUFzQyxFQUFFLDBDQUEw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