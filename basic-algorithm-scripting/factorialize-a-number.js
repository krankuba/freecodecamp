
function factorialize(num) {
  if (num > 0) {
    var arr = [];
    var fact = 0;

    for (i = 1; i <= num; i++) {
      arr.push(i);
    }

    fact = arr.reduce(function(previous, current) {
      return previous * current;
    });
  return fact;
  } else {
    return 1;
  }
}

factorialize(15);
