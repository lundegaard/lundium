import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('<Label />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Label {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
