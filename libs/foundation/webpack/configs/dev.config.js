const path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

const settings = require('../webpack.settings');
const css = require('../loaders/webpack.css.loader');
const image = require('../loaders/webpack.image.loader');
const raw = require('../loaders/webpack.raw.loader');
const html = require('../plugins/webpack.html.plugin');
const stylelint = require('../plugins/webpack.stylelint.plugin');

const devserver = require('./devserver.config');

const devConfig = {
	output: {
		filename: path.join('./assets/js', '[name].js?[hash]'),
		publicPath: `${settings.devServerConfig.public}/`,
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
