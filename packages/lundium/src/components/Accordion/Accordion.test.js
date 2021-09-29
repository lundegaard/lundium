import React from 'react';
import { shallow } from 'enzyme';

import Accordion from './Accordion';

describe('<Accordion />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Accordion {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
