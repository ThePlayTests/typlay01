import { Browser, BrowserContext, chromium, firefox, webkit } from 'playwright';

export class BrowserConfig {
  
    private browser!: Browser ;
    private context!: BrowserContext;

  constructor(private browserType: 'chromium' | 'firefox' | 'webkit') {}
  //constructor(private browserType: 'chromium' | 'firefox' | 'webkit',private Mode:boolean) {}
  async init() {
    switch (this.browserType) {
      case 'chromium':
        this.browser = await chromium.launch({ headless: false });
        break;
      case 'firefox':
        this.browser = await firefox.launch({ headless: false });
        break;
      case 'webkit':
        this.browser = await webkit.launch({ headless: false });
        break;
      default:
        throw new Error('Unsupported browser type');
    }

    this.context = await this.browser.newContext();
  }

  async getNewPage() {
    if (!this.context) {
        throw new Error('Browser context is not initialized');
    }
    return await this.context.newPage();
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

//export BrowserConfig;