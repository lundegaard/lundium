import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import { stringOrNumberPropType } from '../../../utils/types';
import Text from '../Text';

const Icon = forwardRef(
	({ children, type, size = '14', className, color = 'dark', ...rest }, ref) => (
		<Text
			as="i"
			{...rest}
			color={color}
			className={cx(
				'icon',
				`icon--type-${type}`,
				`icon--size-${size}`,
				`color-${color}`,
				className
			)}
			ref={ref}
		>
			{children}
		</Text>
	)
);

Icon.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** Color of icon. */
	// FIXME - export from scss is empty for jest tests
	// color: PropTypes.oneOf(colors),
	color: PropTypes.string,
	/** Size of icon. */
	// FIXME - export from scss is empty for jest tests
	// size: PropTypes.oneOf(sizes),
	size: stringOrNumberPropType,
	/** Type of icon. */
	// FIXME - export from scss is empty for jest tests
	// type: PropTypes.oneOf(types).isRequired,
	type: PropTypes.string.isRequired,
	...Text.propTypes,
};

Icon.displayName = 'Icon';

export default Icon;
