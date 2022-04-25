const puppeteer = require('puppeteer')
const {toMatchImageSnapshot} = require('jest-image-snapshot')

expect.extend({toMatchImageSnapshot})

describe("visual regression testing",()=>{
    let browser;
    let page;

    beforeAll(async function(){
        browser = await puppeteer.launch({
            headless:false,
            slowMo:100
        })
        page = await browser.newPage()
        await page.goto("http://localhost:63342/interview-front/index.html")
    });

    test('page collapsed details', async function(){
        await page.waitForSelector('h1')
        const image = await page.screenshot("collapsed");
        expect(image).toMatchImageSnapshot({
            failureThresholdType:'pixel',
            failureThreshold:500
        })
    });

    test('page expanded details', async function(){
        await page.waitForSelector('h1');
        const buttonHandle = await page.evaluateHandle(`document.querySelector("body > profile-card").shadowRoot.querySelector("#toggle")`);
        await  buttonHandle.click();
        const image = await page.screenshot("expanded");
        expect(image).toMatchImageSnapshot({
            failureThresholdType:'pixel',
            failureThreshold:500
        })
    });

    afterAll(async function(){
        await browser.close()
    })
});

// const puppeteer = require('puppeteer');
// (async () => {
//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();
//     await page.goto('http://localhost:63342/interview-front/index.html');
//     await page.screenshot({ path: 'example.png' });
//
//     const buttonHandle = await page.evaluateHandle(`document.querySelector("body > profile-card").shadowRoot.querySelector("#toggle")`);
//     await  buttonHandle.click();
//     await page.screenshot({ path: 'example2.png' });
//
//     await browser.close();
// })();