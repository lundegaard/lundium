const path = require('path');
const { packagesDir, storybookDir } = require('../utils');

module.exports = {
	description: 'React UI Component',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'Name of the component',
		},
		{
			type: 'input',
			name: 'userPackage',
			message: 'name of the package for components in packages folder',
			default: 'lundium',
		},
		{
			type: 'expand',
			name: 'addStory',
			message: 'Create story for component?',
			default: true,
			choices: [
				{
					key: 'y',
					name: 'Yes',
					value: true,
				},
				{
					key: 'n',
					name: 'No',
					value: false,
				},
			],
		},
	],
	actions: ({ userPackage, addStory, ...rest }) => {
		const packageName = userPackage || 'lundium';

		const srcDir = packagesDir + '/' + packageName;
		const data = { packageName };
		return [
			{
				type: 'add',
				data,
				path:
					srcDir + '/src/components/{{pascalCase name}}/{{pascalCase name}}.js',
				templateFile: path.join(__dirname, './statelessComponent.js.hbs'),
			},
			{
				type: 'add',
				data,
				path:
					srcDir +
					'/src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
				templateFile: path.join(__dirname, './test.js.hbs'),
			},
			{
				type: 'add',
				data,
				path: srcDir + '/src/components/{{pascalCase name}}/index.js',
				templateFile: path.join(__dirname, './index.js.hbs'),
			},
			{
				type: 'append',
				data,
				path: srcDir + '/src/index.js',
				templateFile: path.join(__dirname, './root.js.hbs'),
				separator: '',
				pattern: /\n$/gi,
			},
			...(addStory
				? [
						{
							type: 'add',
							data,
							path:
								storybookDir +
								'/src/lundium/components/{{pascalCase name}}.stories.js',
							templateFile: path.join(__dirname, './stories.js.hbs'),
						},
				  ]
				: []),
		];
	},
};
