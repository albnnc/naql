import { Parameter, Reformer, Registry, SeparatorRegistry } from './models';
import {
  createQueryParser,
  parseFlag,
  parseParameter,
  parseRange,
  parseSort
} from './parsers';
import { reformFromUri, reformToNumber, reformToUri } from './reformers';
import {
  createQueryStringifier,
  stringifyParameter,
  stringifyRange,
  stringifySort,
  stringifySqlQuery
} from './stringifiers';

/**
 * The main class which includes registry, parsers, stringifiers
 * and reformers. Configurable through constructor.
 */
export class Naql {
  registry: Registry = {
    separators: new SeparatorRegistry(),
    parsers: {
      url: createQueryParser([parseFlag, parseRange, parseSort, parseParameter])
    },
    stringifiers: {
      url: createQueryStringifier([
        stringifyRange,
        stringifySort,
        stringifyParameter
      ]),
      sql: stringifySqlQuery
    },
    reformers: {
      parse: [reformFromUri, reformToNumber],
      stringify: [reformToUri]
    }
  };

  /**
   * @param registry Custom registry to be shallow merged into the default one.
   */
  constructor(registry?: Registry) {
    this.registry = { ...this.registry, ...(registry || {}) };
  }

  /**
   * Parses given string to array of parameters.
   *
   * @param source String to be parsed.
   * @param parserName Parser to use from registry.
   */
  parse(source: string, parserName = 'url'): Parameter[] {
    const parser = this.registry.parsers[parserName];
    if (!parser) {
      throw 'no such parser';
    }
    const parsed = parser.call(null, source, this.registry);
    return this.reform(parsed, this.registry.reformers.parse);
  }

  /**
   * Applies the array reformers to array of parameters.
   *
   * @param parameters Input array of parameters
   * @param reformers Reformers to apply.
   */
  reform(
    parameters: Parameter[],
    reformers: Reformer<Parameter>[]
  ): Parameter[] {
    return parameters.map(parameter =>
      reformers.reduce((a, b) => b(a, this.registry), parameter)
    );
  }

  /**
   * Stringifies given array of parameters.
   *
   * @param parameters Input parameters.
   * @param stringifierName Stringifier from registry name to use.
   */
  stringify(parameters: Parameter[], stringifierName = 'url') {
    const reformed = this.reform(parameters, this.registry.reformers.stringify);
    const stringifier = this.registry.stringifiers[stringifierName];
    if (!stringifier) {
      throw 'no such stringifier';
    }
    return stringifier.call(null, reformed, this.registry);
  }
}
