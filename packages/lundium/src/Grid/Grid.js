import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { complement, map, o, pick } from 'ramda';
import {
	cx,
	flipIncludes,
	isArray,
	isNilOrEmpty,
	isNotEmpty,
	isPlainObject,
} from 'ramda-extension';

import {
	responsiveBoolOrStringPropType,
	responsiveBoolPropType,
	responsiveNumberPropType,
	responsiveStringOrNumberPropType,
} from '../utils/types';
import getResponsivePropType from '../utils/getResponsivePropType';
import propToClassName from '../utils/propToClassName';
import Box from '../Box';

const isValidFlexWrap = flipIncludes(['wrap', 'nowrap']);

const isNotNilNorEmpty = complement(isNilOrEmpty);

const sanitizeCssValue = property => defaultProperty => cssValue =>
	cssValue && cssValue !== 'false' ? property : defaultProperty;

const convertToDisplay = (property, defaultProperty, cssResponsiveValue) => {
	const getProperty = sanitizeCssValue(property)(defaultProperty);

	return cssResponsiveValue &&
		(isArray(cssResponsiveValue) || isPlainObject(cssResponsiveValue))
		? map(getProperty, cssResponsiveValue)
		: getProperty(cssResponsiveValue);
};

const shouldSetFlexAutomagically = o(
	isNotEmpty,
	pick(['alignItems', 'alignSelf', 'justifyContent', 'flexDirection']),
);

/* Function is here for backwards compatibility.
Use `display` instead of `inline` and `flex` */
const getDisplay = ({ flex, ...rest }) => {
	if (flex) {
		return convertToDisplay('flex', 'block', flex);
	}

	if (shouldSetFlexAutomagically(rest)) {
		return 'flex';
	}
};

const colToClassName = propToClassName(isNotNilNorEmpty)('col');
const flexWrapToClassName = propToClassName(isValidFlexWrap)('flex');
const flexDirectionToClassName = propToClassName(isNotNilNorEmpty)('flex');
const alignSelfToClassName = propToClassName(isNotNilNorEmpty)('align-self');
const alignItemsToClassName = propToClassName(isNotNilNorEmpty)('align-items');
const justifyContentToClassName = propToClassName(isNotNilNorEmpty)(
	'justify-content',
);
const offsetToClassName = propToClassName(isNotNilNorEmpty)('offset');

/**
 * Grid component is based on Twitter bootstraps naming for class names.
 * Can act as a container, row or column.
 *
 * If Grid is a container you can determine if it is fluid or not by
 * `fluid` property.
 * If Grid is a column you can add offset with `offset` property.
 *
 * Way you specify responsive behaviour is based on
 * https://github.com/jxnblk/styled-system#responsive-style-props.
 * One difference is that you must always pass an array.
 */
const Grid = forwardRef((props, ref) => {
	const {
		children,
		className,
		container,
		fluid,
		row,
		colFlex,
		col,
		offset,
		flexWrap,
		alignItems,
		alignSelf,
		flexDirection,
		justifyContent,
		...rest
	} = props;

	return (
		<Box
			{...rest}
			className={cx(
				{
					container: container && !fluid,
					['container-fluid']: container && fluid,
					row,
					col: colFlex,
				},
				flexWrapToClassName(flexWrap),
				flexDirectionToClassName(flexDirection),
				alignSelfToClassName(alignSelf),
				alignItemsToClassName(alignItems),
				justifyContentToClassName(justifyContent),
				colToClassName(col),
				offsetToClassName(offset),
				className,
			)}
			display={getDisplay(props)}
			ref={ref}
		>
			{children}
		</Box>
	);
});

Grid.displayName = 'forwardRef(Grid)';

const alignPropType = getResponsivePropType(
	PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline', '']),
);

Grid.propTypes = {
	/** Items positioning in containter's cross axis. */
	alignItems: alignPropType,
	/** Single item positioning in containter's cross axis. */
	alignSelf: alignPropType,
	/** Children to be rendered in the main container. */
	children: PropTypes.node,
	/** Class name for root. */
	className: PropTypes.string,
	/** Grid system column. */
	col: responsiveStringOrNumberPropType,
	/** If true, column is flexible in container. */
	colFlex: PropTypes.bool,
	/** If true, Grid represents container. */
	container: PropTypes.bool,
	/** @deprecated Use `display` instead. If true, display flex is used. */
	flex: responsiveBoolOrStringPropType,
	/** Direction of flex display. */
	flexDirection: getResponsivePropType(
		PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse', '']),
	),
	/** If true, flex items wrap in container. */
	flexWrap: getResponsivePropType(PropTypes.oneOf(['wrap', 'nowrap'])),
	/** If true, Grid represents fluid container.
	 * Use only if `container` is set to `true`. */
	fluid: responsiveBoolPropType,
	/** Items positioning in containter's main axis. */
	justifyContent: getResponsivePropType(
		PropTypes.oneOf(['start', 'center', 'end', 'around', 'between', '']),
	),
	/** Grid column`s offset. Use only if `col` is set. */
	offset: responsiveNumberPropType,
	/** If true, Grid represents row. */
	row: PropTypes.bool,
	...Box.propTypes,
};

export default Grid;
