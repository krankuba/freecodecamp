function binaryAgent(str) {
  
  var num = 0;
  var arr = [];
  var str3 = [];
  var str2 = str.split(' ');
  
  for (j = 0; j < str2.length; j++) {
    
    str3 = str2[j].split('');
    num = 0;
    
      for (i = 0; i < 8; i++) {
          if (str3[i] == 1 && i === 0) {num += 128;}
          if (str3[i] == 1 && i === 1) {num += 64;}
          if (str3[i] == 1 && i === 2) {num += 32;}
          if (str3[i] == 1 && i === 3) {num += 16;}
          if (str3[i] == 1 && i === 4) {num += 8;}
          if (str3[i] == 1 && i === 5) {num += 4;}
          if (str3[i] == 1 && i === 6) {num += 2;}
          if (str3[i] == 1 && i === 7) {num += 1;}
      }
    arr.push(String.fromCharCode(num));
  }
  return arr.join('');
}

