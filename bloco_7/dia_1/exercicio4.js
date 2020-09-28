const lookX = (string, stringParametro) => {
    const stringForChange = string.split('');
    for (let i = 0; i < stringForChange.length; i += 1) {
        if (stringForChange[i] === 'x') {
            stringForChange[i] = stringParametro;
        }
    }
    return stringForChange.join('');
}

const frase = "Mr Blue has a blue house and a blue car";
const replace = frase.replace('blue', 'red')
console.log(replace);

console.log(lookX('Tryber x aqui!', 'Bebeto'));