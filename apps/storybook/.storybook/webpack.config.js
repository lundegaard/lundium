const path = require('path');
const { lstatSync, readdirSync } = require('fs');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
	readdirSync(source)
		.map(name => path.join(source, name))
		.filter(isDirectory);

module.exports = async ({ config, mode }) => {
	const apps = getDirectories(path.resolve(__dirname, '../../'));
	const libs = getDirectories(path.resolve(__dirname, '../../../libs'));

	config.module.rules = config.module.rules.map(rule => {
		rule.include = [...(rule.include || []), ...apps, ...libs];

		if (rule.use && rule.use[0] && /babel/.test(rule.use[0].loader)) {
			rule.use[0].options = {
				root: path.resolve('..'),
				rootMode: 'upward',
			};
		}

		return rule;
	});
	// /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
	config.module.rules = config.module.rules.filter(
		rule =>
			String(rule.test) !==
			String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
	);

	config.module.rules = [
		...config.module.rules,
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
	];

	return config;
};
