import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

const Menu = forwardRef(({ children, size, className, ...rest }, ref) => (
	<ul
		className={cx({ menu: true, [`menu--size-${size}`]: size }, className)}
		ref={ref}
		{...rest}
	>
		{children}
	</ul>
));

Menu.displayName = 'Menu';

Menu.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	size: PropTypes.oneOf(['sm']),
};

export default Menu;
