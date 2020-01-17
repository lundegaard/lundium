import { o, split } from 'ramda';
import { defaultToEmptyString } from 'ramda-extension';

export const splitByComma = split(',');

export const splitByCommaSafe = o(splitByComma, defaultToEmptyString);
