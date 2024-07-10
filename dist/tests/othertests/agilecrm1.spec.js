"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const helpers_1 = require("../testhelpers/helpers");
// import casual from 'casual'
let browser;
let browserContext;
let page;
let casual = require('casual').en_US;
test_1.test.describe("Test New User For AgileCRM", () => {
    test_1.test.beforeAll(async ({}) => {
        browser = await test_1.chromium.launch({ headless: false });
        browserContext = await browser.newContext();
        page = await browserContext.newPage();
        await page.goto('https://www.agilecrm.com/');
        //https://zulu1122.agilecrm.com/#
        //https://serveautoguide.agilecrm.com/# 
    });
    test_1.test.afterAll(async () => {
    });
    (0, test_1.test)("Test for Frame", async ({}, testInfo) => {
        // await expect(page.frameLocator('iframe'))
        // var frameLocator =   page.frameLocator('iframe')    
        // await expect(await page.frameLocator('iframe')).toBeGreaterThan(0)
        // await page.frameLocator('iframe').locator('div').filter({ hasText: 'Agile CRM is nowFREE for 10' }).first().click();
        // await page.frameLocator('iframe').getByRole('link', { name: '×' }).click();
        await page.locator("a.Navigation-button").click();
        await page.getByPlaceholder('Domain Name').click();
        await page.getByPlaceholder('Domain Name').fill(casual.company_name + "11");
        await page.getByPlaceholder('Your Full Name').click();
        await page.getByPlaceholder('Your Full Name').fill('jim');
        await page.getByPlaceholder('Email address').click();
        await page.getByPlaceholder('Email address').fill(casual.first_name + "11@yopmail.com");
        await page.getByPlaceholder('Password (min 6 characters)').click();
        await page.getByPlaceholder('Password (min 6 characters)').fill('Test@1234');
        (0, helpers_1.sleep)(7000);
    });
});
(0, test_1.test)('test', async ({}) => {
    await page.getByRole('button', { name: 'Get Started', exact: true }).click();
});
//   await page.locator('#nav-collapse').getByText('GET STARTED').click();
//   await page.getByPlaceholder('Domain Name').click();
//   await page.getByText('× Register Your FREE Agile CRM Account No Credit Card Required .agilecrm.com').click();
//   
//   await page.locator('select[name="plan_type"]').selectOption('FREE');
//   await page.getByPlaceholder('Users').click();
//   await page.getByPlaceholder('Users').fill('5');
//   await page.locator('select[name="role"]').selectOption('Customer Success Manager');
//   await page.locator('select[name="company_type"]').selectOption('SaaS');
//   await page.getByRole('textbox', { name: 'Phone Number' }).click();
//   await page.getByRole('textbox', { name: 'Phone Number' }).fill('+919891012345');
//   await page.getByRole('heading', { name: 'Welcome to Agile CRM!' }).click();
//   await page.locator('#saveUserDetails').click();
//   await page.getByText('× Sell, Market and Service').click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('heading', { name: 'Invite Users' }).click();
//   await page.getByRole('button', { name: '×' }).click();
// });
