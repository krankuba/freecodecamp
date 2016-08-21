
function findLongestWord(str) {
  var arrStrings = str.split(' ');
  var arrNumbers = [];
  
  for (var i in arrStrings) {
    arrNumbers.push(arrStrings[i].length);
  }
  
  arrNumbers = arrNumbers.sort(function (a, b) {  return b - a;  });
  return arrNumbers[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog but got eaten by a crocodile");

