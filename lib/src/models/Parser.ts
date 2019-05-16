import { CoreRegistry } from './Registry/CoreRegistry';

/**
 * A function that must provide parsed either
 * specified type as result or `undefined`, if the input `source`
 * could not be parsed.
 *
 * @param source Source string to be parsed.
 * @param registry Various data passed down to every parser.
 */
export type Parser<T> = (
  source: string,
  registry: CoreRegistry
) => T | undefined;
