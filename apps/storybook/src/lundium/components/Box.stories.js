import React from 'react';
import { Box } from 'lundium';

export default { title: 'Box' };

const BasicShowcase = props => (
	<div>
		<Box
			style={{
				height: 100,
				border: '1px solid black',
				backgroundColor: 'gray',
			}}
			{...props}
		/>
		<Box
			style={{
				height: 100,
				border: '1px solid black',
				backgroundColor: 'gray',
			}}
			{...props}
		/>
	</div>
);

export const basic = () => <BasicShowcase />;

export const withBorders = () => <BasicShowcase m={1} />;

export const withResponsiveMargins = () => <BasicShowcase m={[1, 2, 3, 4, 5]} />;
