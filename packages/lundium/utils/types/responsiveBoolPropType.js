import PropTypes from 'prop-types';

const boolObjectPropType = PropTypes.shape({
	xs: PropTypes.bool,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	xl: PropTypes.bool,
});

export default PropTypes.oneOfType([
	PropTypes.bool,
	PropTypes.arrayOf(PropTypes.bool),
	boolObjectPropType,
]);
