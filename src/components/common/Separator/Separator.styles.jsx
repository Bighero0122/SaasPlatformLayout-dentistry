import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 8px 0px;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const SeparateLine = styled.div`
	width: 100%;
	height: 1px;
	background: ${(props) => props.theme.colors.greys.gandalf};
`;
