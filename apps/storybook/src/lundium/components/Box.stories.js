import React from 'react';
import { Box } from 'lundium';

export default { title: 'Box', component: Box };

const styleObject = {
	height: 100,
	width: 200,
	border: '1px solid black',
	backgroundColor: 'gray',
};

const BasicShowcase = props => (
	<div>
		<Box style={styleObject} {...props} />
		<Box style={styleObject} {...props} />
	</div>
);

export const basic = () => <BasicShowcase />;

export const withBorders = () => <BasicShowcase m={1} />;

export const withResponsiveMargins = () => <BasicShowcase m={[1, 2, 3, 4, 5]} />;
