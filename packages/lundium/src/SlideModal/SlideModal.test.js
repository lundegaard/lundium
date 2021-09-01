import React from 'react';
import { shallow } from 'enzyme';

import { SlideModal } from './SlideModal';

describe('<SlideModal />', () => {
	const requiredProps = { children: <div>Some child</div> };

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<SlideModal {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
