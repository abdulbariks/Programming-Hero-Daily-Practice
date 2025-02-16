// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];

function findAveragePhonePrice(phones) {
  if (phones.length === 0) return 0; // Handle empty array case

  // Calculate the sum of all phone prices using a loop
  let totalPrice = 0;
  for (let i = 0; i < phones.length; i++) {
    totalPrice += phones[i].price;
  }

  // Calculate the average price
  const averagePrice = totalPrice / phones.length;

  return averagePrice;
}

// Example usage
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice = findAveragePhonePrice(phones);
console.log("Average phone price:", averagePrice);

// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

//  const employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
function calculateTotalMonthlySalary(employees) {
  let totalMonthlySalary = 0;

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];

    // Calculate the current salary
    const currentSalary =
      employee.starting + employee.experience * employee.increment;
    console.log(currentSalary);

    // Add to the total monthly salary
    totalMonthlySalary += currentSalary;
  }

  return totalMonthlySalary;
}

// Example usage
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const totalMonthlySalary = calculateTotalMonthlySalary(employees);
console.log(
  "Total monthly salary to be provided by the company:",
  totalMonthlySalary
);
