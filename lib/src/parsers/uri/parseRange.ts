import { Parameter, Parser } from '../../models';
import { separate } from '../../utils';

/**
 * Parses range-like constructions. Range might be open and closed,
 * and the result operators are `'le'`, `'ge'` and `'bt'` (between).
 */
export const parseRange: Parser<Parameter> = (source, { separators }) => {
  const [name, value] = separate(source, separators.name);
  if (!name || !value) {
    return;
  }

  const range = value.split('~');
  if (range.length !== 2) {
    return;
  }

  // a=b~c
  if (range[0] && range[1]) {
    return {
      name,
      operator: 'bt',
      operands: range
    };
  }

  // a=~b
  if (!range[0] && range[1]) {
    return {
      name,
      operator: 'le',
      operands: [range[1]]
    };
  }

  // a=b~
  if (range[0] && !range[1]) {
    return {
      name,
      operator: 'ge',
      operands: [range[0]]
    };
  }
};
