const moment = require('moment');
const settings = require('../webpack.settings.js');
const pkg = require('../../package.json');

// Configure file banner
const bannerPlugin = () => {
	return {
		banner: [
			'/*!',
			' * ' + settings.name,
			' * @author ' + pkg.author,
			' * @build  ' + moment().format('llll') + 'GMT+1',
			' * Copyright (c) ' + moment().format('YYYY') + ' ' + settings.copyright,
			' *',
			' */',
		].join('\n'),
		raw: true,
	};
};

module.exports = {
	bannerPlugin: bannerPlugin,
};
