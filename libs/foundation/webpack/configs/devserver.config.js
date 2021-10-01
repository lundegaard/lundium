const settings = require('../webpack.settings.js');

// Configure the webpack-dev-server
const devServerConfig = () => {
	return {
		public: '/',
		contentBase: settings.paths.dist.base,
		host: settings.devServerConfig.host,
		port: settings.devServerConfig.port,
		// https: !!parseInt(settings.devServerConfig.https()),
		disableHostCheck: true,
		// quiet: true,
		hot: true,
		stats: 'normal',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	};
};

module.exports = devServerConfig;
