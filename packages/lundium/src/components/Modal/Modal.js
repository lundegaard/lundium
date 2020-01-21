import React from 'react';
import { cx } from 'ramda-extension';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';
import Button from '../Button';
import PortalWithBackdrop from '../PortalWithBackdrop';

const stopPropagation = e => {
	// NOTE: Click event would be propagated up to backdrop
	e.stopPropagation();
};
const Modal = ({
	children,
	isVisible,
	className,
	titleCenter,
	title,
	onCancel,
	// eslint-disable-next-line no-unused-vars
	modalId,
}) => (
	<PortalWithBackdrop isVisible={isVisible} onBackdropClick={onCancel}>
		<div className={cx('modal', className)} onClick={stopPropagation}>
			<Button kind="blank" className="modal__close" onClick={onCancel}>
				<Icon type="cancel" />
			</Button>
			<div className={cx('modal__title', { ['text-center']: titleCenter })}>{title}</div>
			<div className="modal__content">{children}</div>
		</div>
	</PortalWithBackdrop>
);

Modal.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.any.isRequired,
	/** Class name for modal root */
	className: PropTypes.node,
	/** Is modal visible */
	isVisible: PropTypes.bool,
	/** Modal id */
	modalId: PropTypes.string,
	/** On cancel click */
	onCancel: PropTypes.func,
	/** Modals title */
	title: PropTypes.node.isRequired,
	/** Is title in center */
	titleCenter: PropTypes.bool,
};

// TODO: add transition
export default Modal;
