import { compose, concat } from 'ramda';

import classNamesByBreakpoint from './classNamesByBreakpoint';

describe('classNamesByBreakpoint', () => {
	const exampleClassNameFactory = (x, y) => `${y}-${x}`;

	it('generates breakpoints classnames by provided array', () => {
		expect(
			classNamesByBreakpoint(exampleClassNameFactory, [1, 2, 3, 4]),
		).toEqual(['xs-1', 'sm-2', 'md-3', 'lg-4']);
	});

	it('can accept value', () => {
		expect(classNamesByBreakpoint(exampleClassNameFactory, '1')).toEqual([
			'xs-1',
		]);
	});

	it('use className factory to create output className', () => {
		expect(
			classNamesByBreakpoint(
				compose(concat('hello-'), exampleClassNameFactory),
				[1, 2],
			),
		).toEqual(['hello-xs-1', 'hello-sm-2']);
	});
});
