module.exports = {
	stories: ['../src/**/*.stories.(js|mdx)'],
	addons: [
		// Issue with propTypes load - https://github.com/storybookjs/storybook/issues/8435
		'@storybook/addon-docs',
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-storysource',
	],
};
