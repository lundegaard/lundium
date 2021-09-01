import React, { Children, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

const { Provider, Consumer } = ThemeContext;

export const ThemeConsumer = Consumer;

const ThemeProvider = ({ children, theme }) => (
	<Provider value={theme}>{Children.only(children)}</Provider>
);

ThemeProvider.propTypes = {
	children: PropTypes.node,
	theme: PropTypes.shape({
		isRTL: PropTypes.bool,
		locale: PropTypes.object,
	}),
};

export default ThemeProvider;
