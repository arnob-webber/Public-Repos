// calculate the factorial of a number.

function xYfactorial(z) {
  let n = 1;
  let factrialResult = 1;
  for (; n <= z; n++) {
    factrialResult *= n;
  }
  return factrialResult;
}

console.log(xYfactorial(5));
