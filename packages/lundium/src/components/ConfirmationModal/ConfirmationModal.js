import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Button from '../Button';
import Grid from '../Grid';
import Text from '../Text';
import { BasicStaticModal } from '../StaticModal';
import { useTheme } from '../ThemeProvider';

const ConfirmationModal = ({
	id,
	title,
	description,
	onConfirm,
	confirmLabel,
	cancelLabel,
	onCancel,
	isVisible,
}) => {
	const { locale } = useTheme();

	return (
		<BasicStaticModal id={id} titleCenter title={title} isVisible={isVisible} onClose={onCancel}>
			<Box mt={3}>
				<Text className="text-center">{description}</Text>
				<Grid justifyContent="center" flexDirection={['column', 'row']} pt={3} pb={2}>
					<Box mt={4} className="text-center">
						<Button kind="secondary" outline mr={['', 3]} onClick={onCancel}>
							{cancelLabel || locale.modalsCancel}
						</Button>
					</Box>
					<Box mt={4} className="text-center">
						<Button kind="primary" onClick={onConfirm}>
							{confirmLabel || locale.modalsConfirm}
						</Button>
					</Box>
				</Grid>
			</Box>
		</BasicStaticModal>
	);
};

ConfirmationModal.propTypes = {
	cancelLabel: PropTypes.node,
	confirmLabel: PropTypes.node,
	description: PropTypes.node,
	id: PropTypes.string.isRequired,
	isVisible: PropTypes.bool,
	onCancel: PropTypes.func,
	onConfirm: PropTypes.func.isRequired,
	title: PropTypes.node.isRequired,
};

export default ConfirmationModal;
