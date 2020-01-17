import React from 'react';
import Helmet from 'react-helmet';

import { useTheme } from '../ThemeProvider';

/**
 * Ensures right direction attribute on HTML element.
 */
const HtmlDirection = () => {
	const { isRTL } = useTheme();
	const htmlAttributes = { dir: isRTL ? 'rtl' : 'ltr' };
	return <Helmet htmlAttributes={htmlAttributes} />;
};

export default HtmlDirection;
