import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const InlineText = ({ as = 'span', ...props }) => <Text {...props} as={as} />;

InlineText.propTypes = {
	/** Tag used for root component */
	as: PropTypes.any,
	...Text.propTypes,
};

export default InlineText;
