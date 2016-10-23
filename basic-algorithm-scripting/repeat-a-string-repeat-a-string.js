
function repeatStringNumTimes(str, num) {
  // repeat after me
  var strRep = "";
  if (num < 1) {
      return "";
  } else {
      for (var i = 0; i < num; i++) {
      strRep = strRep.concat(str);
    }
    return strRep;
  }
}

repeatStringNumTimes("abc", 3);

