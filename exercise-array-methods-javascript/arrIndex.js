function whatIndx(arr) {
  return arr.findIndex((num) => num < 0);
}

console.log(whatIndx([-1, -2, 2]));

function chkAge(userAge) {
  return userAge.findIndex((x) => x > 18);
}

if (chkAge) {
  console.log("he is adult");
} else {
  console.log("he is not");
}

console.log(chkAge([20]));
console.log(chkAge([15]));
