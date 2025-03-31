function myGfAge(gfAge) {
  return gfAge.find((x) => x < 18);
}

let age = myGfAge([19, 23, 15]);

if (myGfAge) {
  console.log(`that's my gf bcoz she is ${age} `);
} else {
  console.log("i dont like old lady");
}

// console.log(myGfAge([19, 23]));
