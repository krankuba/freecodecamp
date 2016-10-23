
function rot13(str) { // I DID IT!! ^^
  
  var arr = [];
  var n = 0;
  
  for (i = 0; i < str.length; i++) {
    n = str.charCodeAt(i);  // n becomes a number
    if (n >= 65 && n <= 77) {  // ABCDEFGHIJKLM + 13
        n = n + 13;
    }
    else if (n >=78 && n <= 90) {  // NOPQRSTUVWXYZ - 13
        n = n - 13;
    }
        
    n = String.fromCharCode(n);  // n becomes a string again
    arr.push(n);  //  n goes into a new decrypted string
  } 
  return arr.join('');
}

rot13("SERR PBQR PNZC");

