import { CoreRegistry, Parameter } from '../../models';
import { stringifySort } from './stringifySort';

const fn = (parameter: Parameter) =>
  stringifySort(parameter, new CoreRegistry());

test('asc sort', () => {
  expect(
    fn({
      name: 'a',
      operator: 'sort',
      operands: ['asc']
    })
  ).toBe('a=+sort');
});

test('desc sort', () => {
  expect(
    fn({
      name: 'a',
      operator: 'sort',
      operands: ['desc']
    })
  ).toBe('a=-sort');
});

test('ignore invalid', () => {
  expect(
    fn({
      name: 'a',
      operator: 'eq',
      operands: ['b']
    })
  ).toBe(undefined);
});
