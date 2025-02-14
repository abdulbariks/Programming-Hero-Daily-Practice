// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function taskOne(numbers) {
  lowestNumber = numbers[0];
  for (const number of numbers) {
    if (number < lowestNumber) {
      lowestNumber = number;
    }
  }
  return lowestNumber;
}

const numbers = [167, 190, 120, 165, 137];
console.log(taskOne(numbers));

// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function taskTwo(names) {
  smallestName = names[0];
  for (const element of names) {
    if (element.length < smallestName.length) {
      smallestName = element;
    }
  }
  return smallestName;
}

const names = ["rahim", "robin", "rafi", "ron", "rashed"];
console.log(taskTwo(names));

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(numLaptops, numTablets, numMobiles) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  const totalCost =
    numLaptops * laptopPrice +
    numTablets * tabletPrice +
    numMobiles * mobilePrice;

  return totalCost;
}

console.log(calculateElectronicsBudget(0, 1, 0));
