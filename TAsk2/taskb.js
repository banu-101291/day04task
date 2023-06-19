const str = "Convert all the strings to title caps in a string array";
const newStr = str.split(' ')
   .map(x => x[0].toUpperCase() + x.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);