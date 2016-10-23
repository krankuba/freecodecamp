
function truthCheck(collection, pre) {
   for (var i = 0; i < collection.length; i++) {
      if (!collection[i].hasOwnProperty(pre) || !Boolean(collection[i][pre])) {
          return false;
      }
   }
  return true;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");
