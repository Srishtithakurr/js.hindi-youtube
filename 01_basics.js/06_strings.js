"use strict";

// ==========================================
// 1. STRING DECLARATIONS
// ==========================================
const primaryUser = "Srishti"; // Primitive string, goes into Stack
const creativeUser = new String("Srishti_Dev"); // Object string, goes into Heap

// ==========================================
// 2. MODERN STRING INTERPOLATION
// ==========================================
// Always use backticks (``) - called Template Literals. Avoid using the old '+' connector.
let projectCount = 12;
console.log(`Hello, my name is ${primaryUser.toUpperCase()} and I have built ${projectCount} backend tools.`);

// ==========================================
// 3. IMMUTABILITY CONCEPT
// ==========================================
/* Strings in JavaScript are IMMUTABLE. Once created, they cannot be mutated.
   Any method run below returns a BRAND NEW copy. The original variable stays safe.
*/
let originalGame = "Valorant";
originalGame.toUpperCase(); 
console.log(originalGame); // Prints: "Valorant" (NOT UPPERCASE, because original didn't change)

// ==========================================
// 4. ESSENTIAL STRING METHODS
// ==========================================
let sampleText = "   Backend-Development-With-Node   ";

// 1. Check length property
console.log(sampleText.length); // Total characters including white spaces

// 2. Trim whitespace out
let cleanText = sampleText.trim();
console.log(cleanText); // "Backend-Development-With-Node"

// 3. Find character at specific index positions (Starts at 0)
console.log(cleanText.charAt(8)); // Prints: "D"

// 4. Find index of a specific character
console.log(cleanText.indexOf('-')); // Prints: 7

// 5. Replace parts of a string
let databaseUrl = "https://github.com/srishti%20thakur";
let optimizedUrl = databaseUrl.replace('%20', '-');
console.log(optimizedUrl); // "https://github.com/srishti-thakur"

// 6. Include check (Returns Boolean)
console.log(optimizedUrl.includes("github")); // Prints: true

// 7. Split string into an Array format based on a delimiter separator
let keywordsArray = cleanText.split('-');
console.log(keywordsArray); // Prints: [ 'Backend', 'Development', 'With', 'Node' ]

// ==========================================
// 5. SLICING STRINGS: SLICE() VS SUBSTRING()
// ==========================================
let title = "Minecraft";

// substring() ignores negative numbers and treats them as index 0
console.log(title.substring(0, 4)); // Prints: "Mine"

// slice() actively accepts negative numbers to count backward from the very end
console.log(title.slice(-5)); // Prints: "craft"