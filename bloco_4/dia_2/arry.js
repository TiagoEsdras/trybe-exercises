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

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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
}*/

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;
for (let i = 0; i < numbers.length; i += 1) {
     if (numbers[i] > higherNumber){
         higherNumber = numbers[i];
     }  
}
console.log(higherNumber);*/

/*Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;
for (let i = 0; i < numbers.length; i += 1) {
     if (numbers[i] % 2 != 0){
         oddNumbers += 1;
     }  
}
if (oddNumbers == 0){
    console.log(`Nenhum valor ímpar encontrado`)
}
else {
    console.log(oddNumbers);
}*/

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = 1000;
for (let i = 0; i < numbers.length; i += 1) {    
     if (numbers[i] < smallerNumber){
         smallerNumber = numbers[i];
     }  
}
console.log(smallerNumber);*/


//Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

/*for (i = 0; i < 25; i+= 1){
    console.log(i+1);
}*/

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (i = 0; i < 25; i+= 1){
    console.log((i+1) / 2);
}