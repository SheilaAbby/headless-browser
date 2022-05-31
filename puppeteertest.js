const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch();

const url = 'https://browserstack.com';

const page = await browser.newPage();

await page.goto('https://browserstack.com');

const cookies = await page.cookies(url);

console.log('COOKIES',JSON.stringify(cookies));

//await page.screenshot({ path: 'browserstack.png' });

//await page.pdf({ path: 'browserstack.pdf', format: 'A4' });

await browser.close();

})();