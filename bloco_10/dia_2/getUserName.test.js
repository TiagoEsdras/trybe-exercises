const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
    
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }
    return reject({ error: 'User with ' + id + ' not found.' });
  });
}
    
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

it('getUserName(4) return should be "Mark"', () => {
  expect.assertions(1);
  return expect(getUserName(4)).resolves.toBe('Mark');
  /*return getUserName(4).then(name => {
    expect(name).toBe('Mark');
  });*/
});

it('returns an error', () => {
  expect.assertions(1);
  return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
  /*return getUserName(2).catch(error =>
    expect(error).toEqual({ error: 'User with 2 not found.' })
  );*/
});

it('getUserName(4) return should be "Mark" using async/await', async () => {
  expect.assertions(1);
  const response = await getUserName(4);
  expect(response).toBe('Mark');
  //return expect(getUserName(4)).resolves.toBe('Mark');
});

it('returns an error using async/await', async () => {
  expect.assertions(1);
  try {
    await getUserName(2);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 2 not found.' });
  }
  //return expect(getUserName(2)).rejects.toEqual({ error: 'User with 2 not found.' });
});
