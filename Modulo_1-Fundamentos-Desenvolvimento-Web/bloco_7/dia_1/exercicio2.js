const longestWord = (string) => {
  let stringSplit = string.split(' ');
  let word = '';
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > word.length) {
      word = stringSplit[i];
    }
  }
  return word;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
