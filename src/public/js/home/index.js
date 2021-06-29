"use strict"

const input = document.querySelector("div input"),
    inputBtn = document.querySelector("button"),
    result = document.querySelector('#result');

inputBtn.addEventListener('click', inputReq);

function inputReq( ) {
    const req = input.value
    if (req === 'exit') exitMsg();
    const reqArr = req.match(/[0-9]+[.]?[0-9]?|[^0-9]/gi).filter((a) => !a.includes(" "));
    calculate(reqArr);
};

function exitMsg () {return alert('종료')};

function calculate(reqArr) {
    if (reqArr.length === 1) return console.log(reqArr[0]);
    for (let i = 0; i < reqArr.length; i++) {
        if (reqArr.includes('*') || reqArr.includes('/')) preCalculate(i, reqArr); 
        else if (reqArr[i] === '+' || reqArr[i] === '-') nextCalculate(i, reqArr);
    };
};

function preCalculate(i, reqArr) {
    const preValue = Number(reqArr[i - 1]),
        nextValue = Number(reqArr[i + 1]);
    if (reqArr[i] === '*') {
        const mult = preValue * nextValue
        reqArr.splice(i - 1, 3, mult.toFixed(2));
        calculate(reqArr);
    };
    if (reqArr[i] === '/') {
        const div = preValue / nextValue
        reqArr.splice(i - 1, 3, div.toFixed(2));
        calculate(reqArr);
    };
};

function nextCalculate(i, reqArr) {
    const preValue = Number(reqArr[i - 1]),
        nextValue = Number(reqArr[i + 1]);
    if (reqArr[i] === '+') {
        const add = preValue + nextValue;
        reqArr.splice(i - 1, 3, add);
        calculate(reqArr);
    };
    if (reqArr[i] === '-') {
        const sub = preValue - nextValue;
        reqArr.splice(i - 1, 3, sub);
        calculate(reqArr);
    };
};


