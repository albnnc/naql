# NAQL — Not Another Query Language

The following rules describe the way of how the query string could be parsed to array of parameters, each of which has the following [JSON Schema](https://json-schema.org/).

```
{
  "type": "object",
  "properties": {
    "name": { "type: "string" },
    "operator": { "type: "string" },
    "operands": {
      "type: "array",
      "items": {
        "oneOf": [
          { "type": "string" },
          { "type": "number" }
        ]
      }
    }
  },
  "required": ["name", "operator", "operands"]
}
```

## General Rules

**1.** _Query_ string MUST consists of only [URL allowed characters](https://tools.ietf.org/html/rfc3986#appendix-A). RESTful API developer MUST pick some characters of them to provide the _separator registry_, which is used in following specification. The recommended registry looks as follows.

| Separator | Symbol |
| --------- | :----: |
| parameter |   &    |
| name      |   =    |
| operator  |   :    |
| operand   |   ,    |

Every other then separating occurence of separator character MUST be URI encoded.

**2.** _Query_ string splits into array of _parameter_ strings by all occurences of the _parameter separator_.

**3.** If _parameter_ string includes _name separator_, then it splits into _name_ and _value_ by the first occurence of _name separator_. If not, then the whole _parameter_ represents its _name_ and MUST be evaluated to `true`.

**4.** If _value_ string includes _operator separator_, then it splits into _operator_ and _operands_ string by the first occurence of _operator separator_. If not, then the _operator_ becomes `'eq'`. Equality is the deafult operator.

**5.** _Operands_ string splits into array of _operands_ by all occurences of the _operand separator_.

## Aliases

One can use various notations, until they could be described as name-value pair — it's necessary for RESTful API. For example, the following notations are recommended.

```
/items?prop=+sort
/items?prop=sort:asc

/items?prop=-sort
/items?prop=sort:desc

/items?prop=~42
/items?prop=le:42

/items?prop=42~
/items?prop=ge:42

/items?prop=12~34
/items?prop=bt:12,34
```

## Note on the compatibility

NAQL is somewhat compatible with the subset of [FIQL](https://tools.ietf.org/html/draft-nottingham-atompub-fiql-00) in case of the following _separator registry_.

| Separator | Symbol |
| --------- | :----: |
| parameter |   ;    |
| name      |   =    |
| operator  |   =    |
| operand   |   ,    |
