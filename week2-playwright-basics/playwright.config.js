// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
