import { ChromiumFactory } from '../browser/ChromiumFactory';
import { WebKitFactory } from '../browser/WebKitFactory';
import { BrowserFactory } from '../browser/BrowserFactory';
import { Browser, Page } from 'playwright';

async function fillForm(page: Page) {
    await page.goto('https://example.com/form');
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#message', 'Hello, this is a test message.');
    await page.click('#submit');
}

async function runTest(factory: BrowserFactory) {
    const browser: Browser = await factory.createBrowser();
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await fillForm(page);
    await browser.close();
}

(async () => {
    const chromiumFactory = new ChromiumFactory();
    const webkitFactory = new WebKitFactory();

    await runTest(chromiumFactory);
    await runTest(webkitFactory);
})();