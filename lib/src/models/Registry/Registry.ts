import { Parameter } from '../Parameter';
import { Parser } from '../Parser';
import { Stringifier } from '../Stringifier';
import { Transformer } from '../Transformer';
import { CoreRegistry } from './CoreRegistry';

/**
 * The global registry for the `Naql` instance.
 */
export class Registry extends CoreRegistry {
  parsers = {} as {
    [name: string]: Parser<Parameter[]>;
  };
  stringifiers = {} as {
    [name: string]: Stringifier<Parameter[]>;
  };
  transformers = {
    parse: [] as Transformer<Parameter>[],
    stringify: [] as Transformer<Parameter>[]
  };
}
