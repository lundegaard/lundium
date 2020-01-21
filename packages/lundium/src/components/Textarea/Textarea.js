import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TextareaControl from '../TextareaControl';
import FormField from '../FormField';
import Text from '../Text';

const Textarea = ({ value, maxCharacters, afterControl, validate = [], ...rest }) => (
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
	afterControl: PropTypes.node,
	maxCharacters: PropTypes.number,
	validate: PropTypes.arrayOf(PropTypes.func),
	value: PropTypes.string,
	...FormField.propTypes,
};

export default Textarea;
