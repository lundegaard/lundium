import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { compose, filter, fromPairs, map, omit, test, toPairs } from 'ramda';
import { cx, isNilOrEmptyString } from 'ramda-extension';

import classNamesByBreakpoint from '../../utils/classNamesByBreakpoint';
import responsiveStringOrNumberPropType from '../../utils/types/responsiveStringOrNumberPropType';

const propToClassName = prefix =>
	classNamesByBreakpoint(
		(value, breakpoint) =>
			!isNilOrEmptyString(value) &&
			(breakpoint === 'xs'
				? `${prefix}-${value}`
				: `${prefix}-${breakpoint}-${value}`),
	);
const displayToClassName = propToClassName('d');

const omitInvalidProps = compose(
	fromPairs,
	// filter only event handlers and data-attributes.
	// Due to backwards compatibily we can't use `elementProps`
	filter(([prop]) => test(/^(on|data-|role|aria-)/, prop)),
	toPairs,
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
		{
			children,
			as: Comp = 'div',
			className,
			display,
			hasStrictAttributes,
			elementProps,
			...rest
		},
		ref,
	) => (
		<Comp
			className={cx(
				...map(x => propToClassName(x)(rest[x]))(DIMENSIONS),
				displayToClassName(display),
				className,
			)}
			ref={ref}
			{...(hasStrictAttributes
				? omitInvalidProps(rest)
				: omit(DIMENSIONS, rest))}
			{...elementProps}
		>
			{children}
		</Comp>
	),
);

Box.displayName = 'forwardRef(Box)';

const dimensionsPropTypes = DIMENSIONS.reduce(
	(propTypes, dimension) => ({
		...propTypes,
		[dimension]: responsiveStringOrNumberPropType,
	}),
	{},
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
	hasStrictAttributes: PropTypes.bool,
	...dimensionsPropTypes,
};

export default Box;
