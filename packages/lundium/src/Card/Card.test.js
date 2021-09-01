import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Card {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
