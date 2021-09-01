import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('<Spinner />', () => {
	const requiredProps = {
		animationDisabled: true,
		visibilityDelay: 0,
		children: <div>Loading data</div>,
	};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Spinner {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
