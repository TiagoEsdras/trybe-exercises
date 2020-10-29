const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (string) => {
    expect(string).toBe('TEST');
    done();
  });
});
