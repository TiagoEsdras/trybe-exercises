const myRemove = require('./myRemove.js');

describe('myRemove', () => {
  test('Call myRemove([1, 2, 3, 4], 3) return must be [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});