import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import classNamesByBreakpoint from '../../utils/classNamesByBreakpoint';
import Box from '../Box';

const boolPropToClassName = prefix =>
	classNamesByBreakpoint((value, breakpoint) => {
		if (value === true) {
			return breakpoint === 'xs' ? `${prefix}` : `${prefix}-${breakpoint}`;
		}

		return breakpoint === 'xs'
			? `${prefix}-${value}`
			: `${prefix}-${breakpoint}-${value}`;
	});

const Card = ({ className, boxShadow, borderRadius, ...rest }) => (
	<Box
		{...rest}
		className={cx(
			boolPropToClassName('shadow')(boxShadow),
			boolPropToClassName('border-radius')(borderRadius),
			className,
		)}
	/>
);

const boxShadowPropType = PropTypes.oneOf([true, 'sm', 'lg', 'none']);
const borderRadiusPropType = PropTypes.oneOf(['none', true]);

Card.propTypes = {
	borderRadius: PropTypes.oneOfType([
		PropTypes.object,
		boxShadowPropType,
		PropTypes.arrayOf(borderRadiusPropType),
	]),
	boxShadow: PropTypes.oneOfType([
		PropTypes.object,
		boxShadowPropType,
		PropTypes.arrayOf(boxShadowPropType),
	]),
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
};

export default Card;
