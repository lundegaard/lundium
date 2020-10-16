import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Box from '../Box';

const KEY_CODE_ENTER = 13;

const Link = forwardRef(({ as = 'a', disabled, href, className, ...rest }, ref) => (
	<Box
		className={cx(disabled && 'disabled', className)}
		as={as}
		disabled={disabled}
		href={disabled ? '' : href}
		onKeyDown={event => event.keyCode === KEY_CODE_ENTER && disabled && event.preventDefault()}
		{...rest}
		ref={ref}
		aria-disabled={disabled}
	/>
));

Link.displayName = 'forwardRef(Link)';

Link.propTypes = {
	/** Tag used for root component */
	as: PropTypes.any,
	/** Children nodes - content of link */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** If set, link is disabled */
	disabled: PropTypes.bool,
	/** Specifies link destination  */
	href: PropTypes.string,
	...Box.propTypes,
};

export default Link;
