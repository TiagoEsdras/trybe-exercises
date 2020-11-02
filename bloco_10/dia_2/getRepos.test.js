const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then((data) => {
    return data.map((repo) => repo.name)
  });
};

test('Calling getRepos(url) return not contains "sd-01-week4-5-project-todo-list"', () => {
  const url = 'https://api.github.com/users/tryber/repos'
  expect.assertions(1);
  return expect(getRepos(url)).resolves.not.toContain('sd-01-week4-5-project-todo-list');
});

test('Calling getRepos(url) return contains "challenge-bug-hunting-youtrybe-squad-1"', () => {
  const url = 'https://api.github.com/users/tryber/repos'
  expect.assertions(1);
  return expect(getRepos(url)).resolves.toContain('challenge-bug-hunting-youtrybe-squad-1');
});
