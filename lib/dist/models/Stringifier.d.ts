import { CoreRegistry } from './Registry/CoreRegistry';
export declare type Stringifier<T> = (source: T, registry: CoreRegistry) => string;
