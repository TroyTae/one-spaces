const OneSpaces = require('../dist/index');
const expectedValue = 'cls1 cls2 cls3';

test('arguments', () => {
  expect(OneSpaces('cls1', 'cls2', 'cls3')).toBe(expectedValue);
});

test('array', () => {
  expect(OneSpaces(['cls1', 'cls2'], ['cls3'])).toBe(expectedValue);
});

test('exclude falsy', () => {
  expect(OneSpaces('cls1', null, 'cls2', false && 'none', true && 'cls3')).toBe(expectedValue);
});

test('mix', () => {
  expect(OneSpaces(['cls1', 'cls2'], null, 'cls3')).toBe(expectedValue);
});

