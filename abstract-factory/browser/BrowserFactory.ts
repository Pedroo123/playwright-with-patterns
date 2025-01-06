export interface BrowserFactory {
    createBrowser(): Promise<import('playwright').Browser>;
}