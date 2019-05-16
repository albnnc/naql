import { Parameter, Stringifier } from '../../models';

/**
 * Basic parameter stringifier.
 *
 * @returns The string which includes name, operator and operands.
 */
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
