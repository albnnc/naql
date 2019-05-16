import { Parameter } from '../Parameter';
import { Parser } from '../Parser';
import { Reformer } from '../Reformer';
import { Stringifier } from '../Stringifier';
import { CoreRegistry } from './CoreRegistry';
/**
 * The global registry for the `Naql` instance.
 */
export declare class Registry extends CoreRegistry {
    parsers: {
        [name: string]: Parser<Parameter[]>;
    };
    reformers: {
        parse: Reformer<Parameter>[];
        stringify: Reformer<Parameter>[];
    };
    stringifiers: {
        [name: string]: Stringifier<Parameter[]>;
    };
}
