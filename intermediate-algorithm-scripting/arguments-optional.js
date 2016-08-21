function addTogether() {
  
  var isNumber = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  if (arguments.length == 1) {
    var z = arguments[0];
    if (isNumber(z)) {
      return function(arg2) {
        if (z === undefined || isNumber(arg2) === undefined) {
          return undefined;
        } else {
          return z + arg2;
        }
    };
  }
    
  } else if (arguments.length > 1) {
      var x = isNumber(arguments[0]);
      var y = isNumber(arguments[1]);
        if (x === undefined || y === undefined) {
          return undefined;
        } else {
          return x + y;
        }
    }
}

addTogether(2)(3);
