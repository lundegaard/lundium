import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Grid from '../Grid';
import Text from '../Text';

const SlideModalHeader = ({
	children,
	className,
	title,
	subtitle,
	details,
	...otherProps
}) => (
	<Grid
		justifyContent="between"
		alignItems="end"
		flexWrap
		className={cx('slide-modal__header', className)}
		{...otherProps}
	>
		<Text className="slide-modal__title">{title}</Text>
		{subtitle && <Text className="slide-modal__sub-title">{subtitle}</Text>}
		{details && (
			<Grid
				flex
				flexWrap
				flexDirection={['column', 'row']}
				className="slide-modal__details"
			>
				{details}
			</Grid>
		)}
		{children}
	</Grid>
);

SlideModalHeader.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	details: PropTypes.node,
	subtitle: PropTypes.node,
	title: PropTypes.node.isRequired,
};

export default SlideModalHeader;
