import React from 'react';
import { shallow } from 'enzyme';

import NotificationBox from './NotificationBox';

describe('<NotificationBox />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<NotificationBox {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
