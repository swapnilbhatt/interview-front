// const {By,Key,until, Builder} = require("selenium-webdriver");
// require("chromedriver");
//
// async function example(){
//
//     var searchString = "Automation testing with Selenium";
//
//     //To wait for browser to build and launch properly
//     let driver = await new Builder().forBrowser("chrome").build();
//
//     //To fetch http://google.com from the browser with our code.
//     await driver.get("http://localhost:63342/interview-front/index.html");
//
//     let host = await driver.findElement(By.tagName("profile-card"));
//     let shadowRoot = await driver.executeScript("return arguments[0].shadowRoot", host);
//     console.log(shadowRoot);
//     let t = await shadowRoot.findElement(By.id("toggle"));
//    // t.click();
//     console.log(t.getTagName());
//     // profileCard.getShadowRoot().then((root)=>{
//     //     console.log("root"+root);
//     //
//     //     let toggle =  root.getElementById("toggle");
//     //    console.log("toggle"+toggle);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // });
//
//     //  let toggle = await driver.executeScript('document.querySelector("body > profile-card").shadowRoot.querySelector("#toggle")');
//
//   //  toggle.click();
//
//     driver.sleep(3000);
//     //Verify the page title and print it
//     // var title = await driver.getTitle();
//     // console.log('Title is:',title);
//
//     //It is always a safe practice to quit the browser after execution
//     await driver.quit();
//
// }
//
// example()