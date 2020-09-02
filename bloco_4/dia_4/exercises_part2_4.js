/*Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/

function verificarMaiorNome (array){

    let maiorNome = '';
    let nome = '';
    
    for (let x in array){
        nome = array[x];

        let count = 0;
        
        for (let j = 0; j < nome.length; j += 1){
            count += 1;            
        }

        if (count > maiorNome.length){
            maiorNome = nome;
        }
    }
    
    return maiorNome;
}

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(verificarMaiorNome(arrayTeste));
