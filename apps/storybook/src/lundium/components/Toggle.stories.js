import React, { useState } from 'react';
import { Toggle } from 'lundium';

export default { title: 'Form/Toggle', component: Toggle };

const StatefulToggle = () => {
	const [checked, setChecked] = useState(true);

	return (
		<Toggle
			checked={checked}
			checkedLabel="Open"
			uncheckedLabel="Closed"
			onChange={() => setChecked(checked => !checked)}
			name="generic-toggle"
		/>
	);
};

export const basic = () => <StatefulToggle />;
