import { CoreRegistry } from '../../models';
import { parseSort } from './parseSort';

const fn = (source: string) => parseSort(source, new CoreRegistry());

test('sort asc', () => {
  expect(fn('a=+sort')).toEqual({
    name: 'a',
    operator: 'sort',
    operands: ['asc']
  });
});

test('sort desc', () => {
  expect(fn('a=-sort')).toEqual({
    name: 'a',
    operator: 'sort',
    operands: ['desc']
  });
});

test('+/- sign is required', () => {
  expect(fn('a=sort')).toBe(undefined);
});
