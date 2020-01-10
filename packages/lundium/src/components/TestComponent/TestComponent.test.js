import React from 'react';
import { shallow } from 'enzyme';

import TestComponent from './TestComponent';

describe('<TestComponent />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<TestComponent {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
