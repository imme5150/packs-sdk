import { LegacyCodaMarshalerType } from './constants';
import { LegacyMarshalingInjectedKeys } from './constants';
export function marshalNumber(val) {
    // Most numbers don't need to be marshaled. The only special cases are NaN and Infinity.
    if (typeof val === 'number' && (isNaN(val) || val === Infinity)) {
        return {
            data: val.toString(),
            [LegacyMarshalingInjectedKeys.CodaMarshaler]: LegacyCodaMarshalerType.Number,
        };
    }
}
export function unmarshalNumber(val) {
    if (typeof val !== 'object' || val[LegacyMarshalingInjectedKeys.CodaMarshaler] !== LegacyCodaMarshalerType.Number) {
        return;
    }
    return Number(val.data);
}
