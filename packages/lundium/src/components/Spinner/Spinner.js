import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Text from '../Text';
import Grid from '../Grid';

const Spinner = ({
	size = 'lg',
	visibilityDelay = 3000,
	animationDisabled,
	children,
	className,
}) => {
	const [showLoader, setShowLoader] = useState(visibilityDelay <= 0);

	useEffect(() => {
		const timer = setTimeout(changeVisibility, visibilityDelay);

		return () => {
			clearTimeout(timer);
		};
	}, [visibilityDelay]);

	const changeVisibility = () => setShowLoader(true);

	const isSmall = size === 'sm';
	const gridClasses = cx(['data-status', ...(animationDisabled ? [] : ['fade-in'])]);

	if (!showLoader) {
		return null;
	}

	const svg = (
		<svg
			className={cx(className, 'loader', { 'loader--sm': isSmall })}
			viewBox="0 0 60 60"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				className="loader-circle"
				cx="30"
				cy="30"
				r={isSmall ? '25' : '20'}
				stroke="#70c542"
				strokeWidth={isSmall ? '5' : '3'}
			/>
		</svg>
	);

	if (!children) {
		return svg;
	}

	return (
		<Grid alignItems="center" justifyContent="center" className={gridClasses}>
			{svg}
			<Text mb={0}>{children}</Text>
		</Grid>
	);
};

Spinner.propTypes = {
	/** Determines wheter to animate or not. */
	animationDisabled: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	size: PropTypes.oneOf(['sm', 'lg']),
	/** Delay for showing loader in ms. */
	visibilityDelay: PropTypes.number,
};

export default Spinner;
