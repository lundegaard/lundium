import React from 'react';
import PropTypes from 'prop-types';
import { cx, noop } from 'ramda-extension';

const AccordionHeader = ({
	index,
	indexOpen,
	setIndexOpen = noop,
	dark,
	highlighted,
	...props
}) => (
	<button
		className={cx(
			'accordion-header',
			{ 'accordion-header-dark': dark },
			{ 'accordion-header--open': index === indexOpen },
			{ highlighted }
		)}
		onClick={() => setIndexOpen(index === indexOpen ? undefined : index)}
		{...props}
	/>
);

AccordionHeader.propTypes = {
	dark: PropTypes.bool,
	highlighted: PropTypes.bool,
	index: PropTypes.number,
	indexOpen: PropTypes.number,
	setIndexOpen: PropTypes.func,
};

export default AccordionHeader;
