// Configure Font loader
const fontLoader = () => {
	return {
		test: /\.(ttf|eot|woff2?)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'assets/fonts/[name].[ext]?[hash]',
					publicPath: '/'
				},
			},
		],
	};
};

module.exports = {
	fontLoader: fontLoader,
};