// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];

// console.log(colors.reverse());
let reversed = [];
for (let i = colors.length - 1; i >= 0; i--) {
  reversed.push(colors[i]);
}
console.log(reversed);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 == 0) {
    evenNumbers.push(element);
  }
}
console.log(evenNumbers);

// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers1 = ["Tom", "Tim", "Tin", "Tik"];
let result = "";
for (const number of numbers1) {
  result += number;
}

console.log(result);

// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = "I am a hard working person";
const words = statement.split(" ");
console.log(words);
const wordsreverse = words.reverse();
console.log(wordsreverse);
const sentencerevers = wordsreverse.join(" ");
console.log(sentencerevers);
