import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 8px 16px;
	align-items: center;
	gap: 4px;
	flex: 1 0 0;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 8px 16px;
	border-radius: 8px;
	border: ${(props) => `1px solid ${props.theme.colors.greys.gainsboro}`};
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	resize: none;
`;
