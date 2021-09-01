import React from 'react';
import { shallow } from 'enzyme';

import FormGroup from './FormGroup';

describe('<FormGroup />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<FormGroup {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
