const path = require('path');
const webpack = require('webpack');

const devserver = require('./devserver.config.js');
const settings = require('../webpack.settings.js');

const css = require('../loaders/webpack.css.loader.js');
const image = require('../loaders/webpack.image.loader.js');
const raw = require('../loaders/webpack.raw.loader.js');

const html = require('../plugins/webpack.html.plugin.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylelint = require('../plugins/webpack.stylelint.plugin.js');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require("html-webpack-exclude-assets-plugin");

const devConfig = {
	output: {
		filename: path.join('./assets/js', '[name].js?[hash]'),
		publicPath: settings.devServerConfig.public + '/',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: devserver.devServerConfig,
	module: {
		rules: [css.cssLoader(), image.imageLoader(true), raw.rawLoader()],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new StylelintWebpackPlugin(stylelint.stylelintPlugin()),
		new MiniCssExtractPlugin({
			filename: path.join('./assets/css', '[name].css?[hash]'),
		}),
	].concat(html.htmlPlugins(), new HtmlWebpackExcludeAssetsPlugin()),
};

module.exports = devConfig;
