/*Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/

let n = 5;
let outPut = "";

for (let i = 0; i < n; i += 1) {
    for(let j = 0; j < n; j += 1){
        outPut += "*";        
    }
    console.log(outPut)
    outPut = "";
    console.log("\n");   
}
