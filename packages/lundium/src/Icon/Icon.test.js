import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

// jest.mock('./Icon.scss', () => ({
// 	icons: 'add',
// }));

describe('<Icon />', () => {
	const requiredProps = { type: 'add' };

	it('shallow', () => {
		const wrapper = shallow(<Icon {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
