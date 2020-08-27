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