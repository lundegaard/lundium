import PropTypes from 'prop-types';

const boolOrStringPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);
const boolOrStringArrayPropType = PropTypes.arrayOf(boolOrStringPropType);
const boolOrStringObjectPropType = PropTypes.shape({
	xs: boolOrStringPropType,
	sm: boolOrStringPropType,
	md: boolOrStringPropType,
	lg: boolOrStringPropType,
	xl: boolOrStringPropType,
});

export default PropTypes.oneOfType([
	boolOrStringPropType,
	boolOrStringArrayPropType,
	boolOrStringObjectPropType,
]);
