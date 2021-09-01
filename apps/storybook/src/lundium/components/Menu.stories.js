import React from 'react';
import { Menu, MenuItem } from 'lundium';

export default {
	title: 'Others/Menu',
	component: Menu,
	subcomponents: { MenuItem },
};

export const basic = () => (
	<Menu>
		<MenuItem>First item</MenuItem>
	</Menu>
);
