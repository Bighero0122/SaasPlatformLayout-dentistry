import React from 'react';
import { Container, GoHome } from './NotFound.styles';

export const Notfound = () => {
	return (
		<Container>
			<GoHome to="/">Go Back To Home</GoHome>
		</Container>
	);
};
