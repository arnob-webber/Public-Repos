// we can filter things with this , like as u want to findout something from a large data then it can help us

function filterArr(arr) {
  return arr.filter((data) => data % 2 === 0);
}

console.log("show me even numbers", filterArr([1, 2, 3, 5, 8, 6, 13, 12]));
