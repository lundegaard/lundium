const iconfontPlugin = () => ({
	filename: '[name].[ext]?[hash]',
	localCSSTemplate: 'font-family: {{ fontName }} !important;speak: none;font-style: normal;font-weight: normal;font-variant: normal;text-transform: none;line-height: 1;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;',
	localCSSSelector: '.icon',
	output: './',
	publicPath: '/',
});

module.exports = {
	iconfontPlugin,
};
