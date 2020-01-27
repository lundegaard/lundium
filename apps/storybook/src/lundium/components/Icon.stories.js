import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Box, Icon } from 'lundium';
import { theme } from '@lundium/theme-basic';

const styles = {
	root: { textAlign: 'center', component: Icon },
};

export default { title: 'Icon' };

export const basic = () => (
	<div style={styles.root}>
		{theme.iconTypes.map(type => (
			<Box key={type}>
				<Icon type={type} size={select('size', theme.iconSizes)} />
				<br />
				<strong>{type}</strong>
			</Box>
		))}
	</div>
);
