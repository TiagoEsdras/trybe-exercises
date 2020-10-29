const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('Calling myFizzBuzz(15) retunr must be fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Calling myFizzBuzz(9) retunr must be fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
});