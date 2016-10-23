
function confirmEnding(str, target) {
  
    var clearString = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
    var targetString = target.toLowerCase().replace(/[^0-9a-z]/gi, '');
    var clearStringN = clearString.length;
    var targetStringN = targetString.length;
    var i = 0;

    for (i = 0; i < targetString.length; i++) {
      if (clearString[clearString.length -i -1] !== targetString[targetString.length -i -1])       {
      return false;
      }  
    }
    return true;  
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

