import styled from 'styled-components';
import { CtaSmall } from '../../../styles';

export const Container = styled.div`
	display: flex;
	width: 14px;
	padding: 1px 4px;
	align-items: flex-start;
	gap: 10px;
	border-radius: 3px;

	background: ${(props) =>
		props.active
			? props.theme.colors.primary.primary
			: props.theme.colors.greys.gandalf};
`;

export const StyledValue = styled(CtaSmall)`
	color: ${(props) =>
		props.active
			? props.theme.colors.blacksAndWhite.white
			: props.theme.colors.greys.dawn};
`;
