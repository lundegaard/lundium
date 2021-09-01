import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Tooltip {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
