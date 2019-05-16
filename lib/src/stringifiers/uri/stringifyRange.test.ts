import { CoreRegistry, Parameter } from '../../models';
import { stringifyRange } from './stringifyRange';

const fn = (parameter: Parameter) =>
  stringifyRange(parameter, new CoreRegistry());

test('between', () => {
  expect(
    fn({
      name: 'a',
      operator: 'bt',
      operands: ['b', 'c']
    })
  ).toBe('a=b~c');
});

test('less or equals', () => {
  expect(
    fn({
      name: 'a',
      operator: 'le',
      operands: ['b']
    })
  ).toBe('a=~b');
});

test('greater or equals', () => {
  expect(
    fn({
      name: 'a',
      operator: 'ge',
      operands: ['b']
    })
  ).toBe('a=b~');
});

test('ignore invalid', () => {
  expect(
    fn({
      name: 'a',
      operator: 'ge',
      operands: ['b', 'c']
    })
  ).toBe(undefined);
});
