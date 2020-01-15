import classNamesByBreakpoint from './classNamesByBreakpoint';

const getClassName = (prop, value, breakpoint) =>
	(breakpoint === 'xs' ? [prop, value] : [prop, breakpoint, value]).join('-');

/**
 * If `validationFunction` returns `true` than `cssProperty` and `responsiveCssValue` are converted to Bootstrap's classNames.
 *
 * @see classNamesByBreakpoint
 *
 * @param {function} validationFunction
 * @param {string} cssProperty
 * @param {string|array|object} responsiveCssValue
 */
const propToClassName = validationFunction => property =>
	classNamesByBreakpoint((value, breakpoint) =>
		validationFunction(value) ? getClassName(property, value, breakpoint) : ''
	);

export default propToClassName;
