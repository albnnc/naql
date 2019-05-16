import { CoreRegistry } from '../../models';
import { parseRange } from './parseRange';

const fn = (source: string) => parseRange(source, new CoreRegistry());

test('between', () => {
  expect(fn('a=b~c')).toEqual({
    name: 'a',
    operator: 'bt',
    operands: ['b', 'c']
  });
});

test('less or equals', () => {
  expect(fn('a=~b')).toEqual({
    name: 'a',
    operator: 'le',
    operands: ['b']
  });
});

test('greater or equals', () => {
  expect(fn('a=b~')).toEqual({
    name: 'a',
    operator: 'ge',
    operands: ['b']
  });
});

test('ignore invalid', () => {
  expect(fn('a=')).toBe(undefined);
  expect(fn('=a')).toBe(undefined);
  expect(fn('a=b')).toBe(undefined);
  expect(fn('a=~')).toBe(undefined);
});
