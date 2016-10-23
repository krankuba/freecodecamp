
function sumPrimes(num) {
  
  var arr = [2];
 
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i <= num / 2; i++) {
      if ( num % i === 0) {
        return false;
      } 
    }
    return true;
  }
  
  for (var i = 3; i <= num; i += 2) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  
  var result = arr.reduce(function(total, number) { 
    return total + number; }, 0);
  
  return result;
  
}

sumPrimes(10);

