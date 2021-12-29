const puppeteer = require('puppeteer')

var titleOut = document.getElementById('title')
var priceOut = document.getElementById('price')
var imgURLOut = document.getElementById('imgURL')

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    
    const [el] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el.getProperty('src')
    const imgURL = await src.jsonValue();
    
    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent')
    const title = await txt.jsonValue();
    
    const [el3] = await page.$x('//*[@id="corePrice_feature_div"]/div/span/span[2]');
    const txt2 = await el3.getProperty('textContent')
    const price = await txt2.jsonValue();

    console.log({imgURL, title, price});
    titleOut.innerHTML = {title}
    priceOut.innerHTML = {price}
    imgURLOut.innerHTML = {imgURL}

    browser.close();
}
scrapeProduct('https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1639435797&sr=8-1')