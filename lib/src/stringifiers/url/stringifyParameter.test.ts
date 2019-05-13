import { CoreRegistry, Parameter } from '../../models';
import { stringifyParameter } from './stringifyParameter';

const fn = (parameter: Parameter) =>
  stringifyParameter(parameter, new CoreRegistry());

test('equality operator', () => {
  expect(
    fn({
      name: 'a',
      operator: 'eq',
      operands: ['b']
    })
  ).toBe('a=b');
});

test('custom operator', () => {
  expect(
    fn({
      name: 'a',
      operator: 'b',
      operands: ['c']
    })
  ).toBe('a=b:c');
});

test('multiple operands', () => {
  expect(
    fn({
      name: 'a',
      operator: 'b',
      operands: ['c', 'd']
    })
  ).toBe('a=b:c,d');
});
