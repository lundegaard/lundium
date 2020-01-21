import { head } from 'ramda';

const getParentContainer = (element = 'body') =>
	typeof document !== 'undefined' ? head(document.getElementsByTagName(element)) : null;

export default getParentContainer;
