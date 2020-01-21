import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<MenuItem {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
