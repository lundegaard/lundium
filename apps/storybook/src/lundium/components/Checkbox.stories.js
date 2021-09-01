import React from 'react';
import { Checkbox } from 'lundium';

export default {
	title: 'Form/Checkbox',
	component: Checkbox,
};

export const basic = () => (
	<Checkbox label="Generic Checkbox" name="generic-checkbox" />
);
