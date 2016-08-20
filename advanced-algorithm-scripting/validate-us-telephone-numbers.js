
function telephoneCheck(str) {
  // Good luck!
  var phoneDigits;
  var arr = [];
  
  stripNonNumeric(str);
  stringToArray(str);
  
  // returns false if the area code is 1, but digits are not 11
  if (arr[0] == 1 && phoneDigits.length != 11) {
    return false;
  }
  // returns false if there is no area code and the total number of digits is not 10
  if (arr[0] != 1 && phoneDigits.length != 10) {
    return false;
  } 
  // returns false if the area code is 1, but the second bracket is missing
  if (arr[0] == 1 && arr[1] == "(" && arr[5] != ")") {
    return false;
  }
  // returns false if the area code is 1, but the first bracket is missing
  if (arr[0] == 1 && arr[1] != "(" && arr[5] == ")") {
    return false;
  }
  // calls a function to check if the brackets are properly opened/closed
  if (checkBrackets(str) === false) {
    return false;
  }
  // calls a function to check if there are nasty characters in the string
  if (allowedChars(str) === false) {
    return false;
  }
  
  return true;
  
  function stringToArray(string) {
    //creates array with all symbols in the number
    for (var i = 0; i < string.length; i++) {
      arr.push(string[i]);
    }
  }
  
  function stripNonNumeric(string) {
    //strips all non-numbers from the provided string
    phoneDigits = string.replace(/\D/g,'');
    return phoneDigits;
  }
  
  function checkBrackets(string) {
    //if there are brackets in the string, checks if they are properly closed
    for (var i = 0; i < string.length; i++) {
      if (arr[i] == "(" && arr[i+4] != ")") {
        return false;
      }
      if (arr[i] == ")" && arr[i-4] != "(") {
        return false; 
      }
    }
  }
  
  function allowedChars(string) {
    //counts +1 for each allowed character,counter should equal string length 
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {//  0-9
        counter++;
      }
      if (string.charCodeAt(i) >= 40 && string.charCodeAt(i) <= 41) {// brackets
        counter++;
      }
      if (string.charCodeAt(i) == 45) {// dash
        counter++;
      } 
      if (string.charCodeAt(i) == 32) {// whitespace
        counter++;
      } 
    }
    if (counter != string.length) {
      return false;
    } else {
      return true;
    }
  }
  
}

telephoneCheck("(555)-5a5-5545");

