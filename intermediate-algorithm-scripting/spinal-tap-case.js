
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
    
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');  // Insert write space between bond low-upper case
  str = str.replace(/\s+|_+/g, '-');  // Replace white spaces and underscores by a dash
  str = str.toLowerCase();  // Convert the string into lowercase
  
  return str;
}

spinalCase('This_IsSpinalTap');

