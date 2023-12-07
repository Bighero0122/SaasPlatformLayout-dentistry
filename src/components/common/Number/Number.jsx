import React from 'react';
import { Container, StyledValue } from './Number.styles';

export const Number = (props) => {
	const { name, active } = props;

	return (
		<Container active={active}>
			<StyledValue active={active}>{name}</StyledValue>
		</Container>
	);
};
