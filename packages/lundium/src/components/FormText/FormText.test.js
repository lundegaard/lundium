import React from 'react';
import { shallow } from 'enzyme';

import FormText from './FormText';

describe('<FormText />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<FormText {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
