import React from 'react';
import { FormField } from 'lundium';

export default { title: 'FormField' };

const DummyInputText = () => <input type="text" />;
const DummyIcon = () => <i className="icon" />;

export const basic = () => (
	<FormField name="testFormField" control={DummyInputText} suffix={<DummyIcon />} />
);
