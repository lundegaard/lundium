import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('<TextInput />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<TextInput {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
