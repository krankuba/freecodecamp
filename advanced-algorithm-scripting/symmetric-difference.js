
function sym(args) {
  
  var newArr = [];
  var arr0 = arguments[0];
  var arr1 = arguments[1];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];
  var arr5 = [];
  
  if (arguments.length == 3) {
    arr2 = arguments[2];
  }
  if (arguments.length == 4) {
    arr2 = arguments[2];
    arr3 = arguments[3];
  }
  if (arguments.length == 5) {
    arr2 = arguments[2];
    arr3 = arguments[3];
    arr4 = arguments[4];
  }
  if (arguments.length == 6) {
    arr2 = arguments[2];
    arr3 = arguments[3];
    arr4 = arguments[4];
    arr5 = arguments[5];
  }
  
  if (arguments.length == 2) {
    return uniq(symDiff(arr0, arr1));
  } 
  if (arguments.length == 3) {
    return uniq(symDiff(symDiff(arr0, arr1), arr2));
  }
  if (arguments.length == 4) {
    return uniq(symDiff(symDiff(symDiff(arr0, arr1), arr2), arr3));
  }
  if (arguments.length == 5) {
    return uniq(symDiff(symDiff(symDiff(symDiff(arr0, arr1), arr2), arr3), arr4));
  }
  if (arguments.length == 6) {
    return uniq(symDiff(symDiff(symDiff(symDiff(symDiff(arr0, arr1), arr2), arr3), arr4),arr5));
  }
  
  function symDiff(arr1, arr2) {
    newArr = [];
    var idx;
  
      for (i = 0; i < arr1.length; i++) {
        idx = arr2.indexOf(arr1[i]);
          if (idx == -1) {  // if 1st array item is not in 2nd array
            newArr.push(arr1[i]);  //add it to the new array
          }
      }
      for (i = 0; i < arr2.length; i++) {
        idx = arr1.indexOf(arr2[i]);
          if (idx == -1) {  // if 1st array item is not in 2nd array
            newArr.push(arr2[i]);  //add it to the new array
          }
      }
    return newArr;
  }
  
  function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
  }

}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 9]);

