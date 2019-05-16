import { Parameter, Stringifier } from '../../models';
import { stringifySqlOrderByGroup } from './stringifySqlOrderByGroup';
import { stringifySqlWhereGroup } from './stringifySqlWhereGroup';

/**
 * Makes an SQL query from parameter array. Not includes parts
 * like `SELECT * FROM data` and the trailing `;`.
 */
export const stringifySqlQuery: Stringifier<Parameter[]> = (
  parameters,
  registry
) => {
  return [
    stringifySqlWhereGroup(parameters, registry),
    stringifySqlOrderByGroup(parameters, registry)
  ].join(' ');
};
