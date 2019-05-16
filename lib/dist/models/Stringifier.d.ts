import { CoreRegistry } from './Registry/CoreRegistry';
/**
 * Stringifies given data of specified type.
 */
export declare type Stringifier<T> = (source: T, registry: CoreRegistry) => string;
