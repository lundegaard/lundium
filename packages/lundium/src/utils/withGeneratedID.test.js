import React from 'react';
import { mount } from 'enzyme';
import { noop } from 'ramda-extension';

import withGeneratedID from './withGeneratedID';

describe('withGeneratedID', () => {
	it('passes a generated id prop to the component', () => {
		const Component = noop;
		const WrappedComponent = withGeneratedID(Component);

		const wrapper = mount(<WrappedComponent />);
		expect(wrapper.find(Component).prop('generatedID')).toBe('0');

		const anotherWrapper = mount(<WrappedComponent />);
		expect(anotherWrapper.find(Component).prop('generatedID')).toBe('1');
	});
});
