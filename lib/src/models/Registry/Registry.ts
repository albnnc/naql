import { Parameter } from '../Parameter';
import { Parser } from '../Parser';
import { Reformer } from '../Reformer';
import { Stringifier } from '../Stringifier';
import { CoreRegistry } from './CoreRegistry';

/**
 * The global registry for Naql instance.
 */
export class Registry extends CoreRegistry {
  parsers = {} as {
    [name: string]: Parser<Parameter[]>;
  };
  reformers = {
    parse: [] as Reformer<Parameter>[],
    stringify: [] as Reformer<Parameter>[]
  };
  stringifiers = {} as {
    [name: string]: Stringifier<Parameter[]>;
  };
}
