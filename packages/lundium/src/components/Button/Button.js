import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx, isString, noop, valueMirror } from 'ramda-extension';

import Icon from '../Icon';
import Text from '../Text';
import Link from '../Link';

/**
 * Represents a button. Can act as a link if `href` is passed.
 */
const Button = forwardRef(
	(
		{
			kind = 'default',
			LinkComponent = Link,
			onClick = noop,
			outline = false,
			type = 'button',
			blank,
			children,
			className,
			disabled,
			icon,
			size,
			...rest
		},
		ref
	) => {
		const C = rest.href || rest.to ? LinkComponent : 'button';
		const attrs = !rest.href && !rest.to ? { type } : {};

		return (
			<Text
				as={C}
				{...rest}
				className={cx(
					'btn',
					{
						'btn-blank': blank,
						[`btn-${size}`]: size,
						[`btn-${kind}`]: !blank && !outline,
						[`btn-outline-${kind}`]: outline,
					},
					className
				)}
				onClick={disabled ? noop : onClick}
				disabled={disabled}
				ref={ref}
				{...attrs}
			>
				{isString(icon) ? <Icon type={icon} /> : icon}
				{children}
			</Text>
		);
	}
);

export const BUTTON_TYPES = valueMirror([
	'primary',
	'default',
	'success',
	'info',
	'warning',
	'danger',
	'link',
	'secondary',
	'blank',
]);

Button.propTypes = {
	LinkComponent: PropTypes.elementType,
	/** If `true`, than no padding */
	blank: PropTypes.bool,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	disabled: PropTypes.bool,
	/** If set, button will act like a Link. */
	href: PropTypes.string,
	/** Supporting only values from Icon component. */
	icon: PropTypes.node,
	/** Kind of button. */
	kind: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
	/** Handler for `click` event. */
	onClick: PropTypes.func,
	/** Outline / ghost kind of button. */
	outline: PropTypes.bool,
	/** Size of the button. If falsy, default size is applied. */
	size: PropTypes.oneOf(['lg', 'sm', 'xs']),
	/** Button type HTML attribute. */
	type: PropTypes.string,
	...Text.propTypes,
};

export default Button;
