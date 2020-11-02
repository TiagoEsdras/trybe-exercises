const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];


const findAnimalByName = (name) => {
  return (new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find(animal => animal.name === name);
      if (animal) return resolve(animal);
      return reject('Nenhum animal com esse nome!');
    }, 100);
  }));
}

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(animal => animal);
}

const findAnimalByAge = (age) => {
  return (new Promise((resolve, reject) => {
      setTimeout(() => {
          const animals = [];
          Animals.forEach(animal => {
              if (animal.age === age) animals.push(animal);
          });
          if (animals.length !== 0) return resolve(animals);
          return reject('Nenhum animal com esse nome!');
      },100);
  }));
}

const getAnimalAge = (age) => {
  return findAnimalByAge(age).then(animals => animals);
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!'));
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  test('Quando existir animais com a idade procurada', () => {
    expect.assertions(1);
    return getAnimalAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
    });
  });
  test('Quando não existir animais com a idade procurada', () => {
    expect.assertions(1);
    return getAnimalAge(7).catch(erro => {
        expect(erro).toBe('Nenhum animal com esse nome!')
    });
  });
});