const merge = require('webpack-merge');

const baseConfig = require('./webpack/configs/base.config');
const prodConfig = require('./webpack/configs/prod.config');
const devConfig = require('./webpack/configs/dev.config');

module.exports = mode => {
	process.env.BABEL_ENV = mode;

	return merge(baseConfig, mode === 'production' ? prodConfig : devConfig);
};
