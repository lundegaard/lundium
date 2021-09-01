import React, { Fragment, cloneElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { usePopperTooltip } from 'react-popper-tooltip';
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

const canUseDOM = Boolean(
	typeof window !== 'undefined' && window.document && window.document.createElement
);

const TooltipTrigger = ({
	children,
	// Some defaults changed in the hook implementation.
	// For backward compatibility we have to override them here.
	closeOnReferenceHidden = true,
	defaultTooltipShown,
	getTriggerRef,
	modifiers,
	onVisibilityChange,
	placement = 'right',
	portalContainer = canUseDOM ? document.body : null,
	tooltip,
	tooltipShown,
	usePortal = canUseDOM,
	...rest
}) => {
	const {
		triggerRef,
		getArrowProps,
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
		state,
	} = usePopperTooltip(
		{
			// Some props renamed in the hook implementation.
			defaultVisible: defaultTooltipShown,
			onVisibleChange: onVisibilityChange,
			visible: tooltipShown,
			closeOnTriggerHidden: closeOnReferenceHidden,
			...rest,
		},
		{
			placement,
			modifiers,
		}
	);
	const reference = children({
		// No longer required, for backward compatibility.
		getTriggerProps: props => props,
		triggerRef: setTriggerRef,
	});

	const popper = tooltip({
		tooltipRef: setTooltipRef,
		getArrowProps,
		getTooltipProps,
		placement: state ? state.placement : undefined,
	});

	useEffect(() => {
		if (typeof getTriggerRef === 'function') {
			getTriggerRef(triggerRef);
		}
	}, [triggerRef, getTriggerRef]);

	return (
		<Fragment>
			{reference}
			{visible ? (usePortal ? createPortal(popper, portalContainer) : popper) : null}
		</Fragment>
	);
};

export const TooltipPlacements = {
	top: 'top',
	right: 'right',
	bottom: 'bottom',
	left: 'left',
};

TooltipTrigger.propTypes = {
	children: PropTypes.node,
	closeOnReferenceHidden: PropTypes.bool,
	defaultTooltipShown: PropTypes.bool,
	getTriggerRef: PropTypes.bool,
	modifiers: PropTypes.array,
	onVisibilityChange: PropTypes.func,
	placement: PropTypes.oneOf(Object.keys(TooltipPlacements)),
	portalContainer: PropTypes.node,
	tooltip: PropTypes.node,
	tooltipShown: PropTypes.bool,
	usePortal: PropTypes.bool,
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
						className: cx('tooltip', {
							'upper-case': isUpperCase,
						}),
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
				cloneElement(children, {
					ref: triggerRef,
					...getTriggerProps(),
				})
			}
		</TooltipTrigger>
	);
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
