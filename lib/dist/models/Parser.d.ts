import { CoreRegistry } from './Registry/CoreRegistry';
export declare type Parser<T> = (source: string, registry: CoreRegistry) => T;
