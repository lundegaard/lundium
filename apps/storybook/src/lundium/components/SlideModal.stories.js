import React, { Fragment, useState } from 'react';
import { BasicSlideModal, Button, SlideModal } from 'lundium';

export default { title: 'Modals/SlideModal', component: SlideModal };

export const basic = () =>
	// Workaround to be able to see code in story
	React.createElement(() => {
		const [isVisible, setIsVisible] = useState(false);

		return (
			<Fragment>
				<Button kind="primary" onClick={() => setIsVisible(true)}>
					Open me!
				</Button>
				<BasicSlideModal
					isVisible={isVisible}
					onClose={() => setIsVisible(false)}
					footer={<div>Footer tree</div>}
					title="Title tree"
					transition={{
						classNames: 'slide-modal-transition',
						timeout: 1000,
					}}
				>
					Some content
				</BasicSlideModal>
			</Fragment>
		);
	});
