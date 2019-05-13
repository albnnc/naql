import { CoreRegistry } from '../../models';
import { parseFlag } from './parseFlag';

const fn = (source: string) => parseFlag(source, new CoreRegistry());

test('troothy flag', () => {
  expect(fn('a')).toEqual({
    name: 'a',
    operator: 'eq',
    operands: [1]
  });
});

test('ignore invalid', () => {
  expect(fn('=')).toBe(undefined);
  expect(fn('=a')).toBe(undefined);
});
