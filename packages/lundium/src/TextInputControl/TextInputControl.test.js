import React from 'react';
import { shallow } from 'enzyme';

import TextInputControl from './TextInputControl';

describe('<TextInputControl />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<TextInputControl {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
