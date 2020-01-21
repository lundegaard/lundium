import React from 'react';
import { Radio } from 'lundium';
import { noop } from 'ramda-extension';

export default { title: 'Radio' };

export const basic = () => (
	<Radio checked label="Generic Radio" onChange={noop} name="generic-radio" />
);
