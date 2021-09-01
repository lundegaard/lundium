import React from 'react';
import { shallow } from 'enzyme';

import { Text } from '../../index';

import Tabs from './Tabs';

describe('<Tabs />', () => {
	const requiredProps = {};

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(
			<Tabs {...requiredProps}>
				<Text tabLabel="First">First content</Text>
				<Text tabLabel="Second">Second content</Text>
			</Tabs>,
		);
		expect(wrapper).toMatchSnapshot();
	});
});
