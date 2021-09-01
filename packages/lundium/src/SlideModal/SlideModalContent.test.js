import React from 'react';
import { shallow } from 'enzyme';

import SlideModalContent from './SlideModalContent';

describe('<SlideModalContent />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<SlideModalContent {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
