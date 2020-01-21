import React from 'react';
import { shallow } from 'enzyme';

import LabeledIcon from './LabeledIcon';

describe('<LabeledIcon />', () => {
	const requiredProps = { iconType: 'add' };

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<LabeledIcon {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
