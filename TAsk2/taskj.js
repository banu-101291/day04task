const palindromes = (words) => {
    return words.filter((word) => {
     word.split("").reverse().join("") === word;
     });
   };

   console.log(palindromes(["hello", "noon"]));