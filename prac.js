function findMissing(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  console.log(total);
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
}
console.log(findMissing([1, 2, 3, 4, 5, 7, 8])); // 3
