const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = require('../webpack.settings');

// Configure Html webpack
const htmlPlugins = () => {
	const templateFiles = fs.readdirSync(settings.paths.src.pages);

	return templateFiles.map(item => {
		// Split names and extension
		const parts = item.split('.');
		const name = parts[0];

		// Create new HTMLWebpackPlugin with options
		return new HtmlWebpackPlugin({
			excludeAssets: [/front.js/, /print.js/, /js.css/],
			filename: `${name}.html`,
			template: path.join(settings.paths.src.pages, `${name}.html`),
			inject: true,
		});
	});
};

module.exports = {
	htmlPlugins,
};
