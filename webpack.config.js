const path = require('path');

const glob = require('glob');

const packagePath = process.cwd();
const lundiumPackagePath = './packages/lundium';
const relativeSrcPath = `${lundiumPackagePath}/src/components`;
const srcPath = path.join(packagePath, relativeSrcPath);

const directoryPackages = glob.sync('**/index.js', { cwd: srcPath }).map(path.dirname);

const entries = directoryPackages.reduce(
	(entries, newEntry) => ({
		...entries,
		[newEntry]: `${relativeSrcPath}/${newEntry}/index.js`,
	}),
	{}
);

module.exports = {
	mode: 'production',
	entry: {
		index: `${lundiumPackagePath}/src/index.js`,
		...entries,
	},
	output: {
		filename: '[name].js',
		path: path.resolve(`${lundiumPackagePath}/dist`),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	externals: ['react', 'react-dom'],
};
