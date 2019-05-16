import { Parameter, Transformer } from '../models';

/**
 * Applies URI decoding to parameter strings.
 */
export const transformFromUri: Transformer<Parameter> = parameter => {
  const transform = v => {
    if (typeof v === 'string') {
      return decodeURIComponent(v);
    }
    return v;
  };
  return JSON.parse(JSON.stringify(parameter, (k, v) => transform(v)));
};
