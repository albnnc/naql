import { Parameter, Stringifier } from '../../models';

/**
 * Creates URL query stringifier. The creator function
 * takes an array of parameter stringifier functions to be called on each
 * string formatted parameter. Fhe first troothy returned value
 * will be used as stringified value for source parameter.
 *
 * @param parameterStringifiers Parameter stringifier functions.
 * @returns A function to stringify given array of parameters.
 */
export const createQueryStringifier = (
  parameterStringifiers: Stringifier<Parameter>[]
): Stringifier<Parameter[]> => (parameters, registry) => {
  const { separators } = registry;
  return parameters
    .map(parameter => {
      for (let fn of parameterStringifiers) {
        const stringified = fn(parameter, registry);
        if (stringified) {
          return stringified;
        }
      }
    })
    .join(separators.parameter);
};
