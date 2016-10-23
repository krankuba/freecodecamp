
function destroyer(arr) {
 
  var argumentsArray = [];
  
  for (var i = 1; i < arguments.length; i++) {
    argumentsArray.push(arguments[i]);
  }
  
  function seekAndDestroy(arr) {
    return argumentsArray.indexOf(arr) === -1;
  } 
  
  return arr.filter(seekAndDestroy);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, "tree");

