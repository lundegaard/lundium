import React from 'react';
import { shallow } from 'enzyme';

import InlineText from './InlineText';

describe('<InlineText />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<InlineText {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
