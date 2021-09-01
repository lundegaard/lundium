import React, { Fragment, useState } from 'react';
import { BasicStaticModal, Button, StaticModal } from 'lundium';
import { boolean } from '@storybook/addon-knobs';

export default {
	title: 'Modals/StaticModal',
	component: StaticModal,
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
				<StaticModal isVisible={isVisible} onClose={() => setIsVisible(false)}>
					<p>I&apos;m the content.</p>
				</StaticModal>
			</Fragment>
		);
	});

export const withTitleAndFooter = () =>
	// Workaround to be able to see code in story
	React.createElement(() => {
		const [isVisible, setIsVisible] = useState(false);

		return (
			<Fragment>
				<Button kind="primary" onClick={() => setIsVisible(true)}>
					Open me!
				</Button>
				<BasicStaticModal
					isVisible={isVisible}
					onClose={() => setIsVisible(false)}
					footer={<div>Footer tree</div>}
					titleCenter={boolean('titleCenter', false)}
					title={<div>Title tree</div>}
				>
					Some content
				</BasicStaticModal>
			</Fragment>
		);
	});
