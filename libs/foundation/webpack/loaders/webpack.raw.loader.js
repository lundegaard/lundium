const rawLoader = () => {
	return {
		test: /\.html$/,
		use: {
			loader: 'html-loader',
			options: {
				interpolate: true,
			},
		},
	};
};

module.exports = {
	rawLoader: rawLoader,
};
