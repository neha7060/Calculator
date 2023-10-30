// Get elements
const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");

let currentInput = "";
let operator = "";
let firstOperand = null;

// Event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

// Event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            operator = button.textContent;
            currentInput = "";
        } else if (currentInput !== "") {
            const secondOperand = parseFloat(currentInput);
            currentInput = operate(firstOperand, secondOperand, operator);
            operator = button.textContent;
            display.textContent = currentInput;
        }
    });
});

// Event listener for clear button
clearButton.addEventListener("click", () => {
    currentInput = "";
    operator = "";
    firstOperand = null;
    display.textContent = "0";
});

// Event listener for calculate button
calculateButton.addEventListener("click", () => {
    if (operator !== "" && currentInput !== "") {
        const secondOperand = parseFloat(currentInput);
        currentInput = operate(firstOperand, secondOperand, operator);
        operator = "";
        firstOperand = null;
        display.textContent = currentInput;
    }
});

// Function to perform calculations
function operate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "*":
            return firstOperand * secondOperand;
        case "/":
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}
