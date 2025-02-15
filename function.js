// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
  multi = num1 * num2 * num3 * num4;
  return multi;
}

const result = multiply(2, 3, 2, 3);
console.log(result);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function taskTwo(number) {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return number * 2;
  }
}
console.log(taskTwo(4));
console.log(taskTwo(5));

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numArray, size) {
  let sum = 0;
  for (const element of numArray) {
    sum += element;
  }
  return sum / size;
}

let numArray = [2, 3, 5, 4];
let size = numArray.length;

console.log(make_avg(numArray, size));

// Task-4
// Write a function called count_zero() which will take a binary string
// (Binary string is a string which is consist of only 0 and 1)
// as parameter and count how many 0’s are there in that string.
function count_zero(binaryString) {
  let count = 0;
  for (let char of binaryString) {
    if (char === "0") {
      count++;
    }
  }

  return count;
}

const binaryStr = "1000010010100";

console.log(count_zero(binaryStr));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.
// If even return Even. If odd return Odd

function odd_even(num) {
  if (num % 2 == 0) {
    return "Event";
  } else {
    return "Odd";
  }
}

console.log(odd_even(2));
console.log(odd_even(5));
