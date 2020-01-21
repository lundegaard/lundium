import { useRef } from 'react';
import { isNil } from 'ramda';

let lastID = 0;

const getLastID = () => String(lastID++);

const useGeneratedID = () => {
	const uniqueID = useRef(null);

	if (isNil(uniqueID.current)) {
		uniqueID.current = getLastID();
	}

	return uniqueID.current;
};

export default useGeneratedID;
