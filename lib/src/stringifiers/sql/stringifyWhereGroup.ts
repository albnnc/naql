import { Parameter, Stringifier } from '../../models';

const quote = (v: string | number) =>
  typeof v === 'string' ? `'${v}'` : `${v}`;

const stringifiers = {
  eq: v => v.operands.length === 1 && `${v.name}=${quote(v.operands[0])}`,
  ne: v => v.operands.length === 1 && `${v.name}<>${quote(v.operands[0])}`,
  lt: v => v.operands.length === 1 && `${v.name}<${quote(v.operands[0])}`,
  le: v => v.operands.length === 1 && `${v.name}<=${quote(v.operands[0])}`,
  gt: v => v.operands.length === 1 && `${v.name}>${quote(v.operands[0])}`,
  ge: v => v.operands.length === 1 && `${v.name}>=${quote(v.operands[0])}`,
  bt: v =>
    v.operands.length === 2 &&
    `${v.name} BETWEEN ${quote(v.operands[0])} AND ${quote(v.operands[1])}`
};

export const stringifyWhereGroup: Stringifier<Parameter[]> = parameters => {
  const wheres = parameters
    .filter(v => Object.keys(stringifiers).includes(v.operator))
    .map(v => stringifiers[v.operator](v))
    .filter(v => v);
  if (wheres.length < 1) {
    return;
  }
  return 'WHERE ' + wheres.join(' AND ');
};
