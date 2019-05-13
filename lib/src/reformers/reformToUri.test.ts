import { CoreRegistry, Parameter } from '../models';
import { reformToUri } from './reformToUri';

const fn = (parameter: Parameter) => reformToUri(parameter, new CoreRegistry());

test('decode uri in strings', () => {
  expect(
    fn({
      name: '@:^',
      operator: 'normal',
      operands: [1, '//']
    })
  ).toEqual({
    name: '%40%3A%5E',
    operator: 'normal',
    operands: [1, '%2F%2F']
  });
});
