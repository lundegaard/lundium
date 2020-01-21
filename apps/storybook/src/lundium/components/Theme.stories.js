import React, { Fragment } from 'react';
import { Box, Text } from 'lundium';
import { HtmlDirection, ThemeProvider } from '@lundium/theme-basic';
import en_US from '@lundium/locale/dist/en_US';
import { boolean } from '@storybook/addon-knobs';

export default { title: 'Theme' };

export const withLocale = () => (
	<ThemeProvider theme={{ isRTL: boolean('isRTL', false), locale: en_US }}>
		<Fragment>
			<HtmlDirection />
			<Box>
				<Text weight="bold">Bold text.</Text>
			</Box>
		</Fragment>
	</ThemeProvider>
);
