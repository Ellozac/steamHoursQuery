import puppeteer from "puppeteer-core";
import dotenv from "dotenv"
dotenv.config();

const PATHTOCHROME = process.env.PATHTOCHROME;
const USERNAME = process.env.STEAMUSERNAME;
const PASSWORD = process.env.PASSWORD;
let userIdForSearch = process.argv[2];
let gameForHours = process.argv[3];
async function run() {
  let browser;
  try {
    let browser = await puppeteer.launch({
      headless: true,
      executablePath: PATHTOCHROME,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security'
      ]
    });

    const page = await browser.newPage();
    
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache',
    });
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://steamcommunity.com/login/home/');

    // await page.waitForSelector('.newlogindialog_TextInput_2eKVN');
    await page.waitForSelector('div.newlogindialog_TextField_2KXGK:nth-child(1) > input:nth-child(3)');
    await page.type('div.newlogindialog_TextField_2KXGK:nth-child(1) > input:nth-child(3)', USERNAME);
    await page.type('div.newlogindialog_TextField_2KXGK:nth-child(2) > input:nth-child(3)', PASSWORD);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2250);
    await page.goto(`https://steamcommunity.com/id/${userIdForSearch}/games/?tab=all`)
    await page.waitForSelector("#responsive_page_template_content > div:nth-child(4) > div > div.gameslistapp_DisplayControls_2_BHL > div > input");
    await page.type('#responsive_page_template_content > div:nth-child(4) > div > div.gameslistapp_DisplayControls_2_BHL > div > input', gameForHours)
    await page.waitForTimeout(100)
    const hoursElement = await page.$('#responsive_page_template_content > div:nth-child(4) > div > div.gameslistitems_List_3tY9v.Panel.Focusable > div:first-child > div > div > span');
    // const hoursElement = await page.$("#responsive_page_template_content > div:nth-child(4) > div > div.gameslistitems_List_3tY9v.Panel.Focusable > div.gameslistitems_GamesListItemContainer_29H3o.gameslistitems_HasAdultContent_2jXu5 > div > div.gameslistitems_Playtime_2Eeyh > span")
    const Hours = await hoursElement.evaluate(element => {return element.textContent})
    console.log(Hours.substring(12));
    await browser?.close();
  } catch (e) {
    console.error('Scraping failed:', e);
    await browser?.close();
  } 
}

run();

