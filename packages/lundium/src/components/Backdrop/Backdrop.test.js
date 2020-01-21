import React from 'react';
import { shallow } from 'enzyme';

import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(
			<Backdrop {...requiredProps}>
				<div />
			</Backdrop>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
