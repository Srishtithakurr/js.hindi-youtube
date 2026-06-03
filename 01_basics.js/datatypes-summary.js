//1. Primitive Data Types (Call by Value)
//When you assign a primitive data type to a variable, JavaScript creates a brand new copy of that value in memory. If you pass it to another variable, it passes a copy of the value, not the original box.

//String, Number, Boolean, null (Empty on purpose), undefined (Declared but no value given yet)

//Symbol (Used to create completely unique identifiers)

//BigInt (For massive numbers that regular Numbers can't handle)

//2. Non-Primitive / Reference Data Types (Call by Reference)
//When you create these, JavaScript doesn't store the actual data inside the variable. Instead, it allocates space in a deeper part of your memory (called the Heap) and gives your variable a pointer reference (like an address) to where that data lives. If you copy an object, both variables point to the exact same address!

//Array

//Object

//Functions

//Javascript is dynamically typed


//stack(primitive)
//heap(non-primitive)

//firstly we will see how stack memory works
let nickname = "Srishti"
let official_name = nickname

official_name = "Srishti Thakur"
console.log(official_name); // Prints: "Srishti" (Unchanged!)
console.log(nickname); // Prints: "Srishti Thakur"

//secondly I will write an example for heap memory
let userOne = {
    email : "Parthbansal2007@gmail.com" ,
    upi_id : "rekhabansal@ybl"
}
 let userTwo = userOne //copies refrence address not the actual address
  

  userTwo.email = "srishtithakur2024@gmail.com"//modified shared data in the heap

console.log(userOne.email)
console.log(userTwo.email)
