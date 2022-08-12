const puppeteer = require("puppeteer");
const codeObj = require("./code");

const loginLink = 'https://www.hackerrank.com/auth/login';
const email = 'nic56@xyz.com'; 
const password = '123456';




// iife -> immediately invoked function expression
// mtlb hum func wahi likhte hai wahi declare karte hai wahi define karte hai aur ussi jagah pe usse call kar dete hai
(async function(){
    try {
        const browserInstance = await puppeteer.launch({
            headless:false,
            slowMo:true,
            defaultViewport:null,
            args:["--start-maximized"]
        });

        let newTab = await browserInstance.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']", email, {delay : 50});
        await newTab.type("input[id='input-2']", password, {delay : 50});
        await newTab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled', {delay:50});
        await waitAndClick('.topic-card a[data-attr1="algorithms"]', newTab);
        await waitAndClick('input[value="warmup"]', newTab);
        let allChallanges = await newTab.$$('.ui-content.has-icon.align-icon-right', {delay:50});
        console.log(allChallanges.length);
        await questionSolver(newTab, allChallanges[1], codeObj.answers[0]);

    } catch (error) {
        console.log(error);
    }
})()


async function waitAndClick(selector, cPage){
    await cPage.waitForSelector(selector);
    let selectorClicked = cPage.click(selector);
    return selectorClicked;
}

async function questionSolver(page, question, answer){
    try {
        await question.click();
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await waitAndClick('.checkbox-input', page);
        await waitAndClick('textarea.custominput', page);
        await page.type('textarea.custominput', answer, {delay:10});
        await page.keyboard.down('Control');
        await page.keyboard.press('A', {delay:100});
        await page.keyboard.press('X', {delay:100});
        await page.keyboard.up('Control');
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await page.keyboard.down('Control');
        await page.keyboard.press('A', {delay:100});
        await page.keyboard.press('V', {delay:100});
        await page.keyboard.up('Control');
        await waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);

    } catch (error) {
        console.log(error);
    }
    

}


// let page;

// browserOpen
//     .then(function (browserObj){
//         const browserOpenPromise = browserObj.newPage();
//         return browserOpenPromise;
//     }).then(function (newTab){
//         page = newTab;
//         let hackerRankOpenPromise = newTab.goto(loginLink);
//         return hackerRankOpenPromise;
//     }).then(function (){
//         let emailIsEntered = page.type("input[id='input-1']", email, {delay : 50});
//         return emailIsEntered;  
//     }).then(function (){
//         let passwordIsEntered = page.type("input[id='input-2']", password, {delay : 50});
//         return passwordIsEntered;
//     }).then(function (){
//         // page.keyboard is udef to type special character 
//         // let enterWillBePressed = page.keyboard.press("Enter");
//         // return enterWillBePressed;
//         let loginButtonClicked = page.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled', {delay:50});
//         return loginButtonClicked;
//     }).then(function (){
//         let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
//         return clickOnAlgoPromise;
//     }).then(function (){
//         let getToWarmUp = waitAndClick('input[value="warmup"]', page);
//         return getToWarmUp;
//     }).then(function (){
//         let allChallengesPromise = page.$$('.ui-content.has-icon.align-icon-right', {delay:50});
//         return allChallengesPromise;
//     }).then(function (quesArr){
//         console.log('length : ', quesArr.length);
//         let quesWillBeSolved = questionSolver(page, quesArr[1], codeObj.answers[0]);
//         return quesWillBeSolved;
//     })




// function questionSolver(page, question, answer) {
//     return new Promise(function (resolve, reject) {
//         let quesWillBeClicked = question.click();
//         quesWillBeClicked.then(function (){
//             let editorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
//             return editorInFocusPromise;
//         }).then(function (){
//             return waitAndClick('.checkbox-input', page);
//         }).then(function (){
//             return waitAndClick('textarea.custominput', page);
//         }).then(function (){
//             return page.type('textarea.custominput', answer, {delay:10});
//         }).then(function (){
//             let ctrlIsPressed = page.keyboard.down('Control');
//             return ctrlIsPressed;
//         }).then(function (){
//             let AIsPressed = page.keyboard.press('A', {delay:100});
//             return AIsPressed;
//         }).then(function (){
//             let XIsPressed = page.keyboard.press('X', {delay:100});
//             return XIsPressed;
//         }).then(function (){
//             let ctrlIsUpPressed = page.keyboard.up('Control');
//             return ctrlIsUpPressed;
//         }).then(function (){
//             let mainEditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
//             return mainEditorInFocusPromise;
//         }).then(function (){
//             let ctrlIsPressed = page.keyboard.down('Control');
//             return ctrlIsPressed;
//         }).then(function (){
//             let AIsPressed = page.keyboard.press('A', {delay:100});
//             return AIsPressed;
//         }).then(function (){
//             let VIsPressed = page.keyboard.press('V', {delay:100});
//             return VIsPressed;
//         }).then(function (){
//             let ctrlIsUpPressed = page.keyboard.up('Control');
//             return ctrlIsUpPressed;
//         })
//         // .then(function (){
//         //     let runCodePromise = waitAndClick('.ui-btn.ui-btn-normal.ui-btn-secondary.pull-right.msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled', page);
//         //     return runCodePromise;
//         //     // return page.click('', {delay:100});
//         // })
//         .then(function (){
//             let submitCodePromise = waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
//             return submitCodePromise;
//         }).then(function(){
//             resolve();
//         }).catch(function(){
//             reject();
//         })
//     })
// }

