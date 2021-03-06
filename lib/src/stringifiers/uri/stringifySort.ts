import { Parameter, Stringifier } from '../../models';

/**
 * Stringifies parameter to sort parameter string if possible.
 */
export const stringifySort: Stringifier<Parameter> = (
  { name, operator, operands },
  { separators }
) => {
  if (operator === 'sort' && operands[0] === 'asc') {
    return name + separators.name + '+sort';
  }
  if (operator === 'sort' && operands[0] === 'desc') {
    return name + separators.name + '-sort';
  }
};
