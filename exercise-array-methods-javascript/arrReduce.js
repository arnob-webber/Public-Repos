// Write a function sumArray that calculates the sum of all numbers in an array using the reduce() method.

function sumArr(arr) {
  return arr.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

console.log(sumArr([1, 2, 3, 4, 5, 6])); // Output: 21
