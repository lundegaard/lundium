const path = require('path');

const settings = require('../webpack.settings');

const stylelintPlugin = () => ({
	configFile: path.resolve(__dirname, '../../../../.stylelintrc.json'),
	context: settings.paths.src.scss,
	ignoreDisables: false,
	syntax: 'scss',
	files: '**/*.s?(a|c)ss',
	ignorePath: '01_vendors/**/*.s?(a|c)ss',
});

module.exports = {
	stylelintPlugin,
};
