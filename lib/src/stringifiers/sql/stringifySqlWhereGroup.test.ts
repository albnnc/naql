import { Parameter, Registry } from '../../models';
import { stringifySqlWhereGroup } from './stringifySqlWhereGroup';

const fn = (parameters: Parameter[]) =>
  stringifySqlWhereGroup(parameters, new Registry());

test('single comparsion', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'eq',
        operands: ['b']
      }
    ])
  ).toBe("WHERE a='b'");
});

test('multiple comparsions', () => {
  expect(
    fn([
      {
        name: 'a',
        operator: 'eq',
        operands: ['a']
      },
      {
        name: 'b',
        operator: 'ne',
        operands: ['b']
      },
      {
        name: 'c',
        operator: 'lt',
        operands: ['c']
      },
      {
        name: 'd',
        operator: 'le',
        operands: ['d']
      },
      {
        name: 'e',
        operator: 'gt',
        operands: ['e']
      },
      {
        name: 'f',
        operator: 'ge',
        operands: ['f']
      },
      {
        name: 'g',
        operator: 'bt',
        operands: [1, 2]
      }
    ])
  ).toBe(
    "WHERE a='a' AND b<>'b' " +
      "AND c<'c' AND d<='d' " +
      "AND e>'e' AND f>='f' " +
      'AND g BETWEEN 1 AND 2'
  );
});

test('ignore invalid', () => {
  expect(
    fn([
      {
        name: 'c',
        operator: 'custom',
        operands: ['d']
      },
      {
        name: 'e',
        operator: 'eq',
        operands: ['f', 'g']
      }
    ])
  ).toBe(undefined);
});
