import React, { useEffect } from 'react';
import { cx, noop } from 'ramda-extension';
import PropTypes from 'prop-types';

import withTransition from '../../utils/withTransition';
import Icon from '../Icon';
import Button from '../Button';
import Box from '../Box';
import PortalWithBackdrop from '../PortalWithBackdrop';
import stopPropagation from '../../utils/stopPropagation';

export const StaticModal = ({
	children,
	className,
	isVisible,
	onOpen = noop,
	onClose = noop,
	center,
	...otherProps
}) => {
	useEffect(() => {
		if (isVisible) {
			onOpen();
		}
	}, [isVisible, onOpen]);

	return (
		<PortalWithBackdrop isVisible={isVisible} onBackdropClick={onClose} center={center}>
			<Box className={cx('modal', className)} onClick={stopPropagation} {...otherProps}>
				<Button kind="blank" className="modal__close" onClick={onClose}>
					<Icon type="cancel" />
				</Button>
				{children}
			</Box>
		</PortalWithBackdrop>
	);
};

StaticModal.propTypes = {
	/** If `true`, content of backdrop is centered */
	center: PropTypes.bool,
	/** Children to be rendered in the main container. */
	children: PropTypes.node.isRequired,
	/** Class name for modal root */
	className: PropTypes.node,
	/** Is modal visible */
	isVisible: PropTypes.bool,
	/** On cancel click */
	onClose: PropTypes.func,
	/** On open event */
	onOpen: PropTypes.func,
};

export default withTransition(StaticModal, { trigger: 'isVisible' });
