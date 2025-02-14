// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function temperature(Celsius) {
  let Fahrenheit = (Celsius * 9) / 5 + 32;
  return Fahrenheit;
}
console.log(temperature(22));

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array

function taskTwo(arr, find) {
  let count = 0;
  for (const element of arr) {
    if (element === find) {
      count++;
    }
  }
  return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
let find = 5;
console.log(taskTwo(numbers, find));
let find2 = 25;
console.log(taskTwo(numbers, find2));

// Task-3:
// Write a function to count the number of vowels in a string.
function taskThree(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (const element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}
console.log("Number of Vowels in a String", taskThree("hello bangladesh"));

// Task-4:
// Write a function to find the longest word in a given string.
function taskFour(str) {
  let words = str.split(" ");
  let longestWord = "";
  //   for (let i = 0; i < words.length; i++) {
  //     if (words[i].length > longestWord.length) {
  //       longestWord = words[i];
  //     }
  //   }

  //   return longestWord;
  // }
  for (const element of words) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}
let inputString = "I am learning Programming to become a programmer";

console.log(taskFour(inputString));

// Task-5:
// Generate a random number between 10 to 20
function taskFive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(taskFive(10, 20));

function namota(number) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${number} * ${index} = ${number * index}`);
  }
}
namota(7);
