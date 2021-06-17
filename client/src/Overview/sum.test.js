const testFunctions = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(testFunctions.sum(1, 2)).toBe(3);
});

describe('determine is an expression is true', () => {
  test('should return that "true" is true', () => {
    expect(testFunctions.isTrue(true)).toBe(true);
  });
});