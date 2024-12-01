import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    }
};

export default config;