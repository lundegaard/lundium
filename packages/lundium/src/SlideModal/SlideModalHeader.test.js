import React from 'react';
import { shallow } from 'enzyme';

import SlideModalHeader from './SlideModalHeader';

describe('<SlideModalHeader />', () => {
	const requiredProps = { title: 'Modal heading' };

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<SlideModalHeader {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
