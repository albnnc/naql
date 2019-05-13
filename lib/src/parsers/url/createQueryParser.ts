import { Parameter, Parser } from '../../models';

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
