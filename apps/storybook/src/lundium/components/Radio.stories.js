import React from 'react';
import { Box, Radio } from 'lundium';
import { noop } from 'ramda-extension';

export default { title: 'Form/Radio', component: Radio };

export const basic = () => (
	<Box>
		<Radio label="Generic Radio unchecked" onChange={noop} name="generic-radio" />
		<Radio checked label="Generic Radio" onChange={noop} name="generic-radio-2" />
	</Box>
);
