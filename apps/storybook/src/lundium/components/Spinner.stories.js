import React from 'react';
import { Spinner } from 'lundium';

export default { title: 'Spinner', component: Spinner };

export const basic = () => <Spinner>Loading data</Spinner>;

export const quick = () => <Spinner visibilityDelay="0">Loading data</Spinner>;

export const quickWithoutAnimation = () => (
	<Spinner visibilityDelay="0" animationDisabled>
		Loading data
	</Spinner>
);

export const add10Seconds = () => <Spinner visibilityDelay="10">Loading data</Spinner>;

export const twoSecondsNoAnimation = () => (
	<Spinner visibilityDelay="2" animationDisabled>
		Loading data
	</Spinner>
);
