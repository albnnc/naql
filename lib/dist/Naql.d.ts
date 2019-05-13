import { Parameter, Reformer, Registry } from './models';
export declare class Naql {
    registry: Registry;
    constructor(registry?: Registry);
    parse(source: string, parserName?: string): Parameter[];
    reform(parameters: Parameter[], reformers: Reformer<Parameter>[]): Parameter[];
    stringify(parameters: Parameter[], stringifierName?: string): any;
}
