import { Parameter, Stringifier } from '../../models';

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
