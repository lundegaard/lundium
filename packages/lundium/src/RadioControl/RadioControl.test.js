import React from 'react';
import { shallow } from 'enzyme';

import RadioControl from './RadioControl';

describe('<RadioControl />', () => {
	const requiredProps = {
		name: 'radioControlField',
	};

	it('shallow', () => {
		const wrapper = shallow(<RadioControl {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
