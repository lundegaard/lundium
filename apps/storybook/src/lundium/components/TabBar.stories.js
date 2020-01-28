import React from 'react';
import { Tab, TabBar } from 'lundium';

export default { title: 'TabBar', component: TabBar };

export const basic = () => (
	<TabBar>
		<Tab label="General Info" isActive />
		<Tab label="Access Rights" isDisabled />
		<Tab label="General Info History" />
		<Tab label="Access Rights History" />
	</TabBar>
);

export const withSteps = () => (
	<TabBar stepWizard>
		<Tab label="General Info" isDone stepNumber={1} />
		<Tab label="Access Rights" isActive stepNumber={2} />
		<Tab label="General Info History" isDisabled stepNumber={3} />
		<Tab label="Access Rights History" isDisabled stepNumber={4} />
	</TabBar>
);
