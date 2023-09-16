const operandButton = document.querySelectorAll('[data-operand]');
const operatorButton = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const posNegButton = document.querySelector('[data-pos-neg]');
const percentButton = document.querySelector('[data-percent]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const displayScreen = document.querySelector('[data-display]');

class Calculator {
    constructor(displayScreen) {
        this.displayScreen = displayScreen;
        this.clear(); // is important to run this function at the beginning to set the currentDisplay & previousDisplay to empty string, so that the toString() in appendNumber() can function
    }

    clear() {
        this.currentDisplay = '';
        this.previousDisplay = '';
        this.operation = undefined;
    }

    appendNumber(operand) {
        if (operand === '.' && this.currentDisplay.includes('.')) return // prevent multiple dots
        if (this.currentDisplay.startsWith('0') === true && this.currentDisplay.length > 0 && this.currentDisplay.length <= 1) {
            this.clear(); // fixed loophole that allowed number like 0123 to be entered
        }
        this.currentDisplay = this.currentDisplay.toString() + operand.toString();
    }

    chooseOperation(operator) { 
        if (this.currentDisplay === '') return // this is to prevent this function from running if there are no operands
        if (this.previousDisplay !== '') {
            this.operate(); // run operate() after checking that both previousDisplay & currentDisplay contain values
        }
        this.operation = operator;
        this.previousDisplay = this.currentDisplay;
        this.currentDisplay = '';
        if(this.previousDisplay.length > 9) {
            this.previousDisplay = this.previousDisplay.substring(0,9);
        }
        this.displayScreen.innerText = this.previousDisplay; // to display results subsequently after each operation without pressing 'equal' button
    }

    chooseOperation2(operator) { 
        if (operator === '+/-' && parseFloat(this.currentDisplay) > 0) {
            newNum = (parseFloat(this.currentDisplay) * -1).toString(); 
            this.currentDisplay = newNum;
            if(this.currentDisplay.length > 9) {
                this.currentDisplay = this.currentDisplay.substring(0,9);
            }
            this.displayScreen.innerText = this.currentDisplay;
        } else if (operator === '+/-' && parseFloat(this.currentDisplay) < 0) {
            newNum = (parseFloat(this.currentDisplay) * -1).toString();
            this.currentDisplay = newNum;
            if(this.currentDisplay.length > 9) {
                this.currentDisplay = this.currentDisplay.substring(0,9);
            }
            this.displayScreen.innerText = this.currentDisplay;
        } else if (operator === '%') {
            newNum = (parseFloat(this.currentDisplay) / 100).toString(); 
            this.currentDisplay = newNum;
            if(this.currentDisplay.length > 9) {
                this.currentDisplay = this.currentDisplay.substring(0,9);
            }
            this.displayScreen.innerText = this.currentDisplay;
        } else if (operator === 'del') {
            newNum = this.currentDisplay.split('');
            newNum.pop();
            newNum = newNum.join('');
            this.currentDisplay = newNum;
            if(this.currentDisplay.length > 9) {
                this.currentDisplay = this.currentDisplay.substring(0,9);
            }
            if(this.currentDisplay === '') {
                this.displayScreen.innerText = '0'; // set to delete down to display zero instead of blank
            } else {
                this.displayScreen.innerText = this.currentDisplay;
        }
    }
}

    operate() {
        if (this.currentDisplay === '') return false // this is to prevent the 'equal' button from running if no number is entered at the beginning
        let result; // to store operation result
        const previousValue = parseFloat(this.previousDisplay);
        const currentValue = parseFloat(this.currentDisplay);
        if (isNaN(previousValue) || isNaN(currentValue)) return
        switch (this.operation) {
        case '+': 
            result = previousValue + currentValue;
            break
        case '-': 
            result = previousValue - currentValue;
            break
        case '*': 
            result = previousValue * currentValue;
            break
        case '/': 
            result = previousValue / currentValue;
            break
        default:
            return
        }
        this.currentDisplay = result.toString(); // convert result back to string so that the updateDisplay() can perform the substring(0,9) on it
        this.operation = undefined;
        this.previousDisplay = '';
    }

    updateDisplay() {
        if(this.currentDisplay.length > 9) {
            this.currentDisplay = this.currentDisplay.substring(0,9);
        }
        this.displayScreen.innerText = this.currentDisplay;
        if(lastClickedButton !== null) { // after pressing 'equal' button, clicking the operand button should restart the display screen and reset the entire calculation instead of appending to the result
            this.clear();
            lastClickedButton = null;
        }
    }
}

let calc = new Calculator(displayScreen);

let lastClickedButton = null;
let newNum = '';

operandButton.forEach(function(button){
    button.addEventListener('click', function(e){
        calc.appendNumber(button.innerText);
        calc.updateDisplay();
    })
})

operatorButton.forEach(function(button){
    button.addEventListener('click', function(){
        calc.chooseOperation(button.innerText);
    })
})

allClearButton.addEventListener('click', function(){
    calc.clear();
    calc.updateDisplay();
    displayScreen.innerText = '0'; // set to display as '0' instead of blank after clicking 'AC' button
})

equalButton.addEventListener('click', function(e){
    calc.operate();
    if(calc.operate() === false) return // prevent the functions below from executing if no number is entered at the beginning
    handleButtonClick(e);
    calc.updateDisplay();
})

function handleButtonClick(event) {
    lastClickedButton = event.target; // get the button element that was clicked
    return lastClickedButton;
}

posNegButton.addEventListener('click', function(){
    calc.chooseOperation2('+/-');
})

percentButton.addEventListener('click', function(){
    calc.chooseOperation2('%');
})

deleteButton.addEventListener('click', function(){
    calc.chooseOperation2('del');
})