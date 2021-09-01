import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import FormControl from '../FormControl';

const TextInputControl = forwardRef(
	({ children, className, type = 'text', ...rest }, ref) => (
		<FormControl
			className={cx(className)}
			component="input"
			type={type}
			ref={ref}
			{...rest}
		>
			{children}
		</FormControl>
	),
);

TextInputControl.displayName = 'forwardRef(TextInputControl)';

TextInputControl.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** HTML type attribute of the input. */
	type: PropTypes.string,
};

export default TextInputControl;
