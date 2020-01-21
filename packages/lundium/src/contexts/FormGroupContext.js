import { createContext } from 'react';
import { noop } from 'ramda-extension';

const FormGroupContext = createContext({
	onBlur: noop,
	onFocus: noop,
	onFilled: noop,
	onEmpty: noop,
	isFilled: false,
	isFocused: false,
	hasError: false,
	hasFloatingLabel: false,
	hasLabel: false,
});

export default FormGroupContext;
