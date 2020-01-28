import React from 'react';
import { Tabs, Text } from 'lundium';

export default { title: 'Tabs', component: Tabs };

export const basic = () => (
	<Tabs>
		<Text tabLabel="First">First tab content</Text>
		<Text tabLabel="Second">Second tab content</Text>
	</Tabs>
);

export const withSecondTabSelectedByDefault = () => (
	<Tabs defaultActiveIndex={1}>
		<Text tabLabel="First">First tab content</Text>
		<Text tabLabel="Second">Second tab content</Text>
	</Tabs>
);
