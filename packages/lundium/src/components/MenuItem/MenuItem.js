import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

const MenuItem = ({ className, noGutters, ...rest }) => (
	<li
		className={cx(
			{
				menu__item: true,
				['menu__item--no-gutters']: noGutters,
			},
			className,
		)}
		{...rest}
	/>
);

MenuItem.propTypes = {
	className: PropTypes.string,
	noGutters: PropTypes.bool,
};

export default MenuItem;
