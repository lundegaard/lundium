import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import classNamesByBreakpoint from '../../utils/classNamesByBreakpoint';
import Box from '../Box';

const alignToClassName = classNamesByBreakpoint((align, breakpoint) =>
	breakpoint === 'xs' ? `text-${align}` : `text-${breakpoint}-${align}`,
);

const Text = forwardRef(
	(
		{
			align,
			as = 'p',
			children,
			wrap,
			transform,
			className,
			color,
			weight,
			size,
			...rest
		},
		ref,
	) => (
		<Box
			ref={ref}
			as={as}
			{...rest}
			className={cx(
				className,
				{
					[`text-${wrap}`]: wrap,
					[`text-${transform}`]: transform,
					[`text-${color}`]: color,
					[`text-${size}`]: size,
					[`font-weight-${weight}`]: weight,
				},
				alignToClassName && alignToClassName(align),
			)}
		>
			{children}
		</Box>
	),
);
Text.displayName = 'forwardRef(Text)';

Text.propTypes = {
	align: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(
			PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		),
		PropTypes.oneOf(['left', 'center', 'right']),
	]),
	/** Tag used for root component */
	as: PropTypes.any,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.oneOf(['md', 'lg']),
	transform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize']),
	weight: PropTypes.oneOf([
		'extra-bold',
		'bold',
		'semibold',
		'normal',
		'light',
	]),
	wrap: PropTypes.oneOf(['wrap', 'nowrap', 'truncate']),
	...Box.propTypes,
};

export default Text;
