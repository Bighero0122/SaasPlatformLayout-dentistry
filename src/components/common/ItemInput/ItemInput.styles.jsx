import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 2px 8px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	box-sizing: border-box;
	border-radius: 8px;
	border: ${(props) => `1px solid ${props.theme.colors.greys.gainsboro}`};
	background: ${(props) => props.theme.colors.blacksAndWhite.white};

	&:after {
		content: ${(props) => (props.suffix ? `"${props.suffix}"` : '')};
		color: ${(props) => props.theme.colors.greys.dawn};
		text-align: right;
	}
`;

export const StyledInput = styled.input`
	display: flex;
	padding: 8px 0;
	width: 100%;
	align-items: center;
	flex: 1 0 0;
	align-self: stretch;
	border: none;
	outline: none;
`;
