let displayValue = "0";

function appendNumber(number) {
    displayValue += number;
    document.querySelector(".display").textContent = displayValue;
    
};

let firstNumber = null;
let operator = null;
let secondNumber = null;


function operate(op) {
    if (operator === null) {
        operator = op;
        firstNumber = parseFloat(displayValue)
        displayValue = '';

        
    }
    else{
        secondNumber = parseFloat(displayValue);
        displayValue = '';
        switch (operator) {
            case '+':
              displayValue = add(firstNumber, secondNumber);
              break;
            case '-':
              displayValue = subtract(firstNumber, secondNumber);
              break;
            case '*':
              displayValue = multiply(firstNumber, secondNumber);
              break;
            case '/':
              displayValue = divide(firstNumber, secondNumber);
              break;
            default:
              displayValue = 'Error';
        }
        firstNumber = null;
        operator = null;
        secondNumber = null;
    }
    document.querySelector(".display").textContent = displayValue;
    
};

function clearDisplay() {
    displayValue = '0';
    document.querySelector('.display').textContent = displayValue;
    firstNumber = null;
    operator = null;
    secondNumber = null;
  };