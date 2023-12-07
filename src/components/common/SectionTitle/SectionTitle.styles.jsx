import styled from 'styled-components';
import { CtaBig } from '../../../styles';

export const Container = styled.div`
	display: flex;
	padding: 0px 16px;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const SectionName = styled.div`
	display: flex;
	padding: 8px 0px;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
`;

export const StyledDown = styled.img`
	width: 16px;
	height: 16px;
`;

export const StyledIcon = styled.button`
	display: flex;
	padding: 4px;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	cursor: pointer;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const StyledSectionName = styled(CtaBig)`
	font-weight: ${(props) => props.theme.typography.weight.bold};
`;
