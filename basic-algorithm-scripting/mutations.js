
function mutation(arr) {
  
  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  var arr2 = secondElement.split('');
  
  for (var i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(arr2[i]) === -1) { 
      return false;
    }
  } 
  return true;
}

mutation(["Mary", "Army"]);

