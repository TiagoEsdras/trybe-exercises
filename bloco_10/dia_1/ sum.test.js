const sum = require('./sum.js')

test('sum of 4 and 5 must be 9', () => {
  expect(sum(4, 5)).toBe(9);
});