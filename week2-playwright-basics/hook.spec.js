const {test} = require(`@playwright/test`);

test.beforeEach(async({page}) => {
await page.goto(`https://demo.playwright.dev/todomvc`);
});

test('add a todo', async({page}) => {
    await page.getByPlaceholder(`What needs to be done?`).fill(`Learn Playwright`);
    await page.keyboard.press(`Enter`);
});

test.afterEach(async({page}) => {
    await page.screenshot({path: `screenshot-${Date.now()}.png` });

});
