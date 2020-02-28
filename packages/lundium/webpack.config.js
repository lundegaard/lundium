const path = require('path');

const glob = require('glob');
const SizePlugin = require('size-plugin');

const packagePath = process.cwd();
const relativeSrcPath = './src/components';
const srcPath = path.join(packagePath, relativeSrcPath);

const directoryPackages = glob.sync('**/index.js', { cwd: srcPath }).map(path.dirname);

const entries = directoryPackages.reduce(
	(entries, newEntry) => ({
		...entries,
		[newEntry]: `${relativeSrcPath}/${newEntry}/index.js`,
	}),
	{}
);

// TODO: use rollup
module.exports = {
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	plugins: process.env.NODE_ENV === 'analyze' ? [] : [new SizePlugin()],
	entry: {
		index: './src/index.js',
		...entries,
	},
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
