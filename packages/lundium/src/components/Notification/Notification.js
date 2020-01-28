import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';
import { T, always, cond, equals, identity } from 'ramda';

import Grid from '../Grid';
import Box from '../Box';
import Icon from '../Icon';
import Button from '../Button';

const getIcon = cond([
	[equals('danger'), always('status-rejected')],
	[equals('warning'), always('error')],
	[T, identity],
]);

// TODO Mobile should not have A close button, desired functionality is to hide notification with swipe up (just like native notifications)
const Notification = ({ children, className, type = 'success', onClose, id, ...otherProps }) => (
	<Grid flex className={cx('notification', type, className)} {...otherProps}>
		<Box className="notification__icon" mx={3}>
			<Icon type={getIcon(type)} size={22} color={type} />
		</Box>
		<Box className="notification__text">{children}</Box>
		<Box mx={3}>
			<Button className="py-0" kind="blank" size="xs" onClick={() => onClose(id)}>
				<Icon type="cancel" size={16} />
			</Button>
		</Box>
	</Grid>
);

Notification.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.string,
	id: PropTypes.string,
	onClose: PropTypes.func,
	type: PropTypes.string,
};

export const NotificationTypes = ['danger', 'warning', 'info', 'success', 'primary', 'secondary'];

export default Notification;
