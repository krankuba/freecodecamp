
function chunkArrayInGroups(arr, size) {
  
  var arr2 = [];
  var arrLength = arr.length;
  
  for (var i = 0; i < arrLength; i += size) {
    arr2.push(arr.splice(0, size));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

