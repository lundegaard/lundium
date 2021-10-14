const path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const settings = require('../webpack.settings');
const css = require('../loaders/webpack.css.loader');
const image = require('../loaders/webpack.image.loader');
const raw = require('../loaders/webpack.raw.loader');
const banner = require('../plugins/webpack.banner.plugin');
const html = require('../plugins/webpack.html.plugin');

const prodConfig = {
	output: {
		filename: path.join('./assets/js/', '[name].js?[hash]'),
	},
	mode: 'production',
	devtool: 'source-map',
	/* optimization: {
		splitChunks: {
			cacheGroups: {
				frontStyles: {
					name: 'frontStyles',
					test: /\.(css|sass|scss)$/,
					chunks: 'all',
				},
			},
		},
	}, */
	module: {
		rules: [css.cssLoader(true), image.imageLoader(true), raw.rawLoader()],
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.BannerPlugin(banner.bannerPlugin()),
		new CleanWebpackPlugin(),
		new FixStyleOnlyEntriesPlugin({ extensions: ['scss', 'css'] }),
		new MiniCssExtractPlugin({
			filename: path.join('./assets/css/', '[name].css?[hash]'),
		}),
		// Remove redundant files after production build
		new RemovePlugin({
			after: {
				root: settings.paths.dist.base,
				include: [
					path.join(settings.paths.dist.css, 'js.css'),
					path.join(`${settings.paths.dist.css}js.css.map`),
					path.join(`${settings.paths.dist.js}front.js`),
					path.join(`${settings.paths.dist.js}front.js.map`),
					path.join(`${settings.paths.dist.js}print.js`),
					path.join(`${settings.paths.dist.js}print.js.map`),
				],
				trash: true,
			},
		}),
	].concat(html.htmlPlugins(), new HtmlWebpackExcludeAssetsPlugin()),
};

module.exports = prodConfig;
