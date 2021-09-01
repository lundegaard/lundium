import React from 'react';
import { cx } from 'ramda-extension';
import PropTypes from 'prop-types';

import Box from '../Box';

const Backdrop = ({ isVisible, className, ...rest }) => (
	<Box
		px={[0, 2]}
		py={[0, 1]}
		className={cx('backdrop', { ['show']: isVisible }, className)}
		{...rest}
	/>
);

Backdrop.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	/** Is backdrop visible */
	isVisible: PropTypes.bool,
	...Box.propTypes,
};

export default Backdrop;
