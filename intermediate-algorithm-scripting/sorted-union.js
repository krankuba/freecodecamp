
function uniteUnique(arr) {
  
  var arr2 = Array.from(arguments);
  var newArray = [];
  var shitArray = [];
  var arr3 = [];
  
  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2[i].length; j++ ) {
      arr3.push(arr2[i].length);
      if (newArray.indexOf(arr2[i][j]) == -1) { 
        newArray.push(arr2[i][j]);
      } else {
        shitArray.push(arr2[i][j]);
      }
    }
  }
  
  return newArray;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);

