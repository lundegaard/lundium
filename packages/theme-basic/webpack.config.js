const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: 'theme.js',
		path: path.resolve('./dist'),
		libraryTarget: 'umd',
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin([
			{
				from: 'src/scss',
				to: 'scss',
			},
		]),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					rootMode: 'upward',
				},
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /node_modules/,
				loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.woff(2)?(\?[a-z0-9]+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			},
			{
				test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
				loader: 'file-loader',
			},
		],
	},
	// In case of troubleshooting: https://github.com/lerna/lerna/issues/1049
	externals: ['react', 'react-dom', 'ramda', 'ramda-extension'],
};
