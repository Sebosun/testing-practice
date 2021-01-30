const capString = require('./capString');

test('capitalizes first word', () => {
  expect(capString('andrew duda')).toBe('Andrew duda');
});

test('capitalizes first word', () => {
  expect(capString('AAaa')).toBe('AAaa');
});