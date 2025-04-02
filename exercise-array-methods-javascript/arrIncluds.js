function arrInclu(arr, addValue) {
  return arr.includes(addValue);
}

console.log(arrInclu([1, 2, 3], 4)); //it will show us false bcoz 4 is not there inside the array
console.log(arrInclu([1, 2, 3, 4], 4)); // true boc 4 is there
