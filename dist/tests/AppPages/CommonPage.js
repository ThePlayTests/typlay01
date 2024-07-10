"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonActionPage = void 0;
class CommonActionPage {
    page;
    constructor(page) {
        this.page = page;
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async click(selector) {
        await this.page.click(selector);
    }
    async type(selector, text) {
        await this.page.fill(selector, text);
    }
    async getText(selector) {
        return this.page.textContent(selector) || '';
    }
}
exports.CommonActionPage = CommonActionPage;
