import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { Tab } from 'lundium';

export default { title: 'Tab', component: Tab };

export const basic = () => (
	<Tab
		label="General tab component"
		isActive={boolean('isActive', false)}
		isDisabled={boolean('isDisabled', false)}
		isDone={boolean('isDone', false)}
		isInvalid={boolean('isInvalid', false)}
	/>
);
