/*Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/

let n = 5;
let outPut = '';

let midlleM = (n + 1) / 2;
let l = midlleM;
let r = midlleM;

for (let i = 0; i <= midlleM; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j > r && j < l) {
      outPut += "*";
    } else {
      outPut += ' ';
    }
  }
  console.log(outPut);
  outPut = '';
  r -= 1;
  l += 1;
}
