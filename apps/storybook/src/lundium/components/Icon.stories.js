import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { Box, Icon } from 'lundium';

const styles = {
	root: { textAlign: 'center' },
};

export default { title: 'Icon', decorators: [withKnobs] };

// TODO Add basic theme and import set of icons
export const basic = () => (
	<div style={styles.root}>
		{['add'].map(type => (
			<Box key={type}>
				<Icon type={type} size={select('size', [8, 16, 24])} />
				<br />
				<strong>{type}</strong>
			</Box>
		))}
	</div>
);
