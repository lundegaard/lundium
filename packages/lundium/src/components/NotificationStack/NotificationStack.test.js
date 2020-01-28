import React from 'react';
import { shallow } from 'enzyme';
import { noop } from 'ramda-extension';

import NotificationStack from './NotificationStack';

describe('<NotificationStack />', () => {
	const requiredProps = { notifications: [], renderNotification: noop };

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<NotificationStack {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
