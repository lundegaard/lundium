import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children, container }) => {
	const [mountNode, setMountNode] = useState(null);

	useEffect(() => {
		setMountNode(ReactDOM.findDOMNode(container));
	}, [container]);

	return mountNode ? ReactDOM.createPortal(children, mountNode) : null;
};

Portal.propTypes = {
	/** Content to render. */
	children: PropTypes.node,
	/** Container where to render */
	container: PropTypes.object,
};

export default Portal;
