module.exports = api => {
	api.cache.using(() => process.env.NODE_ENV);

	const presets = [
		[
			'babel-preset-react-union',
			{
				test: process.env.NODE_ENV === 'test',
				loose: true,
				library: false,
				universal: false,
			},
		],
	];

	return {
		presets,
		plugins: [
			[
				'babel-plugin-ramda',
				{
					// NOTE: Solves issue with jest ramda imports
					useES: !api.env('test'),
				},
			],
			'react-docgen',
		],
	};
};
