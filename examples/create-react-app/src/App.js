import React, { useState } from 'react';
import { Grid, ThemeProvider } from 'lundium';
import { en_US } from '@lundium/locale';
import { filter, o, not, propEq, map, when, assoc } from 'ramda';

import TodoList from './TodoList';

const App = () => {
	const [items, setItems] = useState([{ name: 'Make app', state: 'completed', id: '1' }]);

	const addItem = item => setItems([...items, item]);

	const deleteItem = id => setItems(filter(o(not, propEq('id', id)), items));

	const completeItem = id =>
		setItems(map(when(propEq('id', id), assoc('state', 'completed')), items));

	return (
		<ThemeProvider theme={{ locale: en_US }}>
			<Grid className="app mt-1" justifyContent="center">
				<TodoList
					items={items}
					addItem={addItem}
					deleteItem={deleteItem}
					completeItem={completeItem}
				/>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
