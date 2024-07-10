import { test,expect,Browser,BrowserContext,chromium } from "playwright/test";
import { sleep } from "../testhelpers/helpers"
import { describe } from "node:test";


//const {firefox,chromium} = require('playwright');


    test("launch user profile data",async({})=>{
        const userDataDir: string ="C:\\Users\\Aarav\\AppData\\Local\\Google\\Chrome\\User Data";
        const browser = await chromium.launchPersistentContext(userDataDir,{
                                               headless: false,
                                               channel: "chrome",
                                            //    args: [
                                            //        '--no-sandbox', // Required for some environments
                                            //        '--disable-setuid-sandbox',
                                            //        //'--user-data-dir=' + userDataDir, // Specify the user profile path
                                            //     ],
                                               executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                                               baseURL: "https://dashboard.stripe.com/login"
                            });
        
        const page = await browser.newPage();
        
        // // await sleep(2000);
        await page.goto("https://dashboard.stripe.com/login");
        console.log("total pages: "+browser.pages.length);
        await sleep(4000);
        await page.getByTestId("login-email-input").pressSequentially("zulu1122@yopmail.com",{delay:500});
        await page.getByTestId("login-password-input").pressSequentially("Test@1234#pass",{delay:500});
        await page.locator("//span[contains(text(),'Sign in')]").nth(1).click();
        await sleep(9000);
    })



    
       

    




