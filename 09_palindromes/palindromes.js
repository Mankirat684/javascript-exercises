const palindromes = function (string) {
  for (i=0;i<string.length;i++){
    if (string(i) === string(string.length-i)){
      console.log("string is a palindrome")}
  }else{
    console.log("string is not a palindrome")
  }
};

// Do not edit below this line
module.exports = palindromes;
