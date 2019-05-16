/**
 * Base parameter interface.
 */
export interface Parameter {
    name: string;
    operands: (string | number)[];
    operator: string;
}
