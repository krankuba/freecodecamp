function smallestCommons(arr) {
  var x = 0,
      y = 0,
      array = [], 
      newArray = createArray(arr);
  
  return newArray.reduce(function(a, b) {
        return lcm(a, b);
    });
 
    function lcm(a, b) {
        return (Math.abs(a * b) / gcd(a, b));
    }
 
    function gcd(a, b) {
        var temp;
        while (b !== 0) {
            temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
      
  function createArray(arr) {
       if (arr[0] < arr[1]) { 
           x = arr[0]; y = arr[1]; 
       } else { x = arr[1]; y = arr[0]; 
              }
    
      for (var i = x ; i <= y; i++) { 
        array.push(i); 
      }
    return array;
  }
  
}

smallestCommons([1,13]);

