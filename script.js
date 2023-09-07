let displayValue = '';
let displayValue2 = '';
let firstNum = displayValue;
let secondNum = displayValue2;
let operator;
let functionButtonClicked = false;

const displayScreen = document.querySelector("#display");
const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const button0 = document.querySelector("#zero");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const clearButton = document.querySelector("#clear");
const posNegButton = document.querySelector("#posneg");
const percentButton = document.querySelector("#percent");
const pointButton = document.querySelector("#point");
const equalButton = document.querySelector("#equal");

// initialize display screen
// initialize buttons

// button1.onclick = function() {
//     populateToScreen(1);
// };
button1.onclick = () => populateToScreen(1);
button2.onclick = () => populateToScreen(2);
button3.onclick = () => populateToScreen(3);
button4.onclick = () => populateToScreen(4);
button5.onclick = () => populateToScreen(5);
button6.onclick = () => populateToScreen(6);
button7.onclick = () => populateToScreen(7);
button8.onclick = () => populateToScreen(8);
button9.onclick = () => populateToScreen(9);
button0.onclick = () => populateToScreen(0);
clearButton.onclick = () => clearScreen();

const operate = function(firstNum, operator, secondNum) {
    if (functionButtonClicked === false) {
        functionButtonClicked = true;
    } else {
        displayScreen.innerText = '0',
        displayValue = '';
        return;
    }
    if (operator === 'add') {
        let result = add(firstNum, secondNum);
        return result;
    } else if (operator === 'subtract') {
        let result = subtract(firstNum, secondNum);
        return result;
    }  else if (operator === 'multiply') {
        let result = multiply(firstNum, secondNum);
        return result;
    } else if (operator === 'divide') {
        let result = divide(firstNum, secondNum);
        return result;
    }
}

// addButton.addEventListener('click', function() {
//     operate(firstNum, 'add', secondNum);
// });
addButton.addEventListener('click', () => operate(firstNum, 'add', secondNum));
subtractButton.addEventListener('click', () => operate(firstNum, 'subtract', secondNum));
multiplyButton.addEventListener('click', () => operate(firstNum, 'multiply', secondNum));
divideButton.addEventListener('click', () => operate(firstNum, 'divide', secondNum));


function add(firstNum, secondNum) {
    return Number(firstNum) + Number(secondNum);
}

function subtract(firstNum, secondNum) {
    return Number(firstNum) - Number(secondNum);
}

function multiply(firstNum, secondNum) {
    return Number(firstNum) * Number(secondNum);
}

function divide(firstNum, secondNum) {
    return Number(firstNum) / Number(secondNum);
}

function populateToScreen(num) {
    if (displayValue.length < 9) {
        displayValue = displayValue + num + '';
        displayScreen.innerText = displayValue;
    }
    if (functionButtonClicked === true) {
        displayScreen.innerText = displayValue2;
        if (displayValue2.length < 9) {
            displayValue2 = displayValue2 + num + '';
            displayScreen.innerText = displayValue2;
        }
    }
}

function clearScreen() {
    displayScreen.innerText = '0',
    displayValue = '';
}



