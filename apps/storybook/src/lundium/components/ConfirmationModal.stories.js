import React, { Fragment, useState } from 'react';
import { Button, ConfirmationModal } from 'lundium';

export default {
	title: 'Modals/ConfirmationModal',
	component: ConfirmationModal,
};

export const basic = () =>
	// Workaround to be able to see code in story
	React.createElement(() => {
		const [isVisible, setIsVisible] = useState(false);

		return (
			<Fragment>
				<Button kind="primary" onClick={() => setIsVisible(true)}>
					Open me!
				</Button>
				<ConfirmationModal
					id="id"
					title="Modal title"
					description="Modal description"
					isVisible={isVisible}
					onConfirm={() => setIsVisible(false)}
					onCancel={() => setIsVisible(false)}
				/>
			</Fragment>
		);
	});

export const withCustomMessages = () =>
	// Workaround to be able to see code in story
	React.createElement(() => {
		const [isVisible, setIsVisible] = useState(false);

		return (
			<Fragment>
				<Button kind="primary" onClick={() => setIsVisible(true)}>
					Open me!
				</Button>
				<ConfirmationModal
					id="id"
					title="Modal title"
					description="Modal description"
					isVisible={isVisible}
					onConfirm={() => setIsVisible(false)}
					onCancel={() => setIsVisible(false)}
					confirmLabel="Custom confirm label"
					cancelLabel="Custom cancel label"
				/>
			</Fragment>
		);
	});
