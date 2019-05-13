import { CoreRegistry } from './Registry/CoreRegistry';

export type Reformer<T> = (source: T, registry: CoreRegistry) => T;
