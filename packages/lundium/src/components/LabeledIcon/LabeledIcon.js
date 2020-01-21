import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Text from '../Text';
import Icon from '../Icon';
import stringOrNumberPropType from '../../utils/types/stringOrNumberPropType';

const LabeledIcon = ({
	children,
	iconBeforeText,
	iconType,
	iconColor,
	iconSize,
	iconClassName,
	iconProps: rawIconProps = {},
}) => {
	const iconProps = {
		ml: iconBeforeText ? 2 : 3,
		mr: iconBeforeText ? 3 : 2,
		...rawIconProps,
	};

	const icon = (
		<Icon
			type={iconType}
			color={iconColor}
			size={iconSize}
			className={cx(iconClassName, iconProps.className)}
			{...iconProps}
		/>
	);
	return (
		<Fragment>
			{iconBeforeText && icon}

			<Text as="span" align={iconBeforeText ? 'left' : 'right'}>
				{children}
			</Text>

			{!iconBeforeText && icon}
		</Fragment>
	);
};

LabeledIcon.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	iconBeforeText: PropTypes.bool,
	iconClassName: PropTypes.string,
	iconColor: PropTypes.string,
	iconProps: PropTypes.object,
	iconSize: stringOrNumberPropType,
	iconType: PropTypes.string.isRequired,
};

export default LabeledIcon;
