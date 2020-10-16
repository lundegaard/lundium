import React from 'react';
import { Link } from 'lundium';
import { boolean } from '@storybook/addon-knobs';

export default { title: 'Link', component: Link };

export const basic = () => (
	<Link href="http://github.com/tommmyy/ramda-extension" disabled={boolean('disabled', false)}>
		Ramda Extension
	</Link>
);
