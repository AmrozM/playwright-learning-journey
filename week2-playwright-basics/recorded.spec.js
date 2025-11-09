import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByTestId('todo-title').click();
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
});