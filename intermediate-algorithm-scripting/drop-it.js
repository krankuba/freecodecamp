
function dropElements(arr, func) {
  var x = arr.length;
    for (var i = 0; i < x; i++) {
      if (!func(arr[0])) {  
        arr.shift();
      }
    }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 7; });

