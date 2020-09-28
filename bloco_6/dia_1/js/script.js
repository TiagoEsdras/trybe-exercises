let arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

let estado = document.querySelector('#estado');

for (let i = 0; i < arrayEstados.length; i += 1) {
    let option = document.createElement('option');
    option.value = arrayEstados[i];
    option.text = arrayEstados[i];
    estado.appendChild(option)
}

let picker = new Pikaday({ field: document.getElementById('datepicker') });

let inputValue = '';
let criarTd = '';
let parentField = '';

function nameField() {
    inputValue = document.querySelector('#nome').value;
    parentField = document.querySelector('#nome-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function emailField() {
    inputValue = document.querySelector('#email').value;
    parentField = document.querySelector('#email-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function cpfField() {
    inputValue = document.querySelector('#cpf').value;
    parentField = document.querySelector('#cpf-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function enderecoField() {
    inputValue = document.querySelector('#endereco').value;
    parentField = document.querySelector('#endereco-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function cidadeField() {
    inputValue = document.querySelector('#cidade').value;
    parentField = document.querySelector('#cidade-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function estadoField() {
    inputValue = document.querySelector('#estado').value;
    parentField = document.querySelector('#estado-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function tipoField() {
    inputValue = document.querySelector('#casa').value;
    inputValue = document.querySelector('#apartamento').value;
    parentField = document.querySelector('#tipo-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function resumoField() {
    inputValue = document.querySelector('#resumo').value;
    parentField = document.querySelector('#resumo-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function cargoField() {
    inputValue = document.querySelector('#cargo').value;
    parentField = document.querySelector('#cargo-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function descricaoField() {
    inputValue = document.querySelector('#descricao').value;
    parentField = document.querySelector('#descricao-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}
function dataField() {
    inputValue = document.querySelector('#datepicker').value;
    parentField = document.querySelector('#data-input');
    criarTd = document.createElement('td');
    criarTd.innerText = inputValue;
    parentField.appendChild(criarTd);
}

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    nameField();
    emailField();
    cpfField();
    enderecoField();
    cidadeField();
    estadoField();
    tipoField();
    resumoField();
    cargoField();
    descricaoField();
    dataField();
    console.log('estou aqui')
});

 
