
function permAlone(str) {
  var arr = str.split('');
  var result = 0;
  var length = str.length;
  
  function swap(a, b) {
    var c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
  }
  
  function generator(n) {
    var regex = /([a-z])\1+/;
    if (n === 1 && !regex.test(arr.join(''))) {
        result++;
    } else {
        for (var i = 0; i !== n ; i++) {
          generator(n - 1);
          swap(n % 2 ? 0 : i, n - 1);
        }      
    }
    return result;
  }
  return generator(length);
}

permAlone('abc');

