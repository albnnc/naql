import { Parameter, Reformer } from '../models';

export const reformToNumber: Reformer<Parameter> = parameter => {
  return {
    ...parameter,
    operands: parameter.operands.map(v => {
      const numeric = +v;
      return isNaN(numeric) ? v : numeric;
    })
  };
};
