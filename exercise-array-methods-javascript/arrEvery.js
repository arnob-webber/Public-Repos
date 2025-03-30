// we can findout prositive number with array

function positiveArr(arr) {
  return arr.every(function (posiArr) {
    return posiArr > 0;
  });
}

console.log(positiveArr([1, -2]));
console.log(positiveArr([1, 2]));
