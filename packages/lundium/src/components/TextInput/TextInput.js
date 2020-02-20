import React, { forwardRef } from 'react';

import TextInputControl from '../TextInputControl';
import FormField from '../FormField';

const TextInput = forwardRef((props, ref) => (
	<FormField ref={ref} control={TextInputControl} kind="text-input" autoComplete="off" {...props} />
));

TextInput.displayName = 'forwardRef(TextInput)';

export default TextInput;
