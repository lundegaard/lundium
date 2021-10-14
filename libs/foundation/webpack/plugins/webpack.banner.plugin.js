const moment = require('moment');

const settings = require('../webpack.settings');
const pkg = require('../../package.json');

const bannerPlugin = () => {
	const formatL = moment().format('llll');
	const formatY = moment().format('YYYY');

	return {
		banner: [
			'/*!',
			` * ${settings.name}`,
			` * @author ${pkg.author}`,
			` * @build ${formatL}GMT+1`,
			` * Copyright (c) ${formatY} ${settings.copyright}`,
			' *',
			' */',
		].join('\n'),
		raw: true,
	};
};

module.exports = {
	bannerPlugin,
};
