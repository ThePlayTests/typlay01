"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const helpers_1 = require("../testhelpers/helpers");
const GoogleSearch_1 = require("../AppPages/Pages/GoogleSearch");
const NewUser_1 = require("../AppPages/Pages/NewUser");
const PlayBrowser_1 = require("../AppPages/PlayBrowser");
let browserConfig;
let page;
let googleSearch;
let newSocialUser;
test_1.test.describe("Test Pages ", () => {
    test_1.test.beforeAll(async () => {
        browserConfig = new PlayBrowser_1.BrowserConfig('chromium');
        await browserConfig.init();
        page = await browserConfig.getNewPage();
        googleSearch = new GoogleSearch_1.GoogleSearch(page);
    });
    test_1.test.afterAll(async () => {
        await browserConfig.close();
    });
    (0, test_1.test)('Google search Test1', async ({}, testInfo) => {
        await googleSearch.navigateTo("https://www.google.com/");
        await page.locator("[name=q]").fill("playground");
        await page.locator("[name=q]").press("Enter");
        await (0, helpers_1.sleep)(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    });
    (0, test_1.test)('test1 Social Network ', async ({}, testInfo) => {
        await page.goto('https://demo.opensource-socialnetwork.org/');
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Email', { exact: true }).click();
        await page.getByPlaceholder('Re-enter Email').click();
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Birthdate').click();
        await page.getByRole('link', { name: '6', exact: true }).click();
        await page.locator('div').filter({ hasText: /^Male$/ }).getByRole('radio').check();
        await page.getByRole('checkbox').check();
        await page.getByRole('button', { name: 'Create an account' }).click();
        await page.getByPlaceholder('Birthdate').click();
        await page.getByLabel('Select year').selectOption('1986');
        await page.getByRole('link', { name: '3', exact: true }).click();
        await page.getByRole('button', { name: 'Create an account' }).click();
        await (0, helpers_1.sleep)(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    });
    (0, test_1.test)('test2 Social Network ', async ({}, testInfo) => {
        newSocialUser = new NewUser_1.NewSocialUser(page);
        await page.goto('https://demo.opensource-socialnetwork.org/');
        await newSocialUser.FirstName.click();
        await newSocialUser.FirstName.fill("zummanlal");
        await newSocialUser.Email.fill("zummanAndSons@yopmail.com");
        await newSocialUser.SetUserBirthDate('1981', '4');
        await (0, helpers_1.sleep)(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    });
});
