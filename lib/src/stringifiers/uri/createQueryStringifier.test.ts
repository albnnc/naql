import { CoreRegistry, Parameter } from '../../models';
import { createQueryStringifier } from './createQueryStringifier';
import { stringifyParameter } from './stringifyParameter';
import { stringifySort } from './stringifySort';

const stringifyQuery = createQueryStringifier([
  stringifySort,
  stringifyParameter
]);
const fn = (parameters: Parameter[]) =>
  stringifyQuery(parameters, new CoreRegistry());

test('single parameter', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'eq',
        operands: ['b']
      }
    ])
  ).toBe('a=b');
});

test('multiple parameters', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'b',
        operands: ['c']
      },
      {
        name: 'd',
        operator: 'e',
        operands: ['f']
      }
    ])
  ).toBe('a=b:c&d=e:f');
});

test('respect parameter stringifier priority', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'sort',
        operands: ['asc']
      }
    ])
  ).toBe('a=+sort');
});
