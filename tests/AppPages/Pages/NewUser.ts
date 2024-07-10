import {Page,Locator} from '@playwright/test'
import { CommonActionPage } from '../CommonPage';

export class NewSocialUser extends CommonActionPage {

    public FirstName:Locator ;
    public LastName:Locator;  
    public Email:Locator ;
    public ReEnterMail:Locator;
    public UserName:Locator;
    public Password:Locator;
    public BirthDate:Locator;
    public CreateButton:Locator;

    constructor(page: Page) {
         super(page);

         this.FirstName= this.page.getByPlaceholder('First Name');
         this.LastName=this.page.getByPlaceholder('Last Name');
         this.Email= this.page.getByPlaceholder('Email', { exact: true });
         this.ReEnterMail =this.page.getByPlaceholder('Re-enter Email');
         this.UserName=this.page.getByPlaceholder('Username') 
         this.Password=this.page.getByPlaceholder('Password') 
         this.BirthDate=this.page.getByPlaceholder('Birthdate')
         this.CreateButton=this.page.getByRole('button', { name: 'Create an account' });
    }
    
    async SetUserBirthDate(year:string,day:string){
        await this.BirthDate.click();
        await this.page.getByLabel('Select year').selectOption(year);
        await this.page.getByRole('link', { name: `${day}`, exact: true }).click()
    }
        
        //  page.getByRole('link', { name: '6', exact: true })
        //  page.locator('div').filter({ hasText: /^Male$/ }).getByRole('radio')
        //  page.getByRole('checkbox')
        //  
        //  page.getByPlaceholder('Birthdate')
        //  page.getByLabel('Select year').selectOption('1986');
        //  page.getByRole('link', { name: '3', exact: true })
        // page.getByRole('button', { name: 'Create an account' })




}