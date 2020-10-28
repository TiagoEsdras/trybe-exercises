const sum = require('./sum.js')

test('sum of 4 and 5 must be 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sum of 0 and 0 must be 0', () => {
  expect(sum(0, 0)).toBe(0);
});