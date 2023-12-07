import React from 'react';
import { Container, StyledInput } from './ItemInput.styles';

export const ItemInput = (props) => {
	const { suffix, ...rest } = props;

	return (
		<Container suffix={suffix}>
			<StyledInput {...rest} type='number'/>
		</Container>
	);
};
