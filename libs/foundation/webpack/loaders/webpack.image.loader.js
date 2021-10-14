const imageLoader = (isProduction = false) => {
	let devConfig = {
		test: /\.(png|jpe?g|gif|svg|webp)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]?[hash]',
					// Remove after fix https://github.com/webpack-contrib/html-loader/issues/203
					esModule: false,
					publicPath: '/',
				},
			},
		],
	};

	const prodLoader = {
		loader: 'image-webpack-loader',
		options: {
			mozjpeg: {
				quality: 80,
			},
			optipng: {
				enabled: false,
			},
			pngquant: {
				quality: [0.8, 0.90],
				speed: 6,
			},
			gifsicle: {
				interlaced: false,
			},
			webp: {
				enabled: true,
				quality: 90,
			},
		},
	};

	return isProduction ?
		(devConfig = { ...devConfig, use: [...devConfig.use, prodLoader] }) :
		devConfig;
};

module.exports = {
	imageLoader,
};
