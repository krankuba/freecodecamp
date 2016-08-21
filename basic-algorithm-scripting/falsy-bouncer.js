
function bouncer(arr) {
  
  var arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'undefined' && arr[i]) {  
      arr2.push(arr[i]); 
    }
  }
  return arr2;
}

bouncer([1, null, NaN, 2, undefined]);

