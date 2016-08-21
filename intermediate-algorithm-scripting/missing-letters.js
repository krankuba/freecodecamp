
function fearNotLetter(str) {
  
   var strSplit = str.split(''); 
   var x = strSplit[0].charCodeAt(0);
  
   for (var i = 0; i < str.length; i++) {
     if (strSplit[i].charCodeAt(0) !== (x + i)) {
       return String.fromCharCode(x + i);
     }
   }
  
 }

fearNotLetter("abcdefh");

