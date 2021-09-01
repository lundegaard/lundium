import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Box from '../Box';

const SlideModalFooter = ({ className, ...otherProps }) => (
	<Box className={cx('slide-modal__footer', className)} {...otherProps} />
);

SlideModalFooter.propTypes = {
	/** Class name for root. */
	className: PropTypes.string,
};

export default SlideModalFooter;
