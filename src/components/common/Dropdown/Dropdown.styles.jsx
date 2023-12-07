import styled from 'styled-components';

export const Container = styled.div``;

export const Select = styled.select`
	width: 100%;
	padding: 6px 8px 6px 12px;
	border-radius: 8px;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	border: ${(props) => `1px solid ${props.theme.colors.greys.gainsboro}`};
`;
