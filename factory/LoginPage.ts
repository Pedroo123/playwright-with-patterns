import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    async login(username: string, password: string): Promise<void> {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[type="submit"]');
    }
}