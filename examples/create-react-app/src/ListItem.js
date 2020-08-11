import React from 'react';
import { Button, Grid, Icon, Tooltip, useTheme, Checkbox } from 'lundium';
import { cx } from 'ramda-extension';

const ListItem = ({ item: { name, id, state }, deleteItem, completeItem }) => {
	const { locale } = useTheme();

	return (
		<li className="item">
			<Grid row className="flex-nowrap pl-1" justifyContent="between">
				<Grid className="ml-3 mb-1">
					<Checkbox
						className={cx({ completed: state === 'completed' })}
						id={name}
						name={name}
						label={name}
						onChange={() => completeItem(id)}
						checked={state === 'completed'}
					/>
				</Grid>
				<Grid col="1" className="mt-3 ml-0 mr-4">
					<Tooltip tooltip={locale.deleteText || 'Delete'}>
						<Button kind="primary" size="xs" onClick={() => deleteItem(id)}>
							<Icon className="ml-1" type="delete" />
						</Button>
					</Tooltip>
				</Grid>
			</Grid>
		</li>
	);
};

export default ListItem;
