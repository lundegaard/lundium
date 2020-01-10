const autoprefixer = require('autoprefixer');
const postcssLogical = require('postcss-logical');
const postcssDirPseudoClass = require('postcss-dir-pseudo-class');

module.exports = {
	plugins: [
		autoprefixer(),
		postcssLogical({ preserve: true, dir: 'ltr' }),
		postcssDirPseudoClass({ preserve: true, dir: 'ltr' }),
	],
};
