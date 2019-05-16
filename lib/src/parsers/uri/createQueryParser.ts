import { Parameter, Parser } from '../../models';
import { parseParameter } from './parseParameter';

/**
 * Creates a query parser to take URL as input. The creator function
 * takes an array of parameter parser functions to be called on each
 * string formatted parameter. Fhe first troothy returned value
 * will be used as parsed value for string parameter.
 *
 * @param parameterParsers Parameter parser functions.
 * @returns A function to parse query string.
 */
export const createQueryParser = (
  parameterParsers: Parser<Parameter>[]
): Parser<Parameter[]> => (source, registry) => {
  const { separators } = registry;
  return source
    .replace(/^\?/, '')
    .split(separators.parameter)
    .map(parameterSource => {
      for (const fn of parameterParsers) {
        const parameter = fn(parameterSource, { separators });
        if (parameter) {
          return parameter;
        }
      }
    })
    .filter(v => v);
};
