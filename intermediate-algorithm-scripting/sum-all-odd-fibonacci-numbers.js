
function sumFibs(num) {
  var prev = 0, cur = 1, fib = 0, answer = 0;
    while (cur <= num) {
      if (cur % 2 !== 0) {
        answer += cur;
      }
      fib = prev + cur;
      prev = cur;
      cur = fib;
    }
  return answer;
}

sumFibs(4);

