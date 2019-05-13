import { Parameter, Stringifier } from '../../models';
import { stringifyOrderByGroup } from './stringifyOrderByGroup';
import { stringifyWhereGroup } from './stringifyWhereGroup';

export const stringifyQuery: Stringifier<Parameter[]> = (
  parameters,
  registry
) => {
  return [
    stringifyWhereGroup(parameters, registry),
    stringifyOrderByGroup(parameters, registry)
  ].join(' ');
};
