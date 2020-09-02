/*Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false*/

function verificaFinalPalavra (word, ending){
    let tamanhoFinal = ending.length;
    let j = 0;
    let count = 0;    

    for (let i = word.length - tamanhoFinal; i < word.length; i += 1){
        if (word[i] == ending[j]){            
            count++;
        }         
        j++;
    }
    if (count == tamanhoFinal){
        return true;
    }      
    return false;
}

console.log(verificaFinalPalavra("trybe","trybe"));
