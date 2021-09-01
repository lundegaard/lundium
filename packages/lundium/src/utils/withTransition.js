import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { transitionShape } from './types';

const withTransition = (
	Component,
	{ trigger, TransitionComponent = CSSTransition },
) => {
	const WithTransition = ({ transition, ...otherProps }) => {
		const visibilityTrigger = otherProps[trigger];

		if (transition) {
			return (
				<TransitionGroup>
					{visibilityTrigger && (
						<TransitionComponent {...transition} in={visibilityTrigger}>
							<Component {...otherProps} />
						</TransitionComponent>
					)}
				</TransitionGroup>
			);
		}

		return visibilityTrigger && <Component {...otherProps} />;
	};

	WithTransition.propTypes = {
		transition: transitionShape,
	};

	return WithTransition;
};

export default withTransition;
