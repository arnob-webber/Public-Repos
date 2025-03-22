// palindrome

function isItPalindrome(word) {
  const ourPalindrome = word.split("").reverse().join("");
  console.log(ourPalindrome);
}

isItPalindrome("mama");
