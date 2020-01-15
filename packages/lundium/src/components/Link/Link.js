import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const Link = forwardRef(({ as = 'a', ...rest }, ref) => <Box as={as} {...rest} ref={ref} />);

Link.displayName = 'forwardRef(Link)';

Link.propTypes = {
	/** Tag used for root component */
	as: PropTypes.any,
	/** Children nodes - content of link */
	children: PropTypes.node,
	...Box.propTypes,
};

export default Link;
