import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'lundium';

export default { title: 'Modal', component: Modal };

const ModalComponent = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Fragment>
			<Button kind="primary" onClick={() => setIsVisible(true)}>
				Open me!
			</Button>
			<Modal
				isVisible={isVisible}
				label="Generic Modal"
				title="Title"
				onCancel={() => setIsVisible(false)}
			>
				<p>I&apos;m the content.</p>
			</Modal>
		</Fragment>
	);
};

export const basic = () => <ModalComponent />;
