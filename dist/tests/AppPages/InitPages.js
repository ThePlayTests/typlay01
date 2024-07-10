"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitPages = void 0;
const GoogleSearch_1 = require("./Pages/GoogleSearch");
const NewUser_1 = require("./Pages/NewUser");
class InitPages {
    searchPage;
    socialNetworkPage;
    constructor(page) {
        this.searchPage = new GoogleSearch_1.GoogleSearch(page);
        this.socialNetworkPage = new NewUser_1.NewSocialUser(page);
    }
}
exports.InitPages = InitPages;
