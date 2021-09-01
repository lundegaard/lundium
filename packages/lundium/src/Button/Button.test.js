import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Button {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
