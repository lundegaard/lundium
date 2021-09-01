import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('<Link />', () => {
	const props = { children: 'Link', href: '#' };

	it('shallow', () => {
		const wrapper = shallow(<Link {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
