
function myReplace(str, before, after) {
  
  if (before.charAt(0) == before.charAt(0).toUpperCase())
  {
    var arr = after.split('');
      arr[0] = arr[0].toUpperCase();
      after = arr.join('');
  }
   return str.replace((before), after);
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

