import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
	const requiredProps = { title: 'Modal title', children: <div>Some content</div> };

	it('shallow', () => {
		const wrapper = shallow(<Modal {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
