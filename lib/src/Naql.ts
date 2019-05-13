import { Parameter, Reformer, Registry, SeparatorRegistry } from './models';
import * as urlParsers from './parsers/url';
import { reformFromUri, reformToNumber, reformToUri } from './reformers';
import * as sqlStringifiers from './stringifiers/sql';
import * as urlStringifiers from './stringifiers/url';

export class Naql {
  registry: Registry = {
    separators: new SeparatorRegistry(),
    parsers: {
      url: urlParsers.createQueryParser([
        urlParsers.parseFlag,
        urlParsers.parseRange,
        urlParsers.parseSort,
        urlParsers.parseParameter
      ])
    },
    stringifiers: {
      url: urlStringifiers.createQueryStringifier([
        urlStringifiers.stringifyRange,
        urlStringifiers.stringifySort,
        urlStringifiers.stringifyParameter
      ]),
      sql: sqlStringifiers.stringifyQuery
    },
    reformers: {
      parse: [reformFromUri, reformToNumber],
      stringify: [reformToUri]
    }
  };

  constructor(registry?: Registry) {
    this.registry = { ...this.registry, ...(registry || {}) };
  }

  parse(source: string, parserName = 'url'): Parameter[] {
    const parser = this.registry.parsers[parserName];
    if (!parser) {
      throw 'no such parser';
    }
    const parsed = parser.call(null, source, this.registry);
    return this.reform(parsed, this.registry.reformers.parse);
  }

  reform(
    parameters: Parameter[],
    reformers: Reformer<Parameter>[]
  ): Parameter[] {
    return parameters.map(parameter =>
      reformers.reduce((a, b) => b(a, this.registry), parameter)
    );
  }

  stringify(parameters: Parameter[], stringifierName = 'url') {
    const reformed = this.reform(parameters, this.registry.reformers.stringify);
    const stringifier = this.registry.stringifiers[stringifierName];
    if (!stringifier) {
      throw 'no such stringifier';
    }
    return stringifier.call(null, reformed, this.registry);
  }
}
