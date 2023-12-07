import React from 'react';
import {
	Container,
	IconContainer,
	IconImg,
	WheelCenter,
	IconButton,
} from './WheelPanel.styles';
import { state } from '../../../store';

export const WheelPanel = ({ rotateLeft, rotateRight, rotateReset }) => {
	return (
		<Container>
			<IconContainer>
				<IconButton onClick={() => (state.open = !state.open)}>
					<IconImg src="src/assets/upper.png" />
				</IconButton>
			</IconContainer>
			<IconContainer>
				<IconButton onClick={rotateRight}>
					<IconImg src="src/assets/face_right.png" />
				</IconButton>
				<WheelCenter>
					<IconButton onClick={rotateReset}>
						<IconImg src="src/assets/face_front.png" />
					</IconButton>
				</WheelCenter>
				<IconButton onClick={rotateLeft}>
					<IconImg src="src/assets/face_left.png" />
				</IconButton>
			</IconContainer>
			<IconContainer>
				<IconButton onClick={() => (state.open = !state.open)}>
					<IconImg src="src/assets/lower.png" />
				</IconButton>
			</IconContainer>
		</Container>
	);
};
