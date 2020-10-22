//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return newArray.reduce((acc, curr) => acc + curr)
}
const newArray = names.map((name) => name.split('').reduce((acc, curr) => curr === 'A' || curr === 'a' ? acc + 1 : acc, 0))

assert.deepStrictEqual(containsA(), 20);