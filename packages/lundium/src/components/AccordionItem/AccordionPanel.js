import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Box from '../Box';

const AccordionPanel = ({ index = 0, indexOpen, ...props }) => (
	<Box
		className={cx('accordion-panel', { 'accordion-panel--open': index === indexOpen })}
		{...props}
	/>
);

AccordionPanel.propTypes = {
	index: PropTypes.number,
	indexOpen: PropTypes.number,
};

export default AccordionPanel;
