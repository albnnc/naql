import { Parameter, Registry, SeparatorRegistry, Transformer } from './models';
import {
  createQueryParser,
  parseFlag,
  parseParameter,
  parseRange,
  parseSort
} from './parsers';
import {
  createQueryStringifier,
  stringifyParameter,
  stringifyRange,
  stringifySort,
  stringifySqlQuery
} from './stringifiers';
import {
  transformFromUri,
  transformToNumber,
  transformToUri
} from './transformers';

/**
 * The main class which includes registry, parsers, stringifiers
 * and transformers. Configurable through constructor.
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
    transformers: {
      parse: [transformFromUri, transformToNumber],
      stringify: [transformToUri]
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
    return this.transform(parsed, this.registry.transformers.parse);
  }

  /**
   * Stringifies given array of parameters.
   *
   * @param parameters Input parameters.
   * @param stringifierName Stringifier from registry name to use.
   */
  stringify(parameters: Parameter[], stringifierName = 'url') {
    const transformed = this.transform(
      parameters,
      this.registry.transformers.stringify
    );
    const stringifier = this.registry.stringifiers[stringifierName];
    if (!stringifier) {
      throw 'no such stringifier';
    }
    return stringifier.call(null, transformed, this.registry);
  }

  /**
   * Applies the array transformers to array of parameters.
   *
   * @param parameters Input array of parameters
   * @param transformers Transformers to apply.
   */
  transform(
    parameters: Parameter[],
    transformers: Transformer<Parameter>[]
  ): Parameter[] {
    return parameters.map(parameter =>
      transformers.reduce((a, b) => b(a, this.registry), parameter)
    );
  }
}
