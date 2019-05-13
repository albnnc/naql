import { CoreRegistry } from './Registry/CoreRegistry';

export type Parser<T> = (source: string, registry: CoreRegistry) => T;
