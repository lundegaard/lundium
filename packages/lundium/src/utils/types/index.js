import PropTypes from 'prop-types';

export { default as responsiveStringOrNumberPropType } from './responsiveStringOrNumberPropType';
export { default as responsiveBoolOrStringPropType } from './responsiveBoolOrStringPropType';
export { default as responsiveBoolPropType } from './responsiveBoolPropType';
export { default as responsiveNumberPropType } from './responsiveNumberPropType';
export { default as stringOrNumberPropType } from './stringOrNumberPropType';

export const logicalHorizontalDirections = PropTypes.oneOf(['start', 'end']);

export const transitionShape = PropTypes.shape({
	duration: PropTypes.number,
	classNames: PropTypes.string,
});
