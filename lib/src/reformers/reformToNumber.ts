import { Parameter, Reformer } from '../models';

/**
 * If could be done, parses each parameter operand to number.
 * If not, leaves parameter as string.
 */
export const reformToNumber: Reformer<Parameter> = parameter => {
  return {
    ...parameter,
    operands: parameter.operands.map(v => {
      const numeric = +v;
      return isNaN(numeric) ? v : numeric;
    })
  };
};
