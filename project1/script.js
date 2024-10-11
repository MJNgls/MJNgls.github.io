document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  let currentInput = "";
  let operator = "";
  let previousInput = "";

  // Function to handle button clicks
  function handleButtonClick(value) {
    if (value === "CE") {
      // Clear Everything button functionality
      clearEverything();
    } else if (["+", "-", "*", "/"].includes(value)) {
      // If an operator is clicked, store the current input and operator
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === "=") {
      // If equals is clicked, perform the calculation
      if (previousInput && currentInput && operator) {
        const result = calculate(
          parseFloat(previousInput),
          parseFloat(currentInput),
          operator
        );
        display.value = result;
        currentInput = result; // Set the result as the current input for further operations
        previousInput = "";
        operator = "";
      }
    } else {
      // For numbers, append to the current input
      currentInput += value;
      display.value = currentInput;
    }
  }

  // Function to perform basic calculations
  function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error"; // Handle division by zero
      default:
        return num1;
    }
  }

  // Function to clear everything
  function clearEverything() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
  }

  // Attach event listeners to all buttons
  document.querySelectorAll(".button-container button").forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(button.value);
    });
  });
});
