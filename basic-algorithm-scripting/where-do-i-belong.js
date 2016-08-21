
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var iBelongHere = 0;
  
  function compareNumbers(a, b) {
  return a - b;
  }
  
  if ($.inArray(num, arr) === -1) {
    arr.push(num);
  }
  
  arr.sort(compareNumbers);
  
  for ( i = 0; i < arr.length; i++) {
    if ( arr[i] === num ) {  
      iBelongHere = i; 
    }
  }
  return iBelongHere;
}

getIndexToIns([10, 20, 40, 50], 30);

