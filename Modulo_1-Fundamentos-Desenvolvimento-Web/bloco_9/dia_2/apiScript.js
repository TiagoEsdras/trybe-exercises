const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, { headers: { Accept: 'application/json'}})
  .then(object => object.json())
  .then(data => document.querySelector('#jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();