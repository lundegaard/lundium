import React from 'react';
import { shallow } from 'enzyme';

import Radio from './Radio';

describe('<Radio />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Radio {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
