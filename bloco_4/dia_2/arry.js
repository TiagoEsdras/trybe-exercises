/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);    
}
*/

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];     
}
console.log(sum);*/

/*Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    count += 1;     
}
console.log(sum / count);*/

/*Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
    count += 1;     
}
if ((sum / count) <= 20){
    console.log(`valor menor ou igual a 20`);
}
else{
    console.log(`valor maior que 20`);
}