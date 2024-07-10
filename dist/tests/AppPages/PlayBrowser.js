"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserConfig = void 0;
const playwright_1 = require("playwright");
class BrowserConfig {
    browserType;
    browser;
    context;
    constructor(browserType) {
        this.browserType = browserType;
    }
    //constructor(private browserType: 'chromium' | 'firefox' | 'webkit',private Mode:boolean) {}
    async init() {
        switch (this.browserType) {
            case 'chromium':
                this.browser = await playwright_1.chromium.launch({ headless: false });
                break;
            case 'firefox':
                this.browser = await playwright_1.firefox.launch({ headless: false });
                break;
            case 'webkit':
                this.browser = await playwright_1.webkit.launch({ headless: false });
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
exports.BrowserConfig = BrowserConfig;
//export BrowserConfig;
