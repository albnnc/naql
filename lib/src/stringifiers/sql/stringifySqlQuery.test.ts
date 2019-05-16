import * as sqlite from 'sqlite';
import { Parameter, Registry } from '../../models';
import { stringifySqlQuery } from './stringifySqlQuery';

const createDb = async () => {
  const db = await sqlite.open(':memory:');
  await db.exec(`
  CREATE TABLE IF NOT EXISTS data (
    a VARCHAR(2) NULL,
    b VARCHAR(2) NULL,
    c INT NULL
    );
    
    INSERT INTO data VALUES
    ("A1","B1",1),
    ("A2","B2",2),
    ("A3","B3",3);
    `);
  return db;
};

const fn = (parameters: Parameter[]) =>
  'SELECT * from data ' + stringifySqlQuery(parameters, new Registry());

test('single by column equality', async () => {
  const db = await createDb();
  const row = await db.get(
    fn([
      {
        name: 'a',
        operator: 'eq',
        operands: ['A1']
      }
    ])
  );
  db.close();
  expect(row).toEqual({ a: 'A1', b: 'B1', c: 1 });
});

test('multiple by > operator', async () => {
  const db = await createDb();
  const rows = await db.all(
    fn([
      {
        name: 'c',
        operator: 'gt',
        operands: ['1']
      }
    ])
  );
  db.close();
  expect(rows).toEqual([
    { a: 'A2', b: 'B2', c: 2 },
    { a: 'A3', b: 'B3', c: 3 }
  ]);
});

test('multiple by bt operator', async () => {
  const db = await createDb();
  const rows = await db.all(
    fn([
      {
        name: 'c',
        operator: 'bt',
        operands: ['2', '3']
      }
    ])
  );
  db.close();
  expect(rows).toEqual([
    { a: 'A2', b: 'B2', c: 2 },
    { a: 'A3', b: 'B3', c: 3 }
  ]);
});

test('sort', async () => {
  const db = await createDb();
  const rows = await db.all(
    fn([
      {
        name: 'c',
        operator: 'sort',
        operands: ['desc']
      }
    ])
  );
  db.close();
  expect(rows).toEqual([
    { a: 'A3', b: 'B3', c: 3 },
    { a: 'A2', b: 'B2', c: 2 },
    { a: 'A1', b: 'B1', c: 1 }
  ]);
});
