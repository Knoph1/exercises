// Prompt for Name and Age
const userName = prompt("What is your name?");
const userAge = prompt("How old are you?");

// Calculate Year of Birth
const currentYear = new Date().getFullYear();
const yearOfBirth = currentYear - parseInt(userAge);

// Display the Result
alert(`Hello, ${userName}! You were probably born in ${yearOfBirth}.`);
