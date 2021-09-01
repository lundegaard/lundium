import React from 'react';
import { shallow } from 'enzyme';

import SlideModalFooter from './SlideModalFooter';

describe('<SlideModalFooter />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<SlideModalFooter {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
