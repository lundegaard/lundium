import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import sortStories from './util/sortStories';

addParameters({
	options: {
		storySort: sortStories({ Introduction: ['Welcome'] }),
		showRoots: true,
	},
});

addDecorator(story => (
	<div style={{ display: 'flex', justifyContent: 'center' }}>
		{story()}
	</div>
));
