
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];

  function recursiveFlatten(arr) { 
    for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        recursiveFlatten(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  recursiveFlatten(arr);
  return result;
}
  
steamrollArray([1, [2], [3, [[4, [5]]]]]);

