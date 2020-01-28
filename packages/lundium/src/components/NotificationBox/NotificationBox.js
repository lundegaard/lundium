import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Grid from '../Grid';
import Card from '../Card';
import Icon from '../Icon';
import Text from '../Text';

const iconPropsByKind = {
	info: { type: 'info', color: 'blue' },
	success: { type: 'success', color: 'success' },
	warning: { type: 'error', color: 'danger' },
};

const NotificationBox = ({ children, kind = 'info', className, ...rest }) => (
	<Card
		borderRadius
		boxShadow={['none', 'sm']}
		className={cx('notification-box', { [`notification-box--kind-${kind}`]: !!kind }, className)}
		py={{ xs: 2, md: 3 }}
		px={{ xs: 3, md: 4 }}
		{...rest}
	>
		<Grid flex>
			<Icon {...iconPropsByKind[kind]} size="18" mr={3} />
			<Text mb={0}>{children}</Text>
		</Grid>
	</Card>
);

NotificationBox.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	kind: PropTypes.oneOf(['info', 'warning', 'success']),
};

export default NotificationBox;
