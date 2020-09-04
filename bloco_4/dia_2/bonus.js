//Ordene o array numbers em ordem crescente e imprima seus valores;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let aux = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = aux;
      }
    }
  }
console.log(numbers);*/

//Ordene o array numbers em ordem decrescente e imprima seus valores;

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        let aux = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = aux;
      }
    }
  }
console.log(numbers);*/

/*Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: 
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = [], aux1 = 0;

for (let i = 1; i <= numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (i == numbers.length){
            aux1 = 2 * numbers[j];
        }
        else{
            aux1 = (numbers[i] * numbers[j]);
        }                       
    }
    aux.push(aux1);   
}
console.log(aux);

