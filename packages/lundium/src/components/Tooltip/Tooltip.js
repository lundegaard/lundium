import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import TooltipTrigger from 'react-popper-tooltip';
import { cx, noop } from 'ramda-extension';

import { useTheme } from '../ThemeProvider';

const getPlacement = (placement, isRTL) => {
	if (isRTL) {
		if (placement === TooltipPlacements.left) {
			return TooltipPlacements.right;
		}
		if (placement === TooltipPlacements.right) {
			return TooltipPlacements.left;
		}
	}
	return placement;
};

const Tooltip = ({
	isUpperCase = true,
	onTooltipVisibilityChange = noop,
	placement = 'bottom',
	showArrow = true,
	showTooltip = false,
	trigger = 'hover',
	children,
	tooltip,
	...rest
}) => {
	const { isRTL } = useTheme();
	const realPlacement = getPlacement(placement, isRTL);

	return (
		<TooltipTrigger
			{...rest}
			trigger={trigger}
			defaultTooltipShown={showTooltip}
			onVisibilityChange={onTooltipVisibilityChange}
			placement={realPlacement}
			tooltip={({ getArrowProps, arrowRef, getTooltipProps, tooltipRef }) => (
				<div
					{...getTooltipProps({
						ref: tooltipRef,
						className: cx('tooltip', { 'upper-case': isUpperCase }),
					})}
				>
					{showArrow && (
						<div
							{...getArrowProps({
								ref: arrowRef,
								className: 'tooltip-arrow',
								'data-placement': realPlacement,
							})}
						/>
					)}
					<div className="tooltip-body">{tooltip}</div>
				</div>
			)}
		>
			{({ getTriggerProps, triggerRef }) =>
				cloneElement(children, { ref: triggerRef, ...getTriggerProps() })
			}
		</TooltipTrigger>
	);
};

export const TooltipPlacements = {
	top: 'top',
	right: 'right',
	bottom: 'bottom',
	left: 'left',
};

export const TooltipTriggers = ['hover', 'click', 'right-click'];

Tooltip.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Tooltip upper case or not */
	isUpperCase: PropTypes.bool,
	/** Function called on state change */
	onTooltipVisibilityChange: PropTypes.func,
	/** Tooltip position - top, right, bottom or left */
	placement: PropTypes.oneOf(Object.keys(TooltipPlacements)),
	/** Show tooltip arrow or not */
	showArrow: PropTypes.bool,
	/** Show tooltip by default or not */
	showTooltip: PropTypes.bool,
	/** Content of tooltip */
	tooltip: PropTypes.node,
	/** Tooltip trigger - hover, click or right-click */
	trigger: PropTypes.oneOf(TooltipTriggers),
};

export default Tooltip;
