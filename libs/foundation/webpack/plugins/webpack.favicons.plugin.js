const settings = require('../webpack.settings');

const faviconPlugin = () => ({
	logo: `${settings.paths.src.assets}/favicon/favicon.png`,
	icons: {
		appleStartup: false,
		firefox: false,
	},
	prefix: 'favicons/',
});

module.exports = {
	faviconPlugin,
};
