import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Box from '../Box';
import FormGroupContext from '../../contexts/FormGroupContext';

const FormGroup = ({
	children,
	className,
	hasError,
	hasFloatingLabel,
	hasLabel,
	hasWarning,
	kind,
	legendText,
	isInline,
	...rest
}) => {
	const [isFilled, setIsFilled] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const contextValue = {
		onFocus: () => setIsFocused(true),
		onBlur: () => setIsFocused(false),
		onEmpty: () => setIsFilled(false),
		onFilled: () => setIsFilled(true),
		isFilled,
		isFocused,
		hasError,
		hasFloatingLabel,
		hasLabel,
	};

	return (
		<FormGroupContext.Provider value={contextValue}>
			<Box
				{...rest}
				className={cx(
					'form-group',
					kind && `form-group--${kind}`,
					legendText && 'with-legend',
					isInline && 'inline',
					{
						'floating-label': hasFloatingLabel,
						'has-error': hasError,
						'has-warning': hasWarning && !hasError,
						'has-success': !hasWarning && !hasError,
						'is-filled': isFilled,
						'is-focused': isFocused,
						'without-label': !hasLabel,
					},
					className
				)}
			>
				{children}
			</Box>
		</FormGroupContext.Provider>
	);
};

FormGroup.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node.isRequired,
	/** Class name for root. */
	className: PropTypes.string,
	/** If `true`, form field is in error state. `hasWarning` is ignored */
	hasError: PropTypes.bool,
	/** If `true`, the form group includes a floating label. */
	hasFloatingLabel: PropTypes.bool,
	/** If `true`, the form group includes a label. */
	hasLabel: PropTypes.bool,
	/** If `true`, form field is in warning state. If `hasError` is set, property is ignored. */
	hasWarning: PropTypes.bool,
	/** If `true`, label is absolutely positioned on the right side of the form group. */
	isInline: PropTypes.bool,
	/** ClassName used to style nested elements (labels and form controls). */
	kind: PropTypes.string,
	/** Legend inside text input. */
	legendText: PropTypes.string,
	...Box.propTypes,
};

export default FormGroup;
