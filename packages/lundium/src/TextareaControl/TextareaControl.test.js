import React from 'react';
import { shallow } from 'enzyme';

import TextareaControl from './TextareaControl';

describe('<TextareaControl />', () => {
	const requiredProps = {
		name: 'textarea-control',
	};

	it('shallow', () => {
		const wrapper = shallow(<TextareaControl {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
