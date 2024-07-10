"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSocialUser = void 0;
const CommonPage_1 = require("../CommonPage");
class NewSocialUser extends CommonPage_1.CommonActionPage {
    FirstName;
    LastName;
    Email;
    ReEnterMail;
    UserName;
    Password;
    BirthDate;
    CreateButton;
    constructor(page) {
        super(page);
        this.FirstName = this.page.getByPlaceholder('First Name');
        this.LastName = this.page.getByPlaceholder('Last Name');
        this.Email = this.page.getByPlaceholder('Email', { exact: true });
        this.ReEnterMail = this.page.getByPlaceholder('Re-enter Email');
        this.UserName = this.page.getByPlaceholder('Username');
        this.Password = this.page.getByPlaceholder('Password');
        this.BirthDate = this.page.getByPlaceholder('Birthdate');
        this.CreateButton = this.page.getByRole('button', { name: 'Create an account' });
    }
    async SetUserBirthDate(year, day) {
        await this.BirthDate.click();
        await this.page.getByLabel('Select year').selectOption(year);
        await this.page.getByRole('link', { name: `${day}`, exact: true }).click();
    }
}
exports.NewSocialUser = NewSocialUser;
