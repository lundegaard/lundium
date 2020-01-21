const findElementById = elementId =>
	typeof document !== 'undefined' ? document.getElementById(elementId) : null;

export default findElementById;
