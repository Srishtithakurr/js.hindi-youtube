//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);


console.log("2">1);
console.log("02">1);

console.log(null > 0);  // Prints: false (null becomes 0; is 0 > 0? No)
console.log(null >= 0); // Prints: true  (null becomes 0; is 0 >= 0? Yes)

//Unlike null, undefined converts to NaN (Not a Number)
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

//The double equals check only cares about the value, not the data type
console.log("2" == 2); // Prints: true
console.log(1 == true); // Prints: true (true converts to number 1)

//The triple equals check looks at both the value AND the data type
console.log("2" === 2); // Prints: false (Because "2" is a String and 2 is a Number)
console.log(1 === true); // Prints: false (Because 1 is a Number and true is a Boolean)



