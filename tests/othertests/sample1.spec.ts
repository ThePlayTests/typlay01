import { test,expect,Browser,Page } from "playwright/test";
import { sleep } from "../testhelpers/helpers"



const {firefox,chromium} = require('playwright');

    
      test('Google search Test1',async () => {
        const browser: Browser = await chromium.launch({headless:false});
        const page: Page = await browser.newPage();
        await page.goto("https://www.google.com/");
        await page.locator("[name=q]").fill("playground");
        // await sleep(500);
        // await page.click("Escape");
        // await sleep(500);
        await page.locator("[name=q]").press("Enter");
        await sleep(1000);
        await page.goBack();
        await page.locator("[name=q]").clear();

        
    });

    test('Google search Test2',async () => {
        const browser: Browser = await chromium.launch({headless:false});
        const page: Page = await browser.newPage();
        await page.goto("https://www.google.com/");
        await page.locator("[name=q]").fill("playwright playground");
        // await sleep(500);
        // await page.click("Escape");
        // await sleep(500);
        await page.locator("[name=q]").press("Enter");
        await sleep(2000);
        await page.goBack();
        await page.locator("[name=q]").clear();

        
    });

