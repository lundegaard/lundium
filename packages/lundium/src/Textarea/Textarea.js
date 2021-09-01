import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextareaControl from '../TextareaControl';
import FormField from '../FormField';
import Text from '../Text';

const Textarea = ({
	value,
	maxCharacters,
	afterControl,
	validate = [],
	...rest
}) => (
	<FormField
		control={TextareaControl}
		kind="textarea"
		value={value}
		validate={validate}
		{...rest}
		afterControl={
			maxCharacters ? (
				<Fragment>
					<Text className="form-group__counter">
						{value.length} / {maxCharacters}
					</Text>
					{afterControl}
				</Fragment>
			) : (
				afterControl
			)
		}
	/>
);

Textarea.propTypes = {
	/** Additional content to render after the control. */
	afterControl: PropTypes.element,
	/** Additional content to render before the control. */
	beforeControl: PropTypes.element,
	/** Field's control component */
	control: PropTypes.elementType.isRequired,
	/** If set, control is disabled */
	disabled: PropTypes.bool,
	/** Node shown in error state. */
	error: PropTypes.node,
	formGroupClassName: PropTypes.string,
	/** @ignore */
	generatedID: PropTypes.string,
	/** Additional props to pass to the FormGroup */
	groupProps: PropTypes.object,
	/** If `true`, input label has floating animation. */
	hasFloatingLabel: PropTypes.bool,
	/** Used to pair control with a label. If undefined, we use generated one. */
	id: PropTypes.any,
	/** If `true`, label is absolutely positioned on the right side of
	 * the form group. */
	inline: PropTypes.bool,
	/** If `true`, label is hidden. */
	isLabelHidden: PropTypes.bool,
	/** Used to pass a context className to FormGroup
	 * (to properly style FormControl and Label) */
	kind: PropTypes.string,
	/** Label value */
	label: PropTypes.node,
	/** Additional props to pass to the Label */
	labelProps: PropTypes.object,
	/** Legend inside text input. */
	legendText: PropTypes.string,
	maxCharacters: PropTypes.number,
	/** Name of the field */
	name: PropTypes.string.isRequired,
	/** If set, control is readOnly */
	readOnly: PropTypes.bool,
	/** If set, control is required */
	required: PropTypes.bool,
	/** Assign a suffix component (e.g. Icon) to Input */
	suffix: PropTypes.node,
	validate: PropTypes.arrayOf(PropTypes.func),
	value: PropTypes.string,
	/** Node shown in warning state. */
	warning: PropTypes.node,
};

export default Textarea;
