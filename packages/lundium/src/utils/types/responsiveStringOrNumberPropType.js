import PropTypes from 'prop-types';

import stringOrNumberPropType from './stringOrNumberPropType';

const stringOrNumberArrayPropType = PropTypes.arrayOf(stringOrNumberPropType);

const stringOrNumberObjectPropType = PropTypes.shape({
	xs: stringOrNumberPropType,
	sm: stringOrNumberPropType,
	md: stringOrNumberPropType,
	lg: stringOrNumberPropType,
	xl: stringOrNumberPropType,
});

export default PropTypes.oneOfType([
	stringOrNumberPropType,
	stringOrNumberArrayPropType,
	stringOrNumberObjectPropType,
]);
