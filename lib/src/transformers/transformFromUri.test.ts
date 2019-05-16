import { CoreRegistry, Parameter } from '../models';
import { transformFromUri } from './transformFromUri';

const fn = (parameter: Parameter) =>
  transformFromUri(parameter, new CoreRegistry());

test('decode uri in strings', () => {
  expect(
    fn({
      name: '%40%3A%5E',
      operator: 'normal',
      operands: [1, '%2F%2F']
    })
  ).toEqual({
    name: '@:^',
    operator: 'normal',
    operands: [1, '//']
  });
});
