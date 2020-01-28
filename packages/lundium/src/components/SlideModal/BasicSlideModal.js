import React from 'react';
import PropTypes from 'prop-types';

import SlideModalFooter from './SlideModalFooter';
import SlideModalHeader from './SlideModalHeader';
import SlideModalContent from './SlideModalContent';
import SlideModal from './SlideModal';

export const BasicSlideModal = ({
	renderFooter: Footer,
	children,
	title,
	subtitle,
	details,
	...otherProps
}) => (
	<SlideModal {...otherProps}>
		{title && <SlideModalHeader title={title} subtitle={subtitle} details={details} />}
		<SlideModalContent>{children}</SlideModalContent>
		{Footer && (
			<SlideModalFooter>
				<Footer />
			</SlideModalFooter>
		)}
	</SlideModal>
);

BasicSlideModal.propTypes = {
	children: PropTypes.node,
	details: PropTypes.node,
	renderFooter: PropTypes.elementType,
	subtitle: PropTypes.node,
	title: PropTypes.node,
};

export default BasicSlideModal;
