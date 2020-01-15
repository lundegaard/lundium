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
				// FIXME: https://github.com/ant-design/babel-plugin-import
				// plugins: ['babel-plugin-ramda'],
		  };
};
