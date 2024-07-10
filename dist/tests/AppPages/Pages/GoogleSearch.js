"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSearch = void 0;
const CommonPage_1 = require("../CommonPage");
const helpers_1 = require("../../testhelpers/helpers");
class GoogleSearch extends CommonPage_1.CommonActionPage {
    constructor(page) {
        super(page);
    }
    async searchQuery(query) {
        await this.type('[name=q]', query);
        await this.page.locator("[name=q]").press("Enter");
        await (0, helpers_1.sleep)(2000);
    }
}
exports.GoogleSearch = GoogleSearch;
