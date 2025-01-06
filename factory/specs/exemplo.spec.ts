import {test, expect} from '@playwright/test';
import { PageFactory } from '../pages/PageFactory';

test('Fill the form', async ({ page }) => {

    const homePage = PageFactory.getHomePage(page);
    await homePage.open();

    const loginPage = PageFactory.getLoginPage(page);
    await loginPage.login('john', 'demo');

    const formName = page.locator('#loginPanel');

    await expect(formName).not.toBeNull();

});