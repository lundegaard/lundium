module.exports = api => {
	api.cache.using(() => process.env.NODE_ENV);

	const presets = [
		[
			'babel-preset-react-union',
			{ test: process.env.NODE_ENV === 'test', loose: true, library: false, universal: false },
		],
	];

	return api.env('test')
		? {
				presets,
		  }
		: {
				presets,
				// NOTE: Slightly increases bundle sizes, but with increasing number of components it can change
				plugins: [
					[
						'babel-plugin-ramda',
						{
							useES: true,
						},
					],
				],
		  };
};
