import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';

const stringify = value => JSON.stringify(value, null, 2);

describe('<Grid />', () => {
	it('shallow', () => {
		const wrapper = shallow(<Grid />);
		expect(wrapper).toMatchSnapshot();
	});

	it('container', () => {
		const wrapper = shallow(<Grid container />);
		expect(wrapper).toMatchSnapshot();
	});

	it('row', () => {
		const wrapper = shallow(<Grid row />);
		expect(wrapper).toMatchSnapshot();
	});

	describe('generate className correctly', () => {
		const testClassNames = (propsObject, expectedClassName) =>
			it(`for props equal to ${stringify(propsObject)}
			, generates className equal to "${expectedClassName}"`, () => {
				const wrapper = shallow(<Grid {...propsObject} />);
				expect(wrapper.props().className).toBe(expectedClassName);
			});

		describe('col', () => {
			testClassNames({ col: [1, 2, 3, 4, 5] }, 'col-1 col-sm-2 col-md-3 col-lg-4 col-xl-5');
			testClassNames({ col: [1, 2, 3, 4] }, 'col-1 col-sm-2 col-md-3 col-lg-4');
			testClassNames({ col: [1, 2, 3] }, 'col-1 col-sm-2 col-md-3');
			testClassNames({ col: [1, 2] }, 'col-1 col-sm-2');
			testClassNames({ col: [1] }, 'col-1');
			testClassNames({ col: [] }, '');
			testClassNames(
				{ col: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 } },
				'col-1 col-sm-2 col-md-3 col-lg-4 col-xl-5'
			);
			testClassNames({ col: { xs: 1, sm: 2, md: 3, lg: 4 } }, 'col-1 col-sm-2 col-md-3 col-lg-4');
			testClassNames({ col: { xs: 1, sm: 2, md: 3 } }, 'col-1 col-sm-2 col-md-3');
			testClassNames({ col: { xs: 1, sm: 2 } }, 'col-1 col-sm-2');
			testClassNames({ col: { xs: 1 } }, 'col-1');
			testClassNames({ col: {} }, '');
		});

		describe('offset', () => {
			testClassNames(
				{ offset: [1, 2, 3, 4, 5] },
				'offset-1 offset-sm-2 offset-md-3 offset-lg-4 offset-xl-5'
			);
			testClassNames({ offset: [1, 2, 3, 4] }, 'offset-1 offset-sm-2 offset-md-3 offset-lg-4');
			testClassNames({ offset: [1, 2, 3] }, 'offset-1 offset-sm-2 offset-md-3');
			testClassNames({ offset: [1, 2] }, 'offset-1 offset-sm-2');
			testClassNames({ offset: [1] }, 'offset-1');
			testClassNames({ offset: [] }, '');
			testClassNames(
				{
					offset: {
						xs: 1,
						sm: 2,
						md: 3,
						lg: 4,
						xl: 5,
					},
				},
				'offset-1 offset-sm-2 offset-md-3 offset-lg-4 offset-xl-5'
			);
			testClassNames(
				{ offset: { xs: 1, sm: 2, md: 3, lg: 4 } },
				'offset-1 offset-sm-2 offset-md-3 offset-lg-4'
			);
			testClassNames({ offset: { xs: 1, sm: 2, md: 3 } }, 'offset-1 offset-sm-2 offset-md-3');
			testClassNames({ offset: { xs: 1, sm: 2 } }, 'offset-1 offset-sm-2');
			testClassNames({ offset: { xs: 1 } }, 'offset-1');
			testClassNames({ offset: {} }, '');
		});
	});
});
