import React from 'react';
import { shallow } from 'enzyme';

import TabBar from './TabBar';

describe('<TabBar />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<TabBar {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
