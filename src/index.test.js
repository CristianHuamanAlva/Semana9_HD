const { add } = require('./index');

test('add 2 - 1 to equal 1', () => {
  expect(add(2, 1)).toBe(1);
});

test('adds 7 - 5 to equal 2', () => {
  expect(add(7, 5)).toBe(2);
});


test('adds 9 - 1 to equal 8', () => {
  expect(add(9, 1)).toBe(8);
});


