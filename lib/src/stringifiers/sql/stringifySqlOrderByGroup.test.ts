import { Parameter, Registry } from '../../models';
import { stringifySqlOrderByGroup } from './stringifySqlOrderByGroup';

const fn = (parameters: Parameter[]) =>
  stringifySqlOrderByGroup(parameters, new Registry());

test('single sort parameter', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'sort',
        operands: ['asc']
      }
    ])
  ).toBe('ORDER BY a ASC');
});

test('multiple sort parameters', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'sort',
        operands: ['asc']
      },
      {
        name: 'b',
        operator: 'sort',
        operands: ['desc']
      }
    ])
  ).toBe('ORDER BY a ASC, b DESC');
});

test('ignore invalid', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'b',
        operands: ['c']
      },
      {
        name: 'd',
        operator: 'sort',
        operands: ['abracadabra']
      }
    ])
  ).toBe(undefined);
});
