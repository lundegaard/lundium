const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const packagesDir = path.resolve(rootDir, 'packages');
const storybookDir = path.resolve(rootDir, 'apps', 'storybook');

module.exports = {
	rootDir,
	packagesDir,
	storybookDir,
};
