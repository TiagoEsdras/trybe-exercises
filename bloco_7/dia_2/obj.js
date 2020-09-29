const object = (obj, key, value) => {
  const newKey = key;
  const newValue = value;
  const newObj = obj;
  newObj[newKey] = newValue;
  return newObj;
}
const customer = {};
const chave = 'nome';
const value = 'Tiago';
console.log(object(customer, chave, value));

// ----------------------------------------------------- //

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log('Estudante');
listSkills(student);

// --------------------------------------------------- //

const listSkillsWithKeys = (student) => Object.keys(student);
const listSkillsWithValues = (student) => Object.values(student);
const listSkillsWithEntries = (student) => Object.entries(student);

console.log(listSkillsWithKeys(student));
console.log(listSkillsWithValues(student));
console.log(listSkillsWithEntries(student));

// ------------------------------------------------- //

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};

// ----------------------------------------------- //

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};
const info = {
  age: 23,
  job: 'engenheiro',
};
const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};
// Object.assign recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.
Object.assign(person, info, family)
console.log(person)