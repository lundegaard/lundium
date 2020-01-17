import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { Box, Icon } from 'lundium';
import { theme } from '@lundium/theme-basic';

const styles = {
	root: { textAlign: 'center' },
};

export default { title: 'Icon', decorators: [withKnobs] };

// TODO Add basic theme and import set of icons
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
