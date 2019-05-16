import { Parameter, Stringifier } from '../../models';

/**
 * Looks through all given parameters and combines
 * them to the `WHERE...` part of SQL request.
 */
export const stringifySqlOrderByGroup: Stringifier<
  Parameter[]
> = parameters => {
  const orderBys = parameters
    .filter(
      v =>
        v.operator === 'sort' &&
        v.operands.length === 1 &&
        ['asc', 'desc'].includes(v.operands[0] + '')
    )
    .map(v => `${v.name} ${(v.operands[0] + '').toUpperCase()}`);
  if (orderBys.length < 1) {
    return;
  }
  return 'ORDER BY ' + orderBys.join(', ');
};
