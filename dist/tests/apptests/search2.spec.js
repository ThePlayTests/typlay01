"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const helpers_1 = require("../testhelpers/helpers");
// import {GoogleSearch} from '../AppPages/Pages/GoogleSearch'
// import {NewSocialUser} from '../AppPages/Pages/NewUser'
const PlayBrowser_1 = require("../AppPages/PlayBrowser");
const InitPages_1 = require("../AppPages/InitPages");
let browserConfig;
let page;
let appPages;
test_1.test.describe("Test Pages With Page Example", () => {
    test_1.test.beforeAll(async () => {
        browserConfig = new PlayBrowser_1.BrowserConfig('chromium');
        await browserConfig.init();
        page = await browserConfig.getNewPage();
        appPages = new InitPages_1.InitPages(page);
    });
    test_1.test.afterAll(async () => {
        await browserConfig.close();
    });
    (0, test_1.test)('Google search Test1', async ({}, testInfo) => {
        await appPages.searchPage.navigateTo("https://www.google.com/");
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
        await appPages.socialNetworkPage.navigateTo('https://demo.opensource-socialnetwork.org/');
        await appPages.socialNetworkPage.FirstName.click();
        await appPages.socialNetworkPage.FirstName.fill("zummanlal");
        await appPages.socialNetworkPage.Email.fill("zummanAndSons@yopmail.com");
        await appPages.socialNetworkPage.SetUserBirthDate('1981', '4');
        await (0, helpers_1.sleep)(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    });
});
