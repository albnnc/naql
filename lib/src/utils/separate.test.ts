import { separate } from './separate';

test('act like split in case of two parts', () => {
  expect(separate('a.b', '.')).toEqual(['a', 'b']);
});

test('split on first only', () => {
  expect(separate('a.b.c', '.')).toEqual(['a', 'b.c']);
});

test('corner cases', () => {
  expect(separate('a', '.')).toEqual(['a']);
  expect(separate('a.', '.')).toEqual(['a', '']);
  expect(separate('.a', '.')).toEqual(['', 'a']);
});
