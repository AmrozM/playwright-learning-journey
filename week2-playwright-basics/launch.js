const {chromium} = require(`playwright`);

(async () => {

  const browser =  await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto(`https://google.com`);
  console.log(await page.title());

  await browser.close();
})();