
function findElement(arr, func) {
  var test = [];
  for (var i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
      test.push(arr[i]);
      }
  }
  if (test.length > 0) {
  return test[0];
  }
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });

