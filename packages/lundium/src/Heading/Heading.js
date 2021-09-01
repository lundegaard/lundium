import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Text from '../Text';

const Heading = ({ as = 'h2', children, className, ...rest }) => (
	<Text {...rest} className={cx(className)} as={as}>
		{children}
	</Text>
);

Heading.propTypes = {
	/** Tag used for root component */
	as: PropTypes.any,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	...Text.propTypes,
};

export default Heading;
