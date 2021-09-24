import React from 'react';
import { LabeledIcon } from 'lundium';
import { theme } from '@lundium/theme-basic';

export default { title: 'Others/LabeledIcon', component: LabeledIcon };

const statisticsIcon = theme.iconTypes.find(type => type === 'statistics');

export const basic = () => <LabeledIcon iconType={statisticsIcon}>Statistics</LabeledIcon>;

export const iconBeforeLabel = () => (
	<LabeledIcon iconType={statisticsIcon} iconBeforeText>
		Statistics
	</LabeledIcon>
);
