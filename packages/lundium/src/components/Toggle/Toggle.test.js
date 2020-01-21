import React from 'react';
import { mount, shallow } from 'enzyme';

import Toggle from './Toggle';

describe('<Toggle />', () => {
	const checkedLabel = 'Open';
	const uncheckedLabel = 'Closed';
	const name = 'generic-toggle';

	const requiredProps = {
		checkedLabel,
		uncheckedLabel,
		name,
	};

	const checkboxSelector = 'input[type="checkbox"]';
	const labelSelector = `label[htmlFor^="${name}"]`;

	it('matches snapshot when shallowly rendered', () => {
		const wrapper = shallow(<Toggle />);
		expect(wrapper).toMatchSnapshot();
	});

	it('is checked when receives prop checked={true} and has correct label', () => {
		const wrapper = mount(<Toggle {...requiredProps} checked readOnly />);
		const checkbox = wrapper.find(checkboxSelector);
		const label = wrapper.find(labelSelector);
		expect(label.text()).toBe(checkedLabel);
		expect(checkbox.props().checked).toBe(true);
	});

	it('is not checked when does not receive prop checked and has correct label', () => {
		const wrapper = mount(<Toggle {...requiredProps} />);
		const checkbox = wrapper.find(checkboxSelector);
		const label = wrapper.find(labelSelector);
		expect(checkbox.props().checked).toBeFalsy();
		expect(label.text()).toBe(uncheckedLabel);
	});

	it('is not checked when receives prop checked={false} and has correct label', () => {
		const wrapper = mount(<Toggle {...requiredProps} checked={false} readOnly />);
		const checkbox = wrapper.find(checkboxSelector);
		const label = wrapper.find(labelSelector);
		expect(checkbox.props().checked).toBeFalsy();
		expect(label.text()).toBe(uncheckedLabel);
	});
});
