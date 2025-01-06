import { BrowserFactory } from './BrowserFactory';
import { webkit, Browser } from 'playwright';

export class WebKitFactory implements BrowserFactory {
    async createBrowser(): Promise<Browser> {
        return await webkit.launch();
    }
}