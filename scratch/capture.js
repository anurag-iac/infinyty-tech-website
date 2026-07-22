const { chromium } = require(require.resolve('playwright', { paths: [process.cwd(), 'C:/Users/anura/AppData/Local/npm-cache/_npx'] }));

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('http://localhost:3000/demos/operations-portal/index.html');
  await page.waitForTimeout(1000);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'assets/ops-portal-real.png' });
  await browser.close();
  console.log('Done!');
})();
