import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

describe('<Menu />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Menu {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
