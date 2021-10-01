import React from 'react';
import { shallow } from 'enzyme';

import BasicStaticModal from './BasicStaticModal';

describe('<BasicStaticModal />', () => {
	const requiredProps = { title: 'Modal title', children: <div>Some content</div> };

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<BasicStaticModal {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});
});
