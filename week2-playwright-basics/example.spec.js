const {test, expect} = require(`playwright/test`);
test(`Basic test - Open page`, async({page}) => {
    await page.goto(`https://playwright.dev/`);
    await expect(page).toHaveTitle(/Playwright/);
});