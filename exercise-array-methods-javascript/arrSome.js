// Write a function  that checks if an array contains at least one even number. Use the some() method.

function hasEven(arr) {
  return arr.some((num) => num % 2 === 0);
}

console.log(
  hasEven([1, 9, 5])
); /**this will show u fals bcoz there is no even number not even a single number */
console.log(hasEven([2, 9, 3]));

// let myLove = "do u love me";

// console.log(myLove, hasEven([1, 9]));
