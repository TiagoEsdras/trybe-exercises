/*Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/

let n = 5;
let outPut = '';

let middleM = (n + 1) / 2;
let l = middleM;
let r = middleM;

for (let i = 0; i <= middleM; i += 1) {
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
