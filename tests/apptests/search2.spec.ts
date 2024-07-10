import { test,expect,Browser,Page,BrowserContext} from "playwright/test";
import { sleep } from "../testhelpers/helpers"
// import {GoogleSearch} from '../AppPages/Pages/GoogleSearch'
// import {NewSocialUser} from '../AppPages/Pages/NewUser'
import {BrowserConfig} from '../AppPages/PlayBrowser'
import {InitPages} from '../AppPages/InitPages'
import { attachment, Attachment } from 'allure-js-commons'
import {allure} from "allure-playwright";


let browserConfig:BrowserConfig ;
let page:Page;
let appPages:InitPages;


test.describe("Test Pages With Page Example",()=>{
    
    test.beforeAll(async ()=>{
        browserConfig = new BrowserConfig('chromium');
        await browserConfig.init();
        page = await browserConfig.getNewPage();
        appPages = new InitPages(page)
    })
    
    test.afterAll(async()=>{
        await browserConfig.close()
    })



    test('Google search Test1',async ({},testInfo) => {
        

        await appPages.searchPage.navigateTo("https://www.google.com/");
        await page.locator("[name=q]").fill("playground");
        await page.locator("[name=q]").press("Enter");
        await sleep(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
        
    });

    test('test1 Social Network ',async ({},testInfo) => {
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
        await sleep(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

        
    });

    test('test2 Social Network ',async ({},testInfo) => {
        
        await appPages.socialNetworkPage.navigateTo('https://demo.opensource-socialnetwork.org/');
        await appPages.socialNetworkPage.FirstName.click()
        await appPages.socialNetworkPage.FirstName.fill("zummanlal")
        await appPages.socialNetworkPage.Email.fill("zummanAndSons@yopmail.com")
        await appPages.socialNetworkPage.SetUserBirthDate('1981','4')
        
        await sleep(1000);
        var screenshot = await page.screenshot();
        await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
    });





})
      