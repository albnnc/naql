import { CoreRegistry } from './Registry/CoreRegistry';

/**
 * @param source Input data to transform.
 * @param registry Various data passed down to every parser.
 * @returns Transformed copy of source.
 */
export type Transformer<T> = (source: T, registry: CoreRegistry) => T;
