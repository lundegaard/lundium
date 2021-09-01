import React from 'react';
import { cx } from 'ramda-extension';
import PropTypes from 'prop-types';

import StaticModal from '../StaticModal';

const BasicStaticModal = ({
	className,
	children,
	footer,
	titleCenter,
	title,
	...otherProps
}) => (
	<StaticModal
		className={cx(footer && ['modal--with-footer'], className)}
		{...otherProps}
	>
		{title && (
			<div
				className={cx('modal__title', {
					['text-center']: titleCenter,
				})}
			>
				{title}
			</div>
		)}
		{children && <div className="modal__content">{children}</div>}
		{footer && <div className="modal__footer">{footer}</div>}
	</StaticModal>
);

BasicStaticModal.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for modal root */
	className: PropTypes.node,
	/** Footer section in modal */
	footer: PropTypes.node,
	/** Modals title */
	title: PropTypes.node,
	/** Is title in center */
	titleCenter: PropTypes.bool,
};

export default BasicStaticModal;
