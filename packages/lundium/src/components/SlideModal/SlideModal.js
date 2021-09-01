import React, { useEffect } from 'react';
import { cx, noop } from 'ramda-extension';
import PropTypes from 'prop-types';

import withTransition from '../../utils/withTransition';
import stopPropagation from '../../utils/stopPropagation';
import Box from '../Box';
import Grid from '../Grid';
import Button from '../Button';
import Icon from '../Icon';
import PortalWithBackdrop from '../PortalWithBackdrop';

export const SlideModal = ({
	isVisible,
	className,
	children,
	onClose = noop,
	onOpen = noop,
	size = 'sm',
	...otherProps
}) => {
	useEffect(() => {
		if (isVisible) {
			onOpen();
		}
	}, [isVisible, onOpen]);

	return (
		<PortalWithBackdrop isVisible={isVisible} onBackdropClick={onClose}>
			<Box
				className={cx('slide-modal', `slide-modal--${size}`, className)}
				onClick={stopPropagation}
				{...otherProps}
			>
				<Grid
					justifyContent="end"
					alignItems="center"
					className="slide-modal__controls"
				>
					<Button kind="blank" size="xs" onClick={onClose}>
						<Icon type="cancel" size={18} />
					</Button>
				</Grid>
				{children}
			</Box>
		</PortalWithBackdrop>
	);
};

SlideModal.propTypes = {
	/** Child content for modal window */
	children: PropTypes.any,
	/** Root class name */
	className: PropTypes.string,
	/** Is modal visible */
	isVisible: PropTypes.bool,
	/** On cancel function */
	onClose: PropTypes.func,
	/** On handle open event */
	onOpen: PropTypes.func,
	/** Size (width) */
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default withTransition(SlideModal, {
	trigger: 'isVisible',
});
