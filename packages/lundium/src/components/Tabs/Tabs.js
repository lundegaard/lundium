import PropTypes from 'prop-types';
import { cx, noop } from 'ramda-extension';
import React, { Children, createElement, forwardRef, useImperativeHandle, useState } from 'react';
import { dissoc } from 'ramda';

import Box from '../Box';
import Tab from '../Tab';
import TabBar from '../TabBar';

const omitTabLabel = dissoc('tabLabel');

const Tabs = forwardRef(
	({ className, defaultActiveIndex, children, onTab = noop, ...otherProps }, ref) => {
		const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0);
		const tabBarContent = Children.map(children, (child, index) => {
			const handleTabClick = index => event => {
				setActiveIndex(index);
				onTab(index);
				event.preventDefault();
			};

			const { tabLabel, ...childProps } = child.props;

			return (
				<Tab
					{...childProps}
					isActive={activeIndex === index}
					onClick={handleTabClick(index)}
					label={tabLabel}
				/>
			);
		});

		const childrenArray = Children.toArray(children);
		const activeTab = childrenArray[activeIndex];

		useImperativeHandle(ref, () => ({ setActiveIndex }));

		return (
			<Box className={cx('tabs', className)} {...otherProps}>
				<TabBar>{tabBarContent}</TabBar>
				{createElement(activeTab.type, omitTabLabel(activeTab.props))}
			</Box>
		);
	}
);

Tabs.displayName = 'forwardRef(Tabs)';

Tabs.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	defaultActiveIndex: PropTypes.number,
	onTab: PropTypes.func,
};

export default Tabs;
