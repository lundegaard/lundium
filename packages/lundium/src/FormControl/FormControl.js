import React, { createRef, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cx, flipIncludes, isNotNil, noop } from 'ramda-extension';
import invariant from 'invariant';

import FormGroupContext from '../contexts/FormGroupContext';
import isFilled from '../utils/isFilled';

const isTypeCheckable = flipIncludes(['radio', 'checkbox']);

const FormControl = ({
	component: Component,
	inputRef = createRef(),
	onBlur = noop,
	onFocus = noop,
	checked,
	children,
	className,
	name,
	size,
	type,
	value,
	...rest
}) => {
	const {
		onFilled,
		onEmpty,
		hasError,
		hasFloatingLabel,
		onFocus: onFocusContext,
		onBlur: onBlurContext,
	} = useContext(FormGroupContext);

	useEffect(() => {
		if (isFilled(value)) {
			onFilled();
		} else {
			onEmpty();
		}
	}, [onEmpty, onFilled, value]);

	const handleFocus = e => {
		onFocusContext();
		return onFocus(e);
	};

	const handleBlur = e => {
		onBlurContext();
		return onBlur(e);
	};

	const isCheckable = isTypeCheckable || isNotNil(checked);

	invariant(
		isCheckable || !hasFloatingLabel || value !== undefined,
		`FormControl with name "${name}" must be a controlled component. ` +
			'This is necessary for floating labels to function properly.',
	);

	return (
		<Component
			checked={checked}
			className={cx(className, 'form-control', size && `form-control-${size}`, {
				'is-invalid': hasError,
			})}
			name={name}
			type={type}
			value={value}
			ref={inputRef}
			{...rest}
			onBlur={handleBlur}
			onFocus={handleFocus}
		>
			{children}
		</Component>
	);
};

FormControl.propTypes = {
	/** Checked attribute of the form control. */
	checked: PropTypes.bool,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** Component used as form control. */
	component: PropTypes.elementType.isRequired,
	/** This prop can be used to pass a ref callback to the input element. */
	inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	/** Name of the form control. */
	name: PropTypes.string.isRequired,
	/** Function to call when the form control emits a `blur` event. */
	onBlur: PropTypes.func,
	/** Function to call when the form control emits a `focus` event. */
	onFocus: PropTypes.func,
	/** Size of the form control. */
	size: PropTypes.oneOf(['sm', 'lg']),
	/** Type attribute of the form control. */
	type: PropTypes.string,
	/** Value of the form control. */
	value: PropTypes.any,
};

export default FormControl;
