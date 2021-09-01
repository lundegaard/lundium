import React, { Fragment } from 'react';
import { Box, HtmlDirection, Text, ThemeProvider } from 'lundium';
import en_US from '@lundium/locale/dist/en_US';
import { boolean } from '@storybook/addon-knobs';

export default { title: 'Others/Theme', component: ThemeProvider };

export const withLocale = () => (
	<ThemeProvider
		theme={{
			isRTL: boolean('isRTL', false),
			locale: en_US,
		}}
	>
		<Fragment>
			<HtmlDirection />
			<Box>
				<Text weight="bold">Bold text.</Text>
			</Box>
		</Fragment>
	</ThemeProvider>
);
