const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('myRemoveWithCopy', () => {
  test('Calling myRemoveWithoutCopy([1, 2, 3, 4], 3) retunr must be [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});