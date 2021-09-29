import React from 'react';
import { Accordion, AccordionItem } from 'lundium';
import { boolean } from '@storybook/addon-knobs';

export default { title: 'Others/Accordion', component: Accordion };

export const basic = () => (
	<Accordion>
		<AccordionItem
			key="section1"
			header="Accordion section 1"
			panel={<div>Section content</div>}
			dark={boolean('dark', false)}
		/>
		<AccordionItem
			key="section2"
			header="Accordion section 2"
			panel={<div>Section content</div>}
			dark={boolean('dark', false)}
		/>
	</Accordion>
);
