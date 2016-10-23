
function sumAll(arr) {
  var min = Math.min(arr[0], arr[arr.length-1]);
  var max = Math.max(arr[0], arr[arr.length-1]);
  
  for (i = min + 1; i < max; i++) {
  arr.push(i);
  }
   
  function getSum(total, num) {
    return total + num;
  }
  
  return arr.reduce(getSum);
}

sumAll([5, 10]);

