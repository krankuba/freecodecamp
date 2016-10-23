
function diffArray(arr1, arr2) {
  var newArr = [];
  var idx;
  
      for (i = 0; i < arr1.length; i++) {
        idx = arr2.indexOf(arr1[i]);
          if (idx == -1) {  // if 1st array item is not in 2nd array
            newArr.push(arr1[i]);  //add it to the new array
          }
      }
  
        for (i = 0; i < arr2.length; i++) {
        idx = arr1.indexOf(arr2[i]);
          if (idx == -1) {  // if 2nd array item is not in 1st array
            newArr.push(arr2[i]);  //add it to the new array
          }
      }
  return newArr;
}

diffArray([1, "calf", 3, "piglet", 6, 234], [234, 7, "filly", 6]);

