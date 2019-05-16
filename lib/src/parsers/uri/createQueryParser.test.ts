import { CoreRegistry } from '../../models';
import { createQueryParser } from './createQueryParser';
import { parseFlag } from './parseFlag';
import { parseParameter } from './parseParameter';
import { parseRange } from './parseRange';
import { parseSort } from './parseSort';

const parseQuery = createQueryParser([
  parseFlag,
  parseSort,
  parseRange,
  parseParameter
]);
const fn = (source: string) => parseQuery(source, new CoreRegistry());

test('single parameter', () => {
  expect(fn('a=b')).toEqual([
    {
      name: 'a',
      operator: 'eq',
      operands: ['b']
    }
  ]);
});

test('multiple parameters', () => {
  expect(fn('a=b&c=d')).toEqual([
    {
      name: 'a',
      operator: 'eq',
      operands: ['b']
    },
    {
      name: 'c',
      operator: 'eq',
      operands: ['d']
    }
  ]);
});

test('ignore questionmark', () => {
  expect(fn('?a=b')).toEqual([
    {
      name: 'a',
      operator: 'eq',
      operands: ['b']
    }
  ]);
});

test('ignore invalid parameters', () => {
  expect(fn('=')).toEqual([]);
});

test('respect parameter parser priority', () => {
  expect(fn('a=+sort')).toEqual([
    {
      name: 'a',
      operator: 'sort',
      operands: ['asc']
    }
  ]);
});
