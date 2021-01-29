import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import { stringOrNumberPropType } from '../../utils/types';
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
	...Text.propTypes,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** Color of icon. */
	// FIXME - export from scss is empty for jest tests
	// color: PropTypes.oneOf(colors),
	color: PropTypes.string,
	/** Size of icon. */
	size: stringOrNumberPropType,
	/** Type of icon. */
	type: PropTypes.string.isRequired,
};

Icon.displayName = 'Icon';

export default Icon;
