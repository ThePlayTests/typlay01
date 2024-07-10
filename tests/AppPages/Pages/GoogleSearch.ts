import { Page } from 'playwright';
import { CommonActionPage } from '../CommonPage';
import { sleep } from '../../testhelpers/helpers';

export class GoogleSearch extends CommonActionPage {
  constructor(page: Page) {
    super(page);
  }

  async searchQuery(query:string): Promise<void> {
    await this.type('[name=q]',query);
    await this.page.locator("[name=q]").press("Enter");
    await sleep(2000);
  }
}
