import React from 'react';
import { shallow } from 'enzyme';

import Notification from './Notification';

describe('<Notification />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Notification {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
