import React from 'react';
import { Grid } from 'lundium';
import { boolean, withKnobs } from '@storybook/addon-knobs';

export default { title: 'Grid', decorators: [withKnobs] };

const border = {
	border: '1px solid gray',
	padding: '8px',
};

export const withResponsiveStyles = () => (
	<Grid container fluid={boolean('fluid', false)}>
		<Grid row>
			<Grid col={[4]}>
				<div style={border}>A</div>
			</Grid>
			<Grid col={[4]}>
				<div style={border}>B</div>
			</Grid>
			<Grid col={[4]}>
				<div style={border}>C</div>
			</Grid>
		</Grid>
		<Grid row>
			<Grid col={[12, 6, 4, 12]}>
				<div style={border}>A</div>
			</Grid>
			<Grid col={[12, 6, 8]}>
				<div style={border}>B</div>
			</Grid>
			<Grid col={[12, 12, 12, 4]}>
				<div style={border}>C</div>
			</Grid>
		</Grid>
	</Grid>
);

export const offsetSupport = () => (
	<Grid container fluid={boolean('fluid', false)}>
		<Grid row>
			<Grid col={[4]}>
				<div style={border}>A</div>
			</Grid>
			<Grid col={[4]} offset={[4]}>
				<div style={border}>C</div>
			</Grid>
		</Grid>
		<Grid row>
			<Grid col={[4, 3]}>
				<div style={border}>A</div>
			</Grid>
			<Grid col={[4, 3, 1]} offset={[4, 6, 8]}>
				<div style={border}>C</div>
			</Grid>
		</Grid>
	</Grid>
);
