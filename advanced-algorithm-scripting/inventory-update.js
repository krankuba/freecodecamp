
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var arr = [],
      demo = [],
      demo2 = [],
      len1 = arr1.length,
      len2 = arr2.length;
  
  if (len1 === 0) {return sort(arr2);}
  if (len2 === 0) {return sort(arr1);}
  
  for (var x = 0; x < len1; x++) {
    for (var y = 0; y < len2; y++) {
      if (arr1[x][1] == arr2[y][1]) {
        arr1[x][0] += arr2[y][0];
        arr2[y][0] += arr1[x][0];
        demo.push(arr1[x]);
      } 
    }
  }  
 
  arr = sort(arr1.concat(arr2));
  var arrLength = arr.length;
  
  for (var i = 0; i < arrLength; i++) {
    if (arr[i][1] != demo[0][1] && arr[i][1] != demo[1][1]){
      demo2.push(arr[i]);
    }
  }
  
  return sort(demo.concat(demo2));
  
  function sort(a) {
    return a.sort(function(a,b) {
      return b[1] < a[1];
    });
  }
  
}
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], 
	        [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);

