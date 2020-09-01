/*Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/

function verificaPalindrome (word){

    for (let i = 0; i < word.length; i += 1){
        if (word[i] == word[word.length -1]){
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
