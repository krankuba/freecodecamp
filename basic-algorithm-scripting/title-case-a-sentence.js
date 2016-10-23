
function titleCase(str) {
  var myString = '1 (555) 555-5555';
  myString = myString.replace(/\D/g,'');
  
  return myString;
}
titleCase("I'm a little tea pot lot, but the cot");

