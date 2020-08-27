/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

let peca = "Bispo"

switch (peca.toLowerCase()){
    case "rei" :
        console.log("Rei-> Uma casa apenas para qualquer direção.");
        break;
    case "rainha" :
        console.log("Rainha-> Quantas casas quiser para qualquer direção;") 
        break;
    case "bispo" :
        console.log("Bispo-> Quantas casas quiser, porém somente nas diagonais");
        break;
    case "cavalo" :
        console.log("Cavalo -> 'L' pode pular sobre as peças.");
        break;
    case "torre" :
        console.log("Torre -> Quantas casas quiser, porém somente na horizontal e vertical");
        break;
    case "peao" :
        console.log("Peão -> Se primeiro movimento, uma ou duas casas a frente, após somente uma casa a frente");
        break;
    default :
        console.log("Peça inválida!")
        break;
}