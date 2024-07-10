import { Page } from 'playwright';
import {GoogleSearch} from './Pages/GoogleSearch'
import {NewSocialUser} from './Pages/NewUser'

export class InitPages{
    searchPage: GoogleSearch;
    socialNetworkPage: NewSocialUser;
    

    constructor(page:Page) {
        this.searchPage = new GoogleSearch(page);
        this.socialNetworkPage = new NewSocialUser(page);
    }
}


    

