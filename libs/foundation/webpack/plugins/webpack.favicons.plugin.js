const settings = require('../webpack.settings.js');

const faviconPlugin = () => {
	return {
		logo: `${settings.paths.src.assets}/favicon/favicon.png`,
		icons: {
			appleStartup: false,
			firefox: false,
		},
		prefix: 'favicons/',
	};
};

module.exports = {
	faviconPlugin: faviconPlugin,
};
