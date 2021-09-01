import React, {
	Children,
	cloneElement,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useState,
} from 'react';
import PropTypes from 'prop-types';
import { T, cond, curry, equals, identity, o, prop } from 'ramda';
import { cx } from 'ramda-extension';

import AccordionItem from '../AccordionItem';
import Box from '../Box';

const clone = curry((props, elem) => cloneElement(elem, props));

const Accordion = forwardRef(({ openItemIndex, className, children }, ref) => {
	const [indexOpen, setIndexOpen] = useState(openItemIndex);

	useEffect(() => {
		if (!isNaN(openItemIndex)) {
			setIndexOpen(openItemIndex);
		}
	}, [openItemIndex]);

	useImperativeHandle(ref, () => ({ setActiveIndex: setIndexOpen }));

	return (
		<Box className={cx('accordion', className)}>
			{Children.map(children, (child, index) =>
				cond([
					[
						o(equals(AccordionItem), prop('type')),
						clone({ index, indexOpen, setIndexOpen }),
					],
					[T, identity],
				])(child),
			)}
		</Box>
	);
});

Accordion.displayName = 'forwardRef(Accordion)';

Accordion.propTypes = {
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string),
	]),
	/** Index of open item. */
	openItemIndex: PropTypes.number,
};

export default Accordion;
