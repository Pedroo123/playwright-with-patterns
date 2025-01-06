import { BrowserFactory } from './BrowserFactory';
import { chromium, Browser } from 'playwright';

export class ChromiumFactory implements BrowserFactory {
    async createBrowser(): Promise<Browser> {
        return await chromium.launch();
    }
}
