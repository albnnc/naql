import { CoreRegistry } from '../../models';
import { parseParameter } from './parseParameter';

const fn = (source: string) => parseParameter(source, new CoreRegistry());

test('equality operator', () => {
  expect(fn('a=b')).toEqual({
    name: 'a',
    operator: 'eq',
    operands: ['b']
  });
});

test('simple custom operator', () => {
  expect(fn('a=b:c')).toEqual({
    name: 'a',
    operator: 'b',
    operands: ['c']
  });
});

test('multiple operands', () => {
  expect(fn('a=b:c,d,e')).toEqual({
    name: 'a',
    operator: 'b',
    operands: ['c', 'd', 'e']
  });
});

test('ignore invalid', () => {
  expect(fn('=')).toBe(undefined);
  expect(fn('=a')).toBe(undefined);
  expect(fn('a=')).toBe(undefined);
});
