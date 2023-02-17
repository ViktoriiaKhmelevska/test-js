function findLongestWord(string) {

let arrayWord = string.splice(' ');
  let longestWord = '';
  let word = 0;

  for (let i = 0, i < arrayWord.length, i += 1) {
      word = arrayWord.length;
      if (arrayWord[i].length > word)
      {
        longestWord = arrayWord[i];
      }
    }
return longestWord;

}