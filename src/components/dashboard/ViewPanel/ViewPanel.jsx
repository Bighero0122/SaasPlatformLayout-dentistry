import React from 'react';
import { Container, IconImg, IconContainer } from './ViewPanel.styles';

export const ViewPanel = () => {
	return (
		<Container>
			<IconContainer>
				<IconImg src="src/assets/square.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/view.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/grid.png" />
			</IconContainer>
			<IconContainer>
				<IconImg src="src/assets/teeth.png" />
			</IconContainer>
		</Container>
	);
};
