import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { ThemeProvider, HtmlDirection } from 'lundium';
import '@lundium/theme-basic/dist/index.css';

addDecorator(story => (
	<ThemeProvider theme={{ isRTL: boolean('isRTL', false) }}>
		<Fragment>
			<HtmlDirection />
			{story()}
		</Fragment>
	</ThemeProvider>
));
