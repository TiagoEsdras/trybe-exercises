const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /* 1- Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/
  const addTurno = (obj, key, value) => obj[key] = value;
  addTurno(lesson2, 'turno', 'manha');
  console.log(lesson2);

  /* 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/
  const listarKeys = (obj) => Object.keys(obj);
  console.log(listarKeys(lesson1));

  /* 3- Crie uma função para mostrar o tamanho de um objeto.*/
  const tamanhoDoObjeto = (obj) => Object.keys(obj).length;
  console.log(tamanhoDoObjeto(lesson1));

  /* 4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/
  const listarValues = (obj) => Object.values(obj);
  console.log(listarValues(lesson1));
  
  /* 5- Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons)*/
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  /* 6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/
  const getNumberOfStudents = (obj) => {
    let count = 0;
    const lessions = Object.keys(obj);
    for (let key in lessions) {
      count += obj[lessions[key]].numeroEstudantes;
    }
    return count;
  };
  console.log(getNumberOfStudents(allLessons));

  /* 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica'*/
  const valueNumber = (obj, position) => Object.values(obj)[position];
  console.log(valueNumber(lesson1, 0));

  /* 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.*/
  const chaveValor = (obj, key, value) => {
    const array = Object.entries(obj);
    let bool = false
    const newArray = [key, value]
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][0] == newArray[0] && array[i][1] == newArray[1]) {
        bool = true;
      }
    }
    return bool;
  }
  console.log(chaveValor(lesson3, 'turno', 'noite'))