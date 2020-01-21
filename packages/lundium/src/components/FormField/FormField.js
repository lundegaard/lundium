import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Label from '../Label';
import FormGroup from '../FormGroup';
import FormText from '../FormText';
import Box from '../Box';
import withGeneratedID from '../../utils/withGeneratedID';

const FormField = forwardRef(
	(
		{
			afterControl,
			beforeControl,
			control: ControlComponent,
			error,
			generatedID,
			groupProps,
			hasFloatingLabel,
			kind,
			label,
			labelProps,
			legendText,
			id,
			isLabelHidden,
			inline,
			name,
			warning,
			disabled,
			readOnly,
			suffix,
			required,
			formGroupClassName,
			...rest
		},
		ref
	) => {
		const uniqueID = id || `${name}-${generatedID}`;
		const formTextChildren = error || warning;
		const helpID = `${uniqueID}-help`;

		const ariaAttributes = formTextChildren ? { 'aria-describedby': helpID } : {};

		const hasError = Boolean(error);
		const hasWarning = Boolean(warning);

		return (
			<FormGroup
				className={cx(formGroupClassName, suffix && 'has-suffix', {
					'is-required': required,
					'is-disabled': disabled,
				})}
				hasError={hasError}
				hasFloatingLabel={hasFloatingLabel}
				hasLabel={Boolean(label) && !isLabelHidden}
				hasWarning={hasWarning}
				kind={kind}
				legendText={legendText}
				inline={inline}
				{...groupProps}
			>
				{beforeControl}
				<ControlComponent
					{...ariaAttributes}
					id={uniqueID}
					name={name}
					disabled={disabled}
					readOnly={readOnly}
					required={required}
					ref={ref}
					{...rest}
				/>
				{afterControl}
				{label && (
					<Label
						htmlFor={uniqueID}
						isHidden={isLabelHidden}
						disabled={disabled}
						readOnly={readOnly}
						{...labelProps}
					>
						{label}
					</Label>
				)}
				{legendText && <span className="form-control__legend">{legendText}</span>}
				{formTextChildren && (
					<FormText hasError={hasError} hasWarning={hasWarning} id={helpID}>
						{formTextChildren}
					</FormText>
				)}
				{suffix && <Box className="form-control__suffix">{suffix}</Box>}
			</FormGroup>
		);
	}
);

FormField.displayName = 'forwardRef(FormField)';

FormField.propTypes = {
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

export { FormField };

export default withGeneratedID(FormField);
// export default FormField;
// const test = () => <div>asdf</div>;
// export default test;
