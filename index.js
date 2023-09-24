// ES6
// import puppeteer from "puppeteer";

// common JS, mainly in Node.JS
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com");
  // other actions...
  await browser.close();
})();
