const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('Calling myFizzBuzz(15) retunr must be fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Calling myFizzBuzz(9) retunr must be fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('Calling myFizzBuzz(10) retunr must be buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('Calling myFizzBuzz(8) retunr must be 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
});