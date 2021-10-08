const path = require('path');
const settings = require('../webpack.settings.js');

const stylelintPlugin = () => {
	return {
		configFile: path.resolve(__dirname, '../../../../.stylelintrc.json'),
		context: settings.paths.src.scss,
		ignoreDisables: false,
		// failOnError: true,
		syntax: 'scss',
		files: `**/*.s?(a|c)ss`,
		ignorePath: `01_vendors/**/*.s?(a|c)ss`,
	};
};

module.exports = {
	stylelintPlugin: stylelintPlugin,
};
