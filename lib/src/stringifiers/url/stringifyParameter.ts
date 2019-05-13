import { Parameter, Stringifier } from '../../models';

export const stringifyParameter: Stringifier<Parameter> = (
  { name, operator, operands },
  { separators }
) => {
  return (
    name +
    separators.name +
    (operator === 'eq' ? '' : operator + separators.operator) +
    operands.join(separators.operand)
  );
};
