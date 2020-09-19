let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

let estado = document.querySelector('#estado');

for (let i = 0; i < arrayEstados.length; i += 1) {
    let option = document.createElement('option');
    option.value = arrayEstados[i];
    option.text = arrayEstados[i];
    estado.appendChild(option)
}

let submitBtn = document.querySelector('#button');
    submitBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    let dataValue = document.querySelector('#data').value;
    let dataString = dataValue.split('/');
    if (parseInt(dataString[0]) < 1 || parseInt(dataString[0]) > 31) {
        alert('O valor do dia deve ser entre 01 e 31');
    } else if (parseInt(dataString[1]) < 1 || parseInt(dataString[1]) > 12) {
        alert('O valor de mês deve ser entre 01 e 12');
    } else if (parseInt(dataString[2]) < 0) {
        alert('O valor do ano nao pode ser negativo')
    }
})

