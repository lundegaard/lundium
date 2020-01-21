import React from 'react';
import PropTypes from 'prop-types';

import CheckboxControl from '../CheckboxControl';
import FormField from '../FormField';

const Toggle = ({ checked, checkedLabel, uncheckedLabel, ...rest }) => (
	<FormField
		checked={checked}
		control={CheckboxControl}
		label={checked ? checkedLabel : uncheckedLabel}
		kind="toggle"
		{...rest}
	/>
);

Toggle.propTypes = {
	checked: PropTypes.bool,
	checkedLabel: PropTypes.node,
	uncheckedLabel: PropTypes.node,
	...FormField.propTypes,
};

export default Toggle;
