import { CoreRegistry, Parameter } from '../models';
import { transformToUri } from './transformToUri';

const fn = (parameter: Parameter) =>
  transformToUri(parameter, new CoreRegistry());

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
