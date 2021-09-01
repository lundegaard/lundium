import React from 'react';
import { shallow } from 'enzyme';

import PortalWithBackdrop from './PortalWithBackdrop';

describe('<PortalWithBackdrop />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(
			<PortalWithBackdrop {...requiredProps}>
				<div />
			</PortalWithBackdrop>,
		);
		expect(wrapper).toMatchSnapshot();
	});
});
