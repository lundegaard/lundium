import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

const stringify = value => JSON.stringify(value, null, 2);

describe('<Box />', () => {
	const requiredProps = {};

	it('shallow', () => {
		const wrapper = shallow(<Box {...requiredProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	describe('generate className correctly', () => {
		const testClassNames = (propsObject, expectedClassName) =>
			it(`for props equal to ${stringify(propsObject)}
			, generates className equal to "${expectedClassName}"`, () => {
				const wrapper = shallow(<Box {...propsObject} />);
				expect(wrapper.props().className).toBe(expectedClassName);
			});

		describe('for property m', () => {
			testClassNames({ m: [1, 2, 3, 4, 5] }, 'm-1 m-sm-2 m-md-3 m-lg-4 m-xl-5');
			testClassNames({ m: [1, 2, 3, 4] }, 'm-1 m-sm-2 m-md-3 m-lg-4');
			testClassNames({ m: [1, 2, 3] }, 'm-1 m-sm-2 m-md-3');
			testClassNames({ m: [1, 2] }, 'm-1 m-sm-2');
			testClassNames({ m: [1] }, 'm-1');
			testClassNames({ m: [] }, '');
			testClassNames(
				{ m: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 } },
				'm-1 m-sm-2 m-md-3 m-lg-4 m-xl-5',
			);
			testClassNames(
				{ m: { xs: 1, sm: 2, md: 3, lg: 4 } },
				'm-1 m-sm-2 m-md-3 m-lg-4',
			);
			testClassNames({ m: { xs: 1, sm: 2, md: 3 } }, 'm-1 m-sm-2 m-md-3');
			testClassNames({ m: { xs: 1, sm: 2 } }, 'm-1 m-sm-2');
			testClassNames({ m: { xs: 1 } }, 'm-1');
			testClassNames({ m: {} }, '');
		});

		describe('even for falsy values', () => {
			testClassNames({ m: { xs: 0, lg: 0 } }, 'm-0 m-lg-0');
		});
	});
});
