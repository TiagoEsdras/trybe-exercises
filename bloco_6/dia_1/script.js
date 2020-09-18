let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

let estado = document.querySelector('#estado');

for (let i = 0; i < arrayEstados.length; i += 1) {
    let option = document.createElement('option');
    option.value = arrayEstados[i];
    option.text = arrayEstados[i];
    estado.appendChild(option)
}

