"use strict"; //treat all JS code as newer version

// alert (3+3) // we are using node.js , not browser

console.log(3+3)

//code readability should be high

console.log("Srishti")

//1)PRIMITIVE DATATYPES

//String(Text)
let name = "Srishti";
let greeting = "Hello, welcome to Node.js!";
//(either " " or ' ')//

//Number (All Math Values)
let age = 20;         // Integer (whole number)
let pi = 3.14;        // Float (decimal number)

//Boolean (The Switch)
let isLoggedIn = true;
let hasPaidBill = false;

//undefined
let userEmail; 
console.log(userEmail); // Prints: undefined

//Null (Intentionally Empty)
let creditCardNumber = null; // The user hasn't added a card yet


//2)NON PRIMITIVE DATA TYPES

//Object (The Detailed Profile-key value pairs)
let student = {
    firstName: "Srishti",
    age: 20,
    isLearningBackend: true
};

//Array (square brackets [ ])
let programmingLanguages = ["JavaScript", "Python", "C++"];



//checking data type in code
console.log(typeof age);

console.log(typeof creditCardNumber); //will print object