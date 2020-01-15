import { T, __, cond, identity, nth, of, useWith } from 'ramda';
import {
	alwaysEmptyArray,
	isArray,
	isNilOrEmpty,
	isNilOrEmptyString,
	isPlainObject,
	mapIndexed,
} from 'ramda-extension';

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];
const getBreakpointByIndex = nth(__, BREAKPOINTS);

const prepareBreakpointArrayFromObject = obj =>
	BREAKPOINTS.map(breakpoint => (isNilOrEmptyString(obj[breakpoint]) ? null : obj[breakpoint]));

const prepareBreakpointArray = cond([
	[isNilOrEmpty, alwaysEmptyArray],
	[isPlainObject, prepareBreakpointArrayFromObject],
	[isArray, identity],
	[T, of],
]);
// eslint-disable-next-line react-hooks/rules-of-hooks
const prepareClassNameFactory = useWith(__, [identity, getBreakpointByIndex]);

/**
 * Creates array of classNames for grid framework based on "xs, sm, md, lg, xl" breakpoints.
 *
 * @sig (String -> String -> String) -> [String] -> [String]
 *
 * @example
 *
 *    classNamesByBreakpoint(
 *      (col, breakpoint) => `col-${breakpoint}-${col}`,
 *      [1, 2]
 *    )
 *    // ["col-xs-1", "col-sm-2"]
 *
 *    or
 *
 *    classNamesByBreakpoint(
 *      (col, breakpoint) => `col-${breakpoint}-${col}`,
 *      {xs: 1, sm: 2}
 *    )
 *    // ["col-xs-1", "col-sm-2"]
 *
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
const classNamesByBreakpoint = useWith(mapIndexed, [
	prepareClassNameFactory,
	prepareBreakpointArray,
]);

export default classNamesByBreakpoint;
