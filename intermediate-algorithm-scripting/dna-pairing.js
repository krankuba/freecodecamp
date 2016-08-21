
function pairElement(str) {

  var arr = [];
  var convert = function(elem) {
      switch (elem) {
        case "G":
          arr.push(["G", "C"]);
          break;
        case "C":
          arr.push(["C", "G"]);
          break;
        case "A":
          arr.push(["A", "T"]);
          break;
        case "T":
          arr.push(["T", "A"]);
          break;
      }
    };
  
  for (var i = 0; i < str.length; i++) {
    convert(str[i]);
  }
  
  return arr;
}

pairElement("ATCGA");

