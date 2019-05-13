import { CoreRegistry, Parameter } from '../models';
import { reformToNumber } from './reformToNumber';

const fn = (parameter: Parameter) =>
  reformToNumber(parameter, new CoreRegistry());

test('cast operands to numbers if possible', () => {
  expect(
    fn({
      name: 'a',
      operator: 'b',
      operands: ['1', 2, 'text', '1.234', '192.168.1.1']
    })
  ).toEqual({
    name: 'a',
    operator: 'b',
    operands: [1, 2, 'text', 1.234, '192.168.1.1']
  });
});
