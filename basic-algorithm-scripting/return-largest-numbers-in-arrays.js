
function largestOfFour(arr) {
  
  var test = [];
  var test2 = [];
  
  for (var i in arr) {
    for (var j in arr[i]) {
      test.push(arr[i][j]);  
    } 
    test = test.sort(function (a, b) {  return b - a;  });
    test2.push(test[0]);
    test = [];
  }
  return test2;
}

largestOfFour([[13, 25, 18, 23], [27, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

