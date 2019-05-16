import { CoreRegistry } from './Registry/CoreRegistry';

/**
 * Stringifies given data of specified type.
 */
export type Stringifier<T> = (source: T, registry: CoreRegistry) => string;
