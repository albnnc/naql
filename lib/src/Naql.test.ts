import { Naql } from './Naql';

const naql = new Naql();

const parameters = [
  {
    name: 'user',
    operator: 'eq',
    operands: ['@john']
  },
  {
    name: 'age',
    operator: 'eq',
    operands: [20]
  }
];

const url = 'user=%40john&age=20';

test('parse', () => {
  expect(naql.parse(url)).toEqual(parameters);
});

test('stringify', () => {
  expect(naql.stringify(parameters)).toBe(url);
});

test('throw on invalid parser name', () => {
  let hasThrown = false;
  try {
    expect(naql.parse(url, 'abc')).toEqual(parameters);
  } catch (e) {
    hasThrown = true;
  }
  expect(hasThrown).toBe(true);
});

test('throw on invalid stringifier name', () => {
  let hasThrown = false;
  try {
    expect(naql.stringify(parameters, 'abc')).toEqual(url);
  } catch (e) {
    hasThrown = true;
  }
  expect(hasThrown).toBe(true);
});
