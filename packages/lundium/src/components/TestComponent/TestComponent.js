import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

const TestComponent = ({ children, className, ...otherProps }) => (
	<div className={cx(className)} {...otherProps}>
		{children}
	</div>
);

TestComponent.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
};

export default TestComponent;
