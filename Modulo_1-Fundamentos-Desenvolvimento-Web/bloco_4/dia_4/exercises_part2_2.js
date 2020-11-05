/*Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

function intArray (array){
    let maiorNumero = "";
    for (let i in array){
        if (array[i] > maiorNumero){
            maiorNumero = i;
        }
    }
    return maiorNumero;
}

let arrayTeste = [2, 3, 6, 7, 10, 1];

console.log(intArray(arrayTeste));