import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { compose, filter, fromPairs, map, omit, test, toPairs } from 'ramda';
import { cx, isNilOrEmptyString } from 'ramda-extension';

import classNamesByBreakpoint from '../../../utils/classNamesByBreakpoint';

const propToClassName = prefix =>
	classNamesByBreakpoint(
		(value, breakpoint) =>
			!isNilOrEmptyString(value) &&
			(breakpoint === 'xs' ? `${prefix}-${value}` : `${prefix}-${breakpoint}-${value}`)
	);
const displayToClassName = propToClassName('d');

const omitInvalidProps = compose(
	fromPairs,
	// filter only event handlers and data-attributes. Due to backwards compatibily we can't use `elementProps`
	filter(([prop]) => test(/^(on|data-|role|aria-)/, prop)),
	toPairs
);

const DIMENSIONS = [
	'm',
	'p',
	'mx',
	'my',
	'mt',
	'mr',
	'mb',
	'ml',
	'px',
	'py',
	'pt',
	'pr',
	'pb',
	'pl',
	'order',
];

const Box = forwardRef(
	(
		{ children, as: Comp = 'div', className, display, strictAttributes, elementProps, ...rest },
		ref
	) => (
		<Comp
			className={cx(
				...map(x => propToClassName(x)(rest[x]))(DIMENSIONS),
				displayToClassName(display),
				className
			)}
			ref={ref}
			{...(strictAttributes ? omitInvalidProps(rest) : omit(DIMENSIONS, rest))}
			{...elementProps}
		>
			{children}
		</Comp>
	)
);

Box.displayName = 'forwardRef(Box)';

const stringOrNumberPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const stringOrNumberArrayPropType = PropTypes.arrayOf(stringOrNumberPropType);

const stringOrNumberObjectPropType = PropTypes.shape({
	xs: stringOrNumberPropType,
	sm: stringOrNumberPropType,
	md: stringOrNumberPropType,
	lg: stringOrNumberPropType,
	xl: stringOrNumberPropType,
});

const responsiveStringOrNumberPropType = PropTypes.oneOfType([
	stringOrNumberPropType,
	stringOrNumberArrayPropType,
	stringOrNumberObjectPropType,
]);

const dimensionsPropTypes = DIMENSIONS.reduce(
	(propTypes, dimension) => ({ ...propTypes, [dimension]: responsiveStringOrNumberPropType }),
	{}
);

Box.propTypes = {
	/** Tag used for root component */
	as: PropTypes.any,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	display: responsiveStringOrNumberPropType,
	elementProps: PropTypes.object,
	strictAttributes: PropTypes.bool,
	...dimensionsPropTypes,
};

export default Box;
