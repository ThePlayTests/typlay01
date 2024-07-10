import { test,expect,Browser,BrowserContext,Page,chromium } from "playwright/test";
import { sleep } from '../testhelpers/helpers';
// import casual from 'casual'


let browser:Browser;
let browserContext:BrowserContext;
let page:Page;
let casual = require('casual').en_US



test.describe("Test New User For AgileCRM",()=>{

   test.beforeAll(async({})=>{
       browser = await chromium.launch({headless: false});
       browserContext = await browser.newContext();
       page = await browserContext.newPage();
       await page.goto('https://www.agilecrm.com/');
       //https://zulu1122.agilecrm.com/#
       //https://serveautoguide.agilecrm.com/# 
   })

   test.afterAll(async()=>{
   })
   
   test("Test for Frame",async ({},testInfo)=>{
    
    
    // await expect(page.frameLocator('iframe'))
    
    // var frameLocator =   page.frameLocator('iframe')    
    // await expect(await page.frameLocator('iframe')).toBeGreaterThan(0)
    // await page.frameLocator('iframe').locator('div').filter({ hasText: 'Agile CRM is nowFREE for 10' }).first().click();
    // await page.frameLocator('iframe').getByRole('link', { name: '×' }).click();
    
    await page.locator("a.Navigation-button").click();
    await page.getByPlaceholder('Domain Name').click();
    await page.getByPlaceholder('Domain Name').fill(casual.first_name+"11");
    await page.getByPlaceholder('Your Full Name').click();
    await page.getByPlaceholder('Your Full Name').fill('jim');
    await page.getByPlaceholder('Email address').click();
    await page.getByPlaceholder('Email address').fill(casual.first_name+"11@yopmail.com");
    await page.getByPlaceholder('Password (min 6 characters)').click();
    await page.getByPlaceholder('Password (min 6 characters)').fill('Test@1234');
    await sleep(1000);
    

   })

})


 test('test get started', async ({ }) => {
    await page.getByRole('button', { name: 'Get Started', exact: true }).click();
    await sleep(7000);
 }) 
  
//   await page.locator('#nav-collapse').getByText('GET STARTED').click();
//   await page.getByPlaceholder('Domain Name').click();
//   await page.getByText('× Register Your FREE Agile CRM Account No Credit Card Required .agilecrm.com').click();

test('test business type', async ({ }) => {
      var agileWelcome =page.getByRole('heading', { name: 'Welcome to Agile CRM!' });
      agileWelcome.waitFor()
      
      await page.locator('select[name="plan_type"]').selectOption('FREE');
      await page.getByPlaceholder('Users').click();
      await page.getByPlaceholder('Users').fill('5');
      await page.locator('select[name="role"]').selectOption('Customer Success Manager');
      await page.locator('select[name="company_type"]').selectOption('SaaS');
      await page.getByRole('textbox', { name: 'Phone Number' }).click();
      await page.getByRole('textbox', { name: 'Phone Number' }).fill('+919891012345');
      await page.locator('#saveUserDetails').click();
      await sleep(7000);
      await page.pause();
 })   

 test("login with user",async()=>{
        await page.goto('https://zulu1122.agilecrm.com/login');
        await page.getByPlaceholder('User ID (Your Email Address)').click();
        await page.getByPlaceholder('User ID (Your Email Address)').fill('zulu1122@yopmail.com');
        await page.getByPlaceholder('User ID (Your Email Address)').press('Tab');
        await page.getByPlaceholder('Password').fill('Test@1234');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await page.getByRole('link', { name: '...' }).click();
        await page.locator('.preference-menu > div:nth-child(3)').click();
        await page.locator('#fatMenuModal').getByText('Logout').click();
 })

 // Data set to be used for parameterized testing
 const testData = [
           { username: 'zulu',   password: 'Test@1234', expected_message: 'Example Domain' },
           { username: 'zulu1122@yopmail',password: 'Test1234',  expected_message: 'Fast and reliable end-to-end testing' },
           { username: 'zulu1122@yopmail',    password: 'Test@1234', expected_message: 'GitHub: Where the world builds software' },
        ];
 
 testData.forEach(({ username, password,expected_message }) => {
   test(`Check title of ${expected_message}`, async ({ page }) => {
    //  await page.goto(url);
    //  await expect(page).toHaveTitle(title);
     
   });
 });


//   await page.getByText('× Sell, Market and Service').click();
//   await page.getByRole('button', { name: '×' }).click();
//   await page.getByRole('heading', { name: 'Invite Users' }).click();
//   await page.getByRole('button', { name: '×' }).click();
// });