// we u make any number dubble with array method map

function arrMap(arr) {
  return arr.map(function (arrNum) {
    /**we can use arrow function
     *
     * arrNum => arrNum*2 */ return arrNum * 2;
  });
}

console.log(arrMap([2, 3, 100]));
