import PropTypes from 'prop-types';

const numberObjectPropType = PropTypes.shape({
	xs: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
	xl: PropTypes.number,
});

export default PropTypes.oneOfType([
	PropTypes.number,
	PropTypes.arrayOf(PropTypes.number),
	numberObjectPropType,
]);
