const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('Calling myFizzBuzz(15) retunr must be fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
});