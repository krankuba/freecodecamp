
function reverseString(str) {
  var strSplit = str.split('');
  var strReverse = strSplit.reverse();
  return strReverse.join('');
}

reverseString("hello");

