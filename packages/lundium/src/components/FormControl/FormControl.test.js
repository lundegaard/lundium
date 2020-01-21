import React from 'react';
import { shallow } from 'enzyme';

import FormControl from './FormControl';

describe('<FormControl />', () => {
	const requiredProps = {
		component: 'input',
		name: 'formControlField',
	};

	it('shallow', () => {
		const wrapper = shallow(<FormControl {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
