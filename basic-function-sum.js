// Exercise 3: Basic Function Creation

// Step 1 & 2: Declare the function and return the sum
function sum(num1, num2) {
  return num1 + num2;
}

// Step 3: Call the function with two numbers and store the result
const result = sum(8, 5); // You can replace 8 and 5 with any numbers

// Step 4: Print the result to the console
console.log("The sum is:", result);

// Improved: Adds input, validation, and output to page as well as console

function sum(a, b) {
  return a + b;
}

// Prompt user for numbers
function getNumberInput(message) {
  let value;
  while (true) {
    value = prompt(message);
    if (value === null) return null;
    value = value.trim();
    if (/^-?\d+(\.\d+)?$/.test(value)) {
      return Number(value);
    }
    alert("Please enter a valid number.");
  }
}

function runSum() {
  const num1 = getNumberInput("Enter the first number:");
  if (num1 === null) {
    alert("Input cancelled.");
    return;
  }
  const num2 = getNumberInput("Enter the second number:");
  if (num2 === null) {
    alert("Input cancelled.");
    return;
  }
  const result = sum(num1, num2);
  console.log(`The sum of ${num1} and ${num2} is ${result}.`);
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div style="margin-top:15px;color:green;font-weight:bold;">The sum of ${num1} and ${num2} is ${result}.</div>`
  );
}
