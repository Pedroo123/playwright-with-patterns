import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    async open(): Promise<void> {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }
}