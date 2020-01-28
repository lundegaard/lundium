import React, { Fragment, useState } from 'react';
import { Button, Notification, NotificationStack } from 'lundium';
import { reject } from 'ramda';

export default { title: 'NotificationStack', component: NotificationStack };

const getNotification = id => ({
	type: 'success',
	id,
});

export const basic = () =>
	// Workaround to be able to see code in story
	React.createElement(() => {
		const [currentId, setCurrentId] = useState(1);
		const [notifications, setNotifications] = useState([getNotification(0)]);

		const addNotification = () => {
			setNotifications([...notifications, { id: currentId, type: 'success' }]);
			setCurrentId(currentId + 1);
		};

		const removeNotification = idToRemove => {
			setNotifications(reject(({ id }) => id === idToRemove, notifications));
		};

		return (
			<Fragment>
				<Button kind="primary" onClick={addNotification}>
					Open me!
				</Button>
				<NotificationStack
					notifications={notifications}
					// Default transition for ilustration, not mandatory
					transition={{
						timeout: 500,
						classNames: 'slide-from-right',
					}}
					renderNotification={({ type, id, ...rest }) => (
						<Notification type={type} onClose={() => removeNotification(id)} {...rest}>
							Notification content {id}
						</Notification>
					)}
				/>
			</Fragment>
		);
	});
