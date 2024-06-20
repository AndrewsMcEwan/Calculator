// Calculator 
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    
};

function clearDisplay() {
    display.value = "";
};


function calculate() {
    let error = false; // Flag to indicate error
    let result = null;
    let numbers = [];
    let currentNumber = "";
    
    // Split the display value based on operators
    for (let char of display.value) {
      if ("+-*/".includes(char)) {
        numbers.push(parseFloat(currentNumber));
        currentNumber = "";
        numbers.push(char);
      } else {
        currentNumber += char;
      }
    }
    
    // If there's a trailing number, add it
    if (currentNumber !== "") {
      numbers.push(parseFloat(currentNumber));
    }
    
    // Perform calculations based on operator sequence
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "number") {
        if (result === null) {
          result = numbers[i];
        } else {
          switch (numbers[i - 1]) {
            case '+':
              result += numbers[i];
              break;
            case '-':
              result -= numbers[i];
              break;
            case '*':
              result *= numbers[i];
              break;
            case '/':
              if (numbers[i] === 0) {
                error = true;
                break;
              }
              result /= numbers[i];
              break;
          }
        }
      }
    }
    
    if (error) {
      display.value = "Error";
    } else {
      display.value = result.toFixed(2);  // Round to 2 decimal places
    }
  };