const notifierPlugin = () => {
	return {
		title: 'Webpack',
		excludeWarnings: true,
		alwaysNotify: true,
	};
};

module.exports = {
	notifierPlugin: notifierPlugin,
};
