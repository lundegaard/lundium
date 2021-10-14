const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const IconFontPlugin = require('icon-font-loader').Plugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const babel = require('../loaders/webpack.babel.loader');
const font = require('../loaders/webpack.font.loader');
const settings = require('../webpack.settings');
const notifier = require('../plugins/webpack.notifier.plugin');
const favicon = require('../plugins/webpack.favicons.plugin');
const iconfont = require('../plugins/webpack.iconfont.plugin');
const pkg = require('../../package.json');

const baseConfig = {
	name: pkg.name,
	entry: {
		js: path.join(settings.paths.src.js, 'main.js'),
		front: path.join(settings.paths.src.scss, 'front.scss'),
		print: path.join(settings.paths.src.scss, 'print.scss'),
	},
	output: {
		path: settings.paths.dist.base,
	},
	resolve: {
		extensions: ['.js', '.scss', '.css'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			assets: settings.paths.src.assets,
		},
	},
	module: {
		rules: [babel.babelLoader(), font.fontLoader()],
	},
	plugins: [
		new WebpackNotifierPlugin(notifier.notifierPlugin()),
		new FaviconsWebpackPlugin(favicon.faviconPlugin()),
		new IconFontPlugin(iconfont.iconfontPlugin()),
		new CopyPlugin({
			patterns: [
				{
					from: 'src/assets/files/',
					to: 'assets/files/',
				},
			],
		}),
	],
};

module.exports = baseConfig;
