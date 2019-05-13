import { Parameter, Stringifier } from '../../models';

export const stringifyOrderByGroup: Stringifier<Parameter[]> = parameters => {
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
