import React from 'react';
import { shallow } from 'enzyme';

import Portal from './Portal';

describe('<Portal />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<Portal {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
