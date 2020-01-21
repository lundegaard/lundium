import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Backdrop from '../Backdrop';
import findElementById from '../../utils/findElementById';
import getParentContainer from '../../utils/getParentContainer';

const addBodyClass = isVisible =>
	isVisible
		? getParentContainer('body').classList.add('modal-open')
		: getParentContainer('body').classList.remove('modal-open');

const PortalWithBackdrop = ({
	portalContainerTagName = 'body',
	children,
	isVisible,
	container,
	portalContainerId,
	onBackdropClick,
	className,
}) => {
	const modalContainer =
		container || findElementById(portalContainerId) || getParentContainer(portalContainerTagName);

	useEffect(() => {
		addBodyClass(isVisible);
		return () => addBodyClass(false);
	}, [isVisible]);

	return (
		<Portal container={modalContainer} className={className}>
			<Backdrop isVisible={isVisible} onClick={onBackdropClick}>
				{children}
			</Backdrop>
		</Portal>
	);
};

PortalWithBackdrop.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node.isRequired,
	/** Class name for modal root */
	className: PropTypes.node,
	/** Container for modal rendering. */
	container: PropTypes.object,
	/** Is backdrop visible */
	isVisible: PropTypes.bool,
	/** On cancel click */
	onBackdropClick: PropTypes.func,
	/** Id of element where to render modal */
	portalContainerId: PropTypes.func,
	/** Portal container tag name */
	portalContainerTagName: PropTypes.string,
};

export default PortalWithBackdrop;
