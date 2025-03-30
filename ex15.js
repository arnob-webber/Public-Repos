//  Write a program to check if a number is prime.

let primeNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function myNmbrPrime(x) {
  if (x < 2) return false;
  let y = 2;
  for (; y <= Math.sqrt(n); y++) {
    if (n % y === 0) return false;
  }
  return true;
}

let newPrime = [];

primeNumber.forEach((num) => {
  if (myNmbrPrime(num)) {
    newPrime.push(num);
  }
});

console.log(newPrime);
