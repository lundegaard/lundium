import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import { cx } from 'ramda-extension';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import getParentContainer from '../utils/getParentContainer';
import Portal from '../Portal';
import { transitionShape } from '../utils/types';

const defaultTransition = {
	timeout: 500,
	classNames: 'slide-from-right',
};

const NotificationStack = ({
	notifications,
	renderNotification,
	transition = defaultTransition,
	className,
	...otherProps
}) => (
	<Portal container={getParentContainer()} {...otherProps}>
		<TransitionGroup className={cx('notification-stack', className)}>
			{map(
				notification => (
					<CSSTransition key={`transition-${notification.id}`} {...transition}>
						<div>
							{renderNotification({
								...notification,
								key: `notification-${notification.id}`,
							})}
						</div>
					</CSSTransition>
				),
				notifications,
			)}
		</TransitionGroup>
	</Portal>
);

NotificationStack.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
	renderNotification: PropTypes.func.isRequired,
	transition: transitionShape,
};

export default NotificationStack;
