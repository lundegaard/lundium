const path = require('path');

module.exports = {
	entry: {
		components: './packages/lundium/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s?css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[local]_[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: 'postcss.config.js',
							},
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true },
					},
				],
			},
		],
	},
	externals: ['react'],
	devtool: 'cheap-module-eval-source-map',
};
