import PropTypes from 'prop-types';

const getObjectPropType = propType =>
	PropTypes.shape({
		xs: propType,
		sm: propType,
		md: propType,
		lg: propType,
		xl: propType,
	});

const getResponsivePropType = propType =>
	PropTypes.oneOfType([
		propType,
		PropTypes.arrayOf(propType),
		getObjectPropType(propType),
	]);

export default getResponsivePropType;
