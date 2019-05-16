import { Parameter, Parser } from '../../models';
import { separate } from '../../utils';

/**
 * The basic parameter parser. Tries to find an operator; if found,
 * sets it. If not, the default is used (`'eq'`).
 */
export const parseParameter: Parser<Parameter> = (source, { separators }) => {
  const [name, value] = separate(source, separators.name);
  if (!name || !value) {
    return;
  }

  const parts = separate(value, separators.operator);
  if (parts.length === 1) {
    return {
      name,
      operator: 'eq',
      operands: [parts[0]]
    };
  }

  return {
    name,
    operator: parts[0],
    operands: parts[1].split(separators.operand)
  };
};
