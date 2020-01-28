import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Box from '../Box';

const SlideModalContent = ({ className, ...otherProps }) => (
	<Box className={cx('slide-modal__content', className)} {...otherProps} />
);

SlideModalContent.propTypes = {
	/** Class name for root. */
	className: PropTypes.string,
};

export default SlideModalContent;
