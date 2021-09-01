import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Checkbox {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
