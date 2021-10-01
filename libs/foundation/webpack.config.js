// node modules
const merge = require('webpack-merge');

// config files
const baseConfig = require('./webpack/configs/base.config.js');
const prodConfig = require('./webpack/configs/prod.config.js');
const devConfig = require('./webpack/configs/dev.config.js');

// Production module exports
module.exports = mode => {
	process.env.BABEL_ENV = mode;

	return merge(baseConfig, mode === 'production' ? prodConfig : devConfig);
};
