const rawLoader = () => ({
	test: /\.html$/,
	use: {
		loader: 'html-loader',
		options: {
			interpolate: true,
		},
	},
});

module.exports = {
	rawLoader,
};
