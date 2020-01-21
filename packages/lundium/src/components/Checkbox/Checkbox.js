import React from 'react';

import CheckboxControl from '../CheckboxControl';
import FormField from '../FormField';

const Checkbox = props => <FormField control={CheckboxControl} kind="checkbox" {...props} />;

Checkbox.propTypes = FormField.propTypes;

export default Checkbox;
