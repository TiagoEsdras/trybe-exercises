/*Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: 

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/

let n = 9;
let outPut = '';

let midlleM = (n + 1) / 2;
let l = midlleM;
let r = midlleM;

for (let i = 0; i < midlleM; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    
    if (j == r || j == l && j) {
        outPut += "*";

    } else if (i == midlleM - 1) {
        outPut += "*";
    }
    else {
        outPut += " ";
    }
  }
  console.log(outPut);
  outPut = "";
  r -= 1;
  l += 1;
}