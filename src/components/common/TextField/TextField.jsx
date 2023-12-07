import React from 'react';
import { Container, TextArea } from './TextField.styles';

export const TextField = (props) => {
	return (
		<Container>
			<TextArea
				placeholder="General Treatment Plan here..."
				rows={4}
				{...props}
			/>
		</Container>
	);
};
