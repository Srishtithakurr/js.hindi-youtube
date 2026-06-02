console.log(2+2)
console.log("2"+2)
console.log(2+2+"2") //it does 2+2=4 and then glues to it
console.log("2"+2+2)//it sees text first so it treats everything after as text
console.log(2+"10")//prints 210
console.log("10" + 2); // Prints: "102" (Plus glues text)
console.log("10"-2) //// Prints: 8     (Minus forces "10" to become the number 10!)
//if you use a minus sign with a string, JavaScript does the exact opposite of what it did with the plus sign: it forces the string to become a number.
console.log(2-"10")
console.log("10" * "2"); // Prints: 20    (Multiplication forces both to become numbers)


//MISLEADING OUTPUT
let conversion = Number("Srishti123"); 
console.log(conversion);        // Prints: NaN
console.log(typeof conversion); // Prints: "number" 

//the golden rule used by professionals is"NEVER LET JAVASCRIPT GUESS"
let input = "50";

// Bad & Confusing:
let wrongResult = input + 10; // "5010"

// Good & Predictable:
let safeResult = Number(input) + 10; // 60
