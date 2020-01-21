import { always, both, prop, unless } from 'ramda';
import { dispatch, isNotEmpty, isString } from 'ramda-extension';

/**
 * Returns the display name of a React component, falling back appropriately.
 *
 * @param {React.Component} Component React component to get the name of
 * @returns {string}
 */
export const getDisplayName = dispatch([
	prop('displayName'),
	prop('name'),
	unless(both(isString, isNotEmpty), always('Component')),
]);
