import React from 'react';
import { shallow } from 'enzyme';

import AccordionItem from './AccordionItem';

describe('<AccordionItem />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<AccordionItem {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
