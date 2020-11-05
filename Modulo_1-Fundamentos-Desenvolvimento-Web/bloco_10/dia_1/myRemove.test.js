const myRemove = require('./myRemove.js');

describe('myRemove', () => {
  test('Call myRemove([1, 2, 3, 4], 3) return must be [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Call myRemove([1, 2, 3, 4], 3) return is diferent than [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Call myRemove([1, 2, 3, 4], 5) return must be [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  test('Call myRemove(arr, 1) arr can not change', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});