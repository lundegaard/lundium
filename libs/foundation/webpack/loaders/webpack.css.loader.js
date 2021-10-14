const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const cssLoader = (isProduction = false) => ({
	test: /\.(scss|css)$/,
	use: [
		MiniCssExtractPlugin.loader,
		{
			loader: 'css-loader',
			options: {
				importLoaders: 3,
				sourceMap: !isProduction,
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				sourceMap: !isProduction,
				plugins: () => [autoprefixer()],
			},
		},
		{
			loader: 'icon-font-loader',
			options: {
				sourceMap: !isProduction,
			},
		},
		{
			loader: 'sass-loader',
			options: {
				sourceMap: !isProduction,
				sassOptions: {
					outputStyle: 'compressed',
				},
			},
		},
	],
});

module.exports = {
	cssLoader,
};
