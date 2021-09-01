import React from 'react';
import { shallow } from 'enzyme';

import HtmlDirection from './HtmlDirection';

describe('<HtmlDirection />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<HtmlDirection {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
