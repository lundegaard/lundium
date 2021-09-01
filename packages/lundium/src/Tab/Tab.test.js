import React from 'react';
import { shallow } from 'enzyme';

import Tab from './Tab';

describe('<Tab />', () => {
	const requiredProps = {
		label: 'tab label',
	};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Tab {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
