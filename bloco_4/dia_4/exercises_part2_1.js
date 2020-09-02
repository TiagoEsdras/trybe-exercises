/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/

function verificaPalindrome (word){

    let palindromo = false;
    let count = 0;
    for (let i = 0; i < word.length; i += 1){
        if (word.length % 2 == 0){
            if (word[i] == word[word.length - 1 - i]){
                count++;
            }
            if (count == word.length){
                palindromo = true;
            }
        }
        else {
            if (word[i] == word[(word.length - 1) - i]){
                count++;
            }
            if (count == word.length){
                palindromo = true;
            }
        }        
    }
    return palindromo;
}

console.log(verificaPalindrome("socorrosubinoonibusorrocos"));
console.log(verificaPalindrome("desenvolvimento"));
