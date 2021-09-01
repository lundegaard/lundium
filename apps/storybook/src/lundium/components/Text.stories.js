import React from 'react';
import { Box, Text } from 'lundium';

export default { title: 'Others/Text', component: Text };

export const weight = () => (
	<Box>
		<Text weight="bold">Bold text.</Text>
		<Text weight="bolder">
			Bolder weight text (relative to the parent element).
		</Text>
		<Text weight="normal">Normal weight text.</Text>
		<Text weight="light">Light weight text.</Text>
		<Text weight="lighter">
			Lighter weight text (relative to the parent element).
		</Text>
	</Box>
);

export const alignment = () => (
	<Box>
		<Text align="left">Left aligned text on all viewport sizes.</Text>
		<Text align="center">Center aligned text on all viewport sizes.</Text>
		<Text align="right">Right aligned text on all viewport sizes.</Text>
	</Box>
);

export const transform = () => (
	<Box>
		<Text transform="lowercase">Lowercased text.</Text>
		<Text transform="uppercase">Uppercased text.</Text>
		<Text transform="capitalize">CapiTaliZed text.</Text>
	</Box>
);
