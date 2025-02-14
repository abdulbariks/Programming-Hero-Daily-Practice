// JavaScript String Methods
// JavaScript provides various built-in methods to manipulate and work with strings.
// Below is a list of commonly used string methods along with examples.

// 1. charAt(index)
// Returns the character at a specified index.

let str = "Hello";
console.log(str.charAt(1));

console.log(str.charCodeAt(1));

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2));
console.log("Hello ".repeat(5));

let str3 = "exa  mple";
let noSpaces = str3.replace(/\s/g, "");

console.log(noSpaces);
