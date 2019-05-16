import { Parameter, Stringifier } from '../../models';

/**
 * Stringifies parameter to range-like string if possible.
 */
export const stringifyRange: Stringifier<Parameter> = (
  { name, operator, operands },
  { separators }
) => {
  if (operator === 'bt' && operands.length === 2) {
    return name + separators.name + `${operands[0]}~${operands[1]}`;
  }
  if (operator === 'le' && operands.length === 1) {
    return name + separators.name + `~${operands[0]}`;
  }
  if (operator === 'ge' && operands.length === 1) {
    return name + separators.name + `${operands[0]}~`;
  }
};
