
function truncateString(str, num) {

  if (num >= str.length) {
     return str;
  }
  else if (num >3 && num < str.length) {
     str2 = str.slice(0, num-3);
     return str2 + "...";
  } 
  else if (num <= 3) {
     str2 = str.slice(0, num);
     return str2 + "...";
  }
}

truncateString("Absolutely Longer", 2);
