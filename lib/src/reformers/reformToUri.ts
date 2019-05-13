import { Parameter, Reformer } from '../models';

export const reformToUri: Reformer<Parameter> = parameter => {
  const transform = v => {
    if (typeof v === 'string') {
      return encodeURIComponent(v);
    }
    return v;
  };
  return JSON.parse(JSON.stringify(parameter, (k, v) => transform(v)));
};
