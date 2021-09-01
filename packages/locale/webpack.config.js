const path = require('path');

const glob = require('glob');

const filePaths = glob
	.sync('**/*.js', { cwd: './src' })
	.map(fileName => fileName.replace('.js', ''));

const entries = filePaths.reduce(
	(entries, newEntry) => ({
		...entries,
		[newEntry]: `./src/${newEntry}.js`,
	}),
	{},
);

module.exports = {
	mode: 'production',
	entry: entries,
	output: {
		filename: '[name].js',
		path: path.resolve('./dist'),
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: { rootMode: 'upward' },
			},
		],
	},
	// In case of troubleshooting: https://github.com/lerna/lerna/issues/1049
	externals: ['react', 'react-dom'],
};
