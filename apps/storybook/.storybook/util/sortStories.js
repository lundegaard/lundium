// Inspired by: https://github.com/sumup-oss/circuit-ui/blob/598f9630ff049b0768485670d6e6f978660e4072/.storybook/util/story-helpers.js
import { always, equals, indexOf, split, when } from 'ramda';
import { composeC } from 'ramda-extension';

const splitStoryName = split('/');

const getSortPosition = composeC(when(equals(-1), always(1000)), indexOf);

const sortStories = sortOrder => {
	const groups = Object.keys(sortOrder);

	return (a, b) => {
		const aKind = a[1].kind;
		const bKind = b[1].kind;
		const [aGroup, aComponent] = splitStoryName(aKind);
		const [bGroup, bComponent] = splitStoryName(bKind);

		// Preserve story sort order.
		if (aKind === bKind) {
			return 0;
		}

		// Sort stories in a group.
		if (aGroup === bGroup) {
			const group = sortOrder[aGroup] || [aGroup];

			return (
				getSortPosition(aComponent, group) - getSortPosition(bComponent, group)
			);
		}

		// Sort groups.
		return getSortPosition(aGroup, groups) - getSortPosition(bGroup, groups);
	};
};

export default sortStories;
