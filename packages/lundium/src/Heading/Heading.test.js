import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('<Heading />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<Heading {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
