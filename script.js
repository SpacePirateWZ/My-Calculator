const operandButton = document.querySelectorAll('[data-operand]');
const operatorButton = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const posNegButton = document.querySelector('[data-pos-neg]');
const equalButton = document.querySelector('[data-equal]');
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
        if (operand === '0' && this.currentDisplay.startsWith('0') === true && this.currentDisplay.length > 0 && this.currentDisplay.length <= 1) {
            this.clear();
        }
        this.currentDisplay = this.currentDisplay.toString() + operand.toString();
    }

    chooseOperation(operator) { 
        if (this.currentDisplay === '') return // this is to prevent this function from running if there are no operands
        if (this.previousDisplay !== '') {
            this.operate(); // run operate() after checking that both currentDisplay & previousDisplay contain values
        }
        this.operation = operator;
        this.previousDisplay = this.currentDisplay;
        this.currentDisplay = ''
    }

    operate() {
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
        console.log(this.currentDisplay);
        this.displayScreen.innerText = this.currentDisplay;
    }
}

let calc = new Calculator(displayScreen);

operandButton.forEach(function(button){
    button.addEventListener('click', function(){
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
})

equalButton.addEventListener('click', function(){
    calc.operate();
    calc.updateDisplay();
})