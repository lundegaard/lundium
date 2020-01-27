import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import { useTheme } from '../ThemeProvider';

const Label = ({ children, className, isHidden, disabled, readOnly, ...rest }) => {
	const theme = useTheme();

	return (
		<label
			{...rest}
			className={cx(
				'control-label',
				{
					'control-label--dir-rtl': theme.isRTL,
					['sr-only']: isHidden,
					'control-label--readonly': readOnly,
					'control-label--disabled': disabled,
				},
				className
			)}
		>
			{children}
		</label>
	);
};

Label.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	disabled: PropTypes.bool,
	/** Whether the label should be hidden on regular screens. */
	isHidden: PropTypes.bool,
	readOnly: PropTypes.bool,
};

export default Label;
