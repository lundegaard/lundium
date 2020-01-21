import { complement } from 'ramda';

import isNotFilled from './isNotFilled';

const isFilled = complement(isNotFilled);

export default isFilled;
