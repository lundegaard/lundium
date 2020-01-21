import React from 'react';

import RadioControl from '../RadioControl';
import FormField from '../FormField';

const Radio = props => <FormField control={RadioControl} kind="radio" {...props} />;

Radio.propTypes = FormField.propTypes;

export default Radio;
