/*Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!*/
const arrayNumberRandom = () => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(Math.floor(Math.random() * (50 - 1) + 1));
  }
  return array;
}

const divideResult = (sum) => {
  const dividerArray = [2, 3, 5, 10]
  const newArray = [];
  dividerArray.forEach(number => newArray.push(sum / number));
  return newArray;  
}
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    let sum = 0;
    arrayNumberRandom().forEach((number) => {
      sum += Math.pow(number, 2);
    });
    (sum < 8000) ? resolve(sum) : reject(`É mais de oito mil! Essa promise deve estar quebrada!`);
  });
  promise
  .then((divide) => divideResult(divide))
  .then((array) => console.log(Math.round(array.reduce((acc, curr) => acc + curr))))
  .catch((error) => console.log(error));
}
fetchPromise();
