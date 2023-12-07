import React from 'react';
import { Select } from './Dropdown.styles';

export const Dropdown = (props) => {
	return (
		<Select {...props}>
			<option>Please Select</option>
			<option value="00">00</option>
			<option value="none">None</option>
		</Select>
	);
};
