/*Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 9, 6, 3, 2, 8];.
Valor esperado no retorno da função: 2.*/

function valorRepetido (array){
    let count = 0;
    let number = '';

    for (let i = 0; i < array.length; i +=1){
        
        let number1 = array[i];

        let countRepeticoes = 0;
        
        for (j = i + 1; j <= array.length; j +=1){
            let number2 = array[j];
            if (number1 == number2){
                countRepeticoes += 1;                
            }
        }
        if (count < countRepeticoes){
            number = number1;
            count = countRepeticoes;
        }             
    }

    return number;
}
let arrayTeste = [2, 3, 2, 5, 8, 1, 2, 8]//, 8, 8, 9, 6, 3, 2, 8];
console.log(valorRepetido(arrayTeste));