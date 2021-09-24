import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Tooltip, TooltipPlacements } from 'lundium';

export default { title: 'Others/Tooltip', component: Tooltip };

export const basic = () => (
	<Tooltip
		tooltip={<span>Tooltip text</span>}
		placement={select('placement', TooltipPlacements, 'bottom', '')}
	>
		<span>Child component of tooltip</span>
	</Tooltip>
);

export const placementRight = () => (
	<Tooltip tooltip={<span>Tooltip text</span>} placement="right">
		<span>Child component of tooltip</span>
	</Tooltip>
);

export const triggerOnClick = () => (
	<Tooltip tooltip={<span>Tooltip text</span>} trigger="click">
		<span>Child component of tooltip</span>
	</Tooltip>
);
