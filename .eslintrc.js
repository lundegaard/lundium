module.exports = {
	root: true,
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['eslint-config-lundegaard'],
	rules: {
		'import/order': ['error', { 'newlines-between': 'always' }],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		// for qraphql queries
		'react/prop-types': ['error', { ignore: ['data'] }],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'apps/**/*.config.js',
					'apps/**/*.test.js',
					'apps/**/.storybook/*',
					'apps/**/*.stories.js',
					'libs/**/*.config.js',
					'libs/**/*.test.js',
					'*.config.js',
				],
			},
		],
	},
};
