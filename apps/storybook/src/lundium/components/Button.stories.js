import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { BUTTON_TYPES, Button } from 'lundium';

export default { title: 'Form/Button', component: Button };

export const withClickListener = () => (
	<Button onClick={action('click')} disabled={boolean('disabled', false)}>
		{text('Text', 'Click me')}
	</Button>
);

export const primary = () => (
	<Button
		kind={select('kind', BUTTON_TYPES, 'primary')}
		disabled={boolean('disabled', false)}
	>
		{text('Text', 'Click me')}
	</Button>
);

export const small = () => (
	<Button
		kind={select('kind', BUTTON_TYPES, 'primary')}
		size="sm"
		disabled={boolean('disabled', false)}
	>
		{text('Text', 'Click me')}
	</Button>
);
