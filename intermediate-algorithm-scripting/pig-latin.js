
function translatePigLatin(str) {
  
  var strSplit = str.split('');
  
  if (strSplit[0] == "a" || strSplit[0] == "e" || strSplit[0] == "o"|| 
      strSplit[0] == "i" || strSplit[0] == "u" || strSplit[0] == "y") {
    return strSplit.join('').concat("way");
  } else {
    for (i = 0; i < str.length; i++) {
      if (strSplit[i] == "a" || strSplit[i] == "e" || strSplit[i] == "o"|| 
        strSplit[0] == "i" || strSplit[0] == "u" || strSplit[0] == "y") {
        var removed = strSplit.splice(0, i);
      
        return strSplit.join('').concat(removed.join('')).concat('ay');
      } 
    }
  }
  return false;
}

translatePigLatin("iyglrtpove");
