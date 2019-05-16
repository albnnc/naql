import { CoreRegistry } from './Registry/CoreRegistry';
/**
 * @param source Input data to transform.
 * @param registry Various data passed down to every parser.
 * @returns Reformed copy of source.
 */
export declare type Reformer<T> = (source: T, registry: CoreRegistry) => T;
