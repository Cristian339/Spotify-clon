const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });

  try {
    console.log('Navigating to http://localhost:4200...');
    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });

    // Wait for the tracks to load
    await page.waitForSelector('app-card-player');

    console.log('Taking screenshot of Tracks page...');
    await page.screenshot({ path: 'verification/1_tracks.png' });

    console.log('Navigating to History page...');
    await page.click('li:has-text("Buscar")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'verification/2_history.png' });

    console.log('Navigating to Favorites page...');
    await page.click('li:has-text("Tu biblioteca")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'verification/3_favorites.png' });

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    await browser.close();
  }
})();
