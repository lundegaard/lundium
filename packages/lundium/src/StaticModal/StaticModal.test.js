import React from 'react';
import { shallow } from 'enzyme';

import { StaticModal } from './StaticModal';

describe('<StaticModal />', () => {
	const requiredProps = {
		title: 'Modal title',
		children: <div>Some content</div>,
	};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<StaticModal {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
