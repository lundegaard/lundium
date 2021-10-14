const babelLoader = () => ({
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					'@babel/preset-env',
					{
						modules: false,
						useBuiltIns: 'entry',
					},
				],
			],
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				[
					'@babel/plugin-transform-runtime',
					{
						regenerator: true,
					},
				],
			],
		},
	},
});

module.exports = {
	babelLoader,
};
