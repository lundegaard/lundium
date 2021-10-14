const path = require('path');

const p = x => path.resolve(__dirname, '..', x);
const pkg = require(p('./package.json'));

module.exports = {
	name: pkg.name,
	copyright: 'Lundegaard a.s.',
	paths: {
		src: {
			base: p('./src/'),
			scss: p('./src/scss/'),
			js: p('./src/js/'),
			pages: p('./src/static/pages/'),
			assets: p('./src/assets/'),
		},
		dist: {
			base: p('./public/'),
			css: './assets/css/',
			js: './assets/js/',
		},
	},
	devServerConfig: {
		public: 'http://localhost:8080',
		host: 'localhost',
		poll: false,
		port: 8080,
		https: false,
	},
};
