import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'ramda-extension';

import Box from '../Box';
import Icon from '../Icon';

import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';

const AccordionItem = ({ header, panel, dark, setIndexOpen = noop, highlighted, ...props }) => (
	<Box className="accordion-item">
		<AccordionHeader dark={dark} setIndexOpen={setIndexOpen} highlighted={highlighted} {...props}>
			{header}
			<Icon type="caret-down" size={6} />
		</AccordionHeader>
		<AccordionPanel {...props}>{panel}</AccordionPanel>
	</Box>
);

AccordionItem.propTypes = {
	/** If set, dark mode is enabled. */
	dark: PropTypes.bool,
	/** Header to be rendered. */
	header: PropTypes.node,
	/** If set, item is highlighted. */
	highlighted: PropTypes.bool,
	/** Panel to be rendered. */
	panel: PropTypes.node,
	/** Function for setting index to open. */
	setIndexOpen: PropTypes.func,
};

export default AccordionItem;
