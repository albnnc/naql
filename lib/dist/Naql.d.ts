import { Parameter, Reformer, Registry } from './models';
/**
 * The main class which includes registry, parsers, stringifiers
 * and reformers. Configurable through constructor.
 */
export declare class Naql {
    registry: Registry;
    /**
     * @param registry Custom registry to be shallow merged into the default one.
     */
    constructor(registry?: Registry);
    /**
     * Parses given string to array of parameters.
     *
     * @param source String to be parsed.
     * @param parserName Parser to use from registry.
     */
    parse(source: string, parserName?: string): Parameter[];
    /**
     * Applies the array reformers to array of parameters.
     *
     * @param parameters Input array of parameters
     * @param reformers Reformers to apply.
     */
    reform(parameters: Parameter[], reformers: Reformer<Parameter>[]): Parameter[];
    /**
     * Stringifies given array of parameters.
     *
     * @param parameters Input parameters.
     * @param stringifierName Stringifier from registry name to use.
     */
    stringify(parameters: Parameter[], stringifierName?: string): any;
}
