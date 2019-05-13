import { CoreRegistry } from './Registry/CoreRegistry';

export type Stringifier<T> = (source: T, registry: CoreRegistry) => string;
