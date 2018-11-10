const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum 1 + 2 to not equal 3', () => {
  expect(sum('1', 2)).toBe('12');
  expect(sum('1', 2)).not.toBe(3);
});
