# NAQL — Not Another Query Library

<p>
  🛠️ Highely configurable<br>
  💯 Tested with Jest<br>
  🙆 Zero dependencies<br>
  💪 Built with TypeScript<br>
  📗 Features <a href="./api/naql.md">API documentation</a>
</p>

This module correctly parses basic parameter notation, sort parameters and range tilde notation. However, you can extend module functionality either by providing custom prameter parser (it's easy), or by provinding entire custom query format parser. You can also add various stringifiers and call them later on parsed query.

```typescript
const naql = new Naql();
naql.parse('?alias=john&age=21~');
// [{
//   name: 'alias',
//   operator: 'eq',
//   operands: ['john']
// }, {
//   name: 'age',
//   operator: 'ge',
//   operands: [21]
// }]
```

## Custom Parameter Parser

The parsing process is expressed by `Parser<T>` functions. While the top level parsers must have `Parser<Parameter[]>` signature, we can create a simple `Parser<Parameter>` function and pass it to `createQueryParser([...])` method, which uses the first non-undefined result as the parsed value for each query parameter.

Let's see a quick example of extending Naql functionality. The following example illustrates parameter parser which treats `?flag` like falsy values instead of original troothy ones.

```typescript
export const parseFalsyFlag: Parser<Parameter> = (source, { separators }) => {
  const [name, value] = separate(source, separators.name);
  if (name && !value) {
    return {
      name,
      operator: 'eq',
      operands: [0]
    };
  }
};

const naql = new Naql({
  parsers: {
    // override the original url query parser
    url: createQueryParser([
      parseFalsyFlag
      // ...the rest of original parameter parsers
      // except the parseFlag parser
    ])
  }
});

naql.parse('?falsy');
```

## SQL Requests

When you have parsed query represented by array of parameters, you can stringify it to SQL request via the SQL stringifier.

```typescript
const parameters: Parameter[] = [
  {
    name: 'alias',
    operator: 'eq',
    operands: ['john']
  },
  {
    name: 'age',
    operator: 'ge',
    operands: [21]
  },
  {
    name: 'date',
    operator: 'sort',
    operands: ['asc']
  }
];

const sqlified = naql.stringify(parameters, 'sql');
// WHERE alias='john' AND age>=21 ORDER BY date ASC
// sqlite.all('SELECT * from data ' + sqlified)
```

## Resources

- [API Documentation](./api/naql.md)
- [NAQL Specification](../spec)

## Contributing

This library is tested with Jest and I try to keep code coverage at 100%. However, the bugs may happen — feel free to fill an issue then.

## License

MIT
