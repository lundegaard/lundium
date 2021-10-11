const path = require('path');

const packageRoot = './';

const targets = {
	commonjs: 'commonjs',
	umd: 'umd',
	module: 'module',
};

const outputPathsByTarget = {
	[targets.commonjs]: 'lib',
	[targets.umd]: 'dist',
	[targets.module]: 'es',
};

const libraryTargetsByTarget = {
	[targets.commonjs]: 'commonjs2',
	[targets.umd]: 'umd',
	[targets.module]: 'module',
};

module.exports = Object.values(targets).map(target => ({
	mode: 'production',
	entry: path.resolve(packageRoot, 'src/index.js'),
	output: {
		path: path.resolve(packageRoot, outputPathsByTarget[target]),
		filename: `lundium.${target}.js`,
		library: {
			type: libraryTargetsByTarget[target],
			umdNamedDefine: true,
		},
		environment: {
			module: true,
		},
	},
	externals: {
		react: 'react',
		'prop-types': 'prop-types',
	},
	experiments: {
		outputModule: libraryTargetsByTarget[target] === 'module',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
}));
