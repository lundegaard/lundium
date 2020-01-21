import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Text from '../Text';

const FormText = ({ children, className, hasError, hasWarning, ...rest }) => (
	<Text
		className={cx(className, {
			'invalid-feedback': hasError,
			'form-text': hasWarning,
		})}
		{...rest}
	>
		{children}
	</Text>
);

FormText.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** If `true`, the form field is in error state. */
	hasError: PropTypes.bool,
	/** If `true`, the form field is in warning state. */
	hasWarning: PropTypes.bool,
	...Text.propTypes,
};

export default FormText;
