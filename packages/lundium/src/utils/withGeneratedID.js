import React, { forwardRef } from 'react';

import { getDisplayName } from './getDisplayName';
import useGeneratedID from './useGeneratedID';

const withGeneratedId = NextComponent => {
	const WithGeneratedID = forwardRef((props, ref) => {
		const generatedID = useGeneratedID();

		return <NextComponent generatedID={generatedID} ref={ref} {...props} />;
	});

	WithGeneratedID.displayName = `withGeneratedId(${getDisplayName(NextComponent)})`;

	return WithGeneratedID;
};

export default withGeneratedId;
