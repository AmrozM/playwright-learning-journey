// example.spec.js
const { test, expect } = require('@playwright/test');

test('intentional failure', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Not the right text');
});
