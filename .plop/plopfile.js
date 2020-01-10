const path = require('path');
const uiComponent = require('./uiComponent');

module.exports = function(plop) {
	plop.setGenerator('ui-component', uiComponent);
};
