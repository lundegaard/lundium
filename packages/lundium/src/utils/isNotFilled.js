import { anyPass, both, either, isEmpty, isNil } from 'ramda';
import { equalsEmptyString, isArray } from 'ramda-extension';

const isNotFilled = anyPass([either(isNil, equalsEmptyString), both(isArray, isEmpty)]);

export default isNotFilled;
