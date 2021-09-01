import React from 'react';
import { mount, shallow } from 'enzyme';

import FormField from './FormField';

const DummyInputText = () => <input type="text" />;
const DummyIcon = () => <i className="icon" />;

describe('<FormField />', () => {
	it('shallow', () => {
		const requiredProps = {
			control: DummyInputText,
			name: 'testFormField',
		};

		const wrapper = shallow(<FormField {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders suffix prop', () => {
		const props = {
			name: 'testFormField',
			control: DummyInputText,
			suffix: <DummyIcon />,
		};
		const wrapper = mount(<FormField {...props} />);
		expect(wrapper.find('i').hasClass('icon')).toBeTruthy();
	});
});
