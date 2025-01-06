import { Page } from 'playwright';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export class PageFactory {
    static getHomePage(page: Page): HomePage {
        return new HomePage(page);
    }

    static getLoginPage(page: Page): LoginPage {
        return new LoginPage(page);
    }
}