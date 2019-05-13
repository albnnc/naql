import { Parameter, Parser } from '../../models';
import { separate } from '../../utils';

export const parseSort: Parser<Parameter> = (source, { separators }) => {
  const [name, value] = separate(source, separators.name);
  if (!name || !value) {
    return;
  }

  if (value === '+sort') {
    return {
      name,
      operator: 'sort',
      operands: ['asc']
    };
  }

  if (value === '-sort') {
    return {
      name,
      operator: 'sort',
      operands: ['desc']
    };
  }
};
