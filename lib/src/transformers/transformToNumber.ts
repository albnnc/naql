import { Parameter, Transformer } from '../models';

/**
 * If could be done, parses each parameter operand to number.
 * If not, leaves parameter as string.
 */
export const transformToNumber: Transformer<Parameter> = parameter => {
  return {
    ...parameter,
    operands: parameter.operands.map(v => {
      const numeric = +v;
      return isNaN(numeric) ? v : numeric;
    })
  };
};
