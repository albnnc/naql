import { Parameter, Parser } from '../../models';
import { separate } from '../../utils';

export const parseFlag: Parser<Parameter> = (source, { separators }) => {
  const [name, value] = separate(source, separators.name);
  if (name && !value) {
    return {
      name,
      operator: 'eq',
      operands: [1]
    };
  }
};
