import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';

addParameters({
	options: {
		theme: create({
			base: 'light',
			brandTitle: 'Components',
			brandUrl: '/',
		}),
		panelPosition: 'right',
		isFullscreen: false,
		isToolshown: true,
	},
});

addDecorator(withInfo);

addDecorator(withKnobs);

const req = require.context('../src/lundium/components', true, /\.stories\.js$/);
const loadStories = () => {
	req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
