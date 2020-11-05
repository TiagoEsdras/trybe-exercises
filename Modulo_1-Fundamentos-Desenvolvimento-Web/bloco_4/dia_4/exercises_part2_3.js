/*Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.*/

function intArray (array){
    let menorNumero = "";
    for (let i in array){
        if (array[i] < menorNumero){
            menorNumero = i;
        }
    }
    return menorNumero;
}

let arrayTeste = [2, 4, 6, 7, 10, 0, -3];

console.log(intArray(arrayTeste));