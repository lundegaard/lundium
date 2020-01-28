import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import { cx } from 'ramda-extension';

import Box from '../Box';
import Link from '../Link';

const Tab = ({
	className,
	label,
	isActive,
	isDone,
	isDisabled,
	isInvalid,
	stepNumber,
	href,
	...otherProps
}) => {
	const WrapperComponent = isDisabled || isNil(href) ? 'span' : Link;

	return (
		<WrapperComponent
			className={cx(
				'tab-link',
				{
					['tab-link--active']: isActive,
					['tab-link--done']: isDone,
					['tab-link--disabled']: isDisabled,
					['tab-link--invalid']: isInvalid,
					['tab-link--wizard']: !isNil(stepNumber),
				},
				className
			)}
			{...(isDisabled ? {} : { href })}
			{...otherProps}
		>
			{!isNil(stepNumber) && <span className="tab-link__number">{stepNumber}</span>}
			{label && (
				<Box as="span" className="tab-link__label">
					{label}
				</Box>
			)}
		</WrapperComponent>
	);
};

Tab.propTypes = {
	/** Class name for root. */
	className: PropTypes.string,
	href: PropTypes.string,
	/** If `true`, tab link is in active state. */
	isActive: PropTypes.bool,
	/** If `true`, tab link is disabled for any pointer events. */
	isDisabled: PropTypes.bool,
	/** If `true`, tab link is in done state, applied in step wizard. */
	isDone: PropTypes.bool,
	isInvalid: PropTypes.bool,
	/** Label for tab link. */
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	/** Step number presents numbered position in step wizard. */
	stepNumber: PropTypes.number,
};

export default Tab;
