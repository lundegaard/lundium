import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import FormControl from '../FormControl';

const TextareaControl = ({ children, className, type = 'text', ...rest }) => (
	<FormControl className={cx(className)} component="textarea" type={type} {...rest}>
		{children}
	</FormControl>
);

TextareaControl.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** HTML type attribute of the input. */
	type: PropTypes.string,
};

export default TextareaControl;
