// ES6
// import puppeteer from "puppeteer";

// common JS, mainly in Node.JS
const puppeteer = require("puppeteer");

// functions in puppeteer are asynchronous/promise
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.1utama.com.my/mall-shop/?storeCat=food-beverages"
  );
  let i = 1;
  // this is css selector way
  // xpath doesn't work and I'm confused
  try {
    // select all elements that match the CSS selector
    const elementSelectorOfFoodStore = await page.$$("#directory__title > a");

    console.log("List of 1 Utama Shops:");

    for (const foodStoreName of elementSelectorOfFoodStore) {
      // extract their text content
      const name = await page.evaluate((el) => el.textContent, foodStoreName);
      // Template Strings
      console.log(`${i}. ${name}`);
      i += 1;
    }
  } catch (error) {
    console.error("Elements not found", error);
  }
  console.log("End of list");
  await browser.close();
})();
