import React from 'react';
import PropTypes from 'prop-types';

import CheckboxControl from '../CheckboxControl';
import FormField from '../FormField';

const Checkbox = props => <FormField control={CheckboxControl} kind="checkbox" {...props} />;

Checkbox.propTypes = {
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
	/** Used to pair the control with a label. If undefined, we use a generated one. */
	id: PropTypes.any,
	/** If `true`, label is absolutely positioned on the right side of the form group. */
	inline: PropTypes.bool,
	/** If `true`, label is hidden. */
	isLabelHidden: PropTypes.bool,
	/** Used to pass a context className to FormGroup (to properly style FormControl and Label) */
	kind: PropTypes.string,
	/** Label value */
	label: PropTypes.node,
	/** Additional props to pass to the Label */
	labelProps: PropTypes.object,
	/** Legend inside text input. */
	legendText: PropTypes.string,
	/** Name of the field */
	name: PropTypes.string.isRequired,
	/** If set, control is readOnly */
	readOnly: PropTypes.bool,
	/** If set, control is required */
	required: PropTypes.bool,
	/** Assign a suffix component (e.g. Icon) to Input */
	suffix: PropTypes.node,
	/** Node shown in warning state. */
	warning: PropTypes.node,
};

export default Checkbox;
